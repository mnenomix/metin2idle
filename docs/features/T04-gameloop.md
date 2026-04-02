# T4: Game-Loop / Tick-System

## Übersicht
Das Tick-System ist der Kern des Idle-Games. Der Server berechnet für jeden aktiven Spieler alle X Sekunden einen "Tick" - Kampf, Loot, XP, Heilung etc. Das System muss effizient laufen um viele gleichzeitige Spieler zu unterstützen.

## Architektur

### Tick-Rate
- **Basis**: 3 Sekunden pro Tick
- **Mit Angriffsgeschwindigkeits-Buff**: Reduziert bis minimal 1 Sekunde
- Tick-Rate ist pro Spieler individuell (abhängig von Buffs/Stats)

### Server-Loop
```
Alle 1 Sekunde (= minimaler Spieler-Tick):
  → Iteriere über alle aktiven Sessions in Redis
  → Für jede Session: Prüfe ob next_tick_at <= jetzt
  → Wenn ja: Berechne Tick → Update Redis → Setze next_tick_at → Sende Event (wenn online)
```

- Der Server-Loop läuft mit **1s Auflösung** (= schnellster möglicher Spieler-Tick)
- Jeder Spieler hat einen eigenen `next_tick_at` Timestamp in Redis
- Basis-Tick: 3s → die meisten Spieler werden nur jeden 3. Loop berechnet
- Mit Angriffsgeschwindigkeits-Buff: Tick sinkt bis auf 1s → wird jeden Loop berechnet
- Pro Sekunde werden also nur die Spieler berechnet deren Tick fällig ist

### Beispiel
```
Spieler A: Tick 3s (kein Buff)    → wird ~333x pro 1000s berechnet
Spieler B: Tick 2s (kleiner Buff) → wird ~500x pro 1000s berechnet
Spieler C: Tick 1s (Max-Buff)     → wird ~1000x pro 1000s berechnet
```

### Session-Verwaltung
- Aktive Sessions leben in Redis (→ T2)
- Beim Start einer Aktion: Session wird in Redis angelegt
- Beim Stop: Session wird entfernt, Ergebnis in PostgreSQL persistiert
- Periodisch (alle 30s): Snapshot nach PostgreSQL als Backup

## Tick-Berechnung pro Aktion

### Leveln
```
1. Wähle zufälliges Monster aus Zone
2. Berechne Spieler-Schaden → Monster-HP reduzieren
3. Berechne Monster-Schaden → Spieler-HP reduzieren
4. Prüfe Heilung (HP-Trank Trigger, Elixier)
5. Wenn Monster tot:
   - XP gutschreiben
   - Prüfe Level-Up → Statpunkte/Skillpunkte sammeln
   - Nächstes Monster spawnen
6. Wenn Spieler tot:
   - XP-Verlust berechnen
   - Aktion stoppen
7. Buff-Timer reduzieren
```

### Farmen
```
1-4. Wie Leveln (Kampf-Berechnung identisch)
5. Wenn Monster tot:
   - Yang gutschreiben
   - Drop-Roll auf Monster Drop-Tabelle
   - Drop-Roll auf Metinstein (Zone-Chance)
   - Drop-Roll auf Drachensplitter
   - Drop-Roll auf Biologen-Items
   - Nächstes Monster spawnen
6-7. Wie Leveln
```

### Metinstein abfarmen
```
1. Berechne Spieler-Schaden → Metinstein-HP reduzieren
2. Berechne Metinstein-Schaden → Spieler-HP reduzieren
3. Prüfe Heilung
4. Wenn Metinstein zerstört:
   - Level-Differenz prüfen (max 15 Level über Stein)
   - Wenn ok: Drop-Roll auf Metinstein Drop-Tabelle
   - Nächster Metinstein aus Queue (falls vorhanden)
5. Wenn Spieler tot:
   - Aktueller Metinstein geht verloren
   - Aktion stoppen
6. Buff-Timer reduzieren
```

### Dungeon
```
1-4. Kampf-Berechnung wie Leveln
5. Wenn Monster tot:
   - XP gutschreiben
   - Drop-Roll (Etagen-Loot)
   - Wenn alle Monster der Etage tot → nächste Etage
   - Wenn letzte Etage → Boss spawnen
6. Boss-Kampf:
   - Wie normaler Kampf aber Boss-Stats
   - Boss besiegt → Boss Drop-Tabelle + Dungeon-Abschluss
7. Wenn Spieler tot:
   - Dungeon gescheitert, kein Loot
   - Ticket + Verbrauchsgüter verloren
8. Buff-Timer reduzieren
```

### Mining
```
1. Abbauversuch → Erfolg/Fehlschlag (basierend auf Spitzhacke + Mining-Skill)
2. Erfolg: Zufälliges Erz aus Pool → Inventar
3. Spitzhacke-XP addieren
4. Prüfe Spitzhacke Level-Up
5. Prüfe Mining-Bücher-Drop
```

### Fischen
```
1. Fangversuch → Erfolg/Fehlschlag (basierend auf Angel-Stufe)
2. Erfolg: Zufälliger Fisch aus Pool → Inventar
3. Köder verbrauchen
4. Angel-XP addieren
5. Prüfe Angel Level-Up
6. Wenn Köder leer → Aktion stoppen
```

## Kampfformel

### Spieler-Schaden pro Tick
```
base_damage = Waffen-ATK + (STR * Klassen-Multiplikator)
skill_bonus = Summe aller aktiven Skill-Boni
buff_bonus = Summe aller aktiven Buff-Boni
pferd_bonus = Pferd-Stats-Boni

raw_damage = (base_damage + skill_bonus + buff_bonus + pferd_bonus)
crit_roll = Random → wenn Crit: raw_damage * 1.5 (+ Crit-Boni)
defense_reduction = Monster-DEF / (Monster-DEF + 100)
final_damage = raw_damage * (1 - defense_reduction)
```

### Monster-Schaden pro Tick
```
raw_damage = Monster-ATK
defense_reduction = (Spieler-DEF + Rüstung-DEF + Buffs) / (Spieler-DEF + Rüstung-DEF + Buffs + 100)
final_damage = raw_damage * (1 - defense_reduction)
```

### Heilung pro Tick
```
1. Elixier der Sonne: Wenn Spieler Schaden nimmt UND Kontingent > 0
   → Heile Schaden (bis Kontingent aufgebraucht)
2. HP-Trank: Wenn HP < Trigger-% UND Cooldown abgelaufen UND Vorrat > 0
   → Heile Trank-Wert, Cooldown starten, Vorrat -1
3. Passive Regeneration: +X HP pro Tick (basierend auf VIT)
```

## Performance-Optimierung

### Batch-Processing
- Nicht jede Session einzeln iterieren
- Sessions nach nächstem Tick-Zeitpunkt sortieren
- Nur fällige Sessions bearbeiten

### Lazy Evaluation
- Mining/Fischen: Einfachere Berechnung als Kampf → schneller
- Offline-Sessions: Kein WebSocket-Event senden → weniger I/O

### Grenzen
- Bei 1000 aktiven Spielern à 3s Tick = ~333 Ticks/Sekunde
- Jeder Tick: Redis Read + Berechnung + Redis Write + ggf. WS-Event
- Kritischer Pfad muss unter 3ms pro Tick bleiben

### Skalierung (falls nötig)
- Worker-Threads für Tick-Berechnung
- Sessions auf mehrere Worker verteilen
- Redis Cluster für mehr Durchsatz

## Monitoring
- Tick-Dauer loggen (Durchschnitt, P95, P99)
- Aktive Sessions zählen
- Redis-Latenz messen
- Alert wenn Tick-Berechnung > 50ms dauert

## Festgelegt
- **1s Server-Loop** (= minimaler Tick), individuelle Tick-Rate pro Spieler (3s Basis, 1s Minimum)
- **Redis** als Primär-Store für aktive Sessions
- **Alle 30s** Snapshot nach PostgreSQL
- **Kampfformel** mit STR/DEF/Crit/Skills/Buffs/Pferd
- **Heilungs-Priorität**: Elixier → Trank → Passive Regen

## Offene Punkte
- [ ] Kampfformel Feintuning (Multiplikatoren, Balancing)
- [ ] Klassen-Multiplikatoren für Schaden (Krieger vs Schamane etc.)
- [ ] Crit-Chance Formel (Basis + DEX-Anteil + Equipment-Boni)
- [ ] Passive HP-Regeneration Formel
- [ ] Performance-Tests: Wie viele Sessions schafft der ARM-Server?
- [ ] Tick-Rate Berechnung bei Angriffsgeschwindigkeits-Buffs (Formel)
