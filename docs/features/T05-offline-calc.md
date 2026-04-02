# T5: Offline-Berechnung

## Übersicht
Wenn ein Spieler offline geht, läuft seine Idle-Aktion weiter (max 8h). Beim nächsten Login berechnet der Server was in der Zwischenzeit passiert wäre und präsentiert das Ergebnis. Die Berechnung muss schnell sein (nicht Tick-für-Tick simulieren).

## Trigger

### Wann wird offline berechnet?
1. Spieler war offline (kein Heartbeat > 60s)
2. Idle-Aktion war aktiv beim Disconnect
3. Spieler loggt sich wieder ein
4. Server berechnet Offline-Progress **vor** dem Spielzustand-Laden

### Was passiert zwischen Disconnect und Login?
- Session bleibt in Redis (TTL: 9h)
- Kein Tick-Processing mehr (Server-Loop überspringt offline Sessions)
- Bei Login: Redis-Session wird ausgelesen und offline berechnet

## Berechnungs-Ansatz

### Problem
Tick-für-Tick Simulation von 8h bei 3s Ticks = ~9.600 Ticks. Das wäre zu langsam bei vielen gleichzeitigen Logins.

### Lösung: Hochrechnung
Statt jeden Tick zu simulieren, berechnen wir das Ergebnis statistisch:

```
Offline-Dauer: 8h = 28.800 Sekunden
Tick-Rate: 3s
Anzahl Ticks: 9.600

Pro Tick (Durchschnitt zum Zeitpunkt des Disconnects):
  - Schaden am Monster: 500
  - Schaden vom Monster: 100
  - HP-Heilung (Tränke + Regen): 80

→ Netto-HP-Verlust pro Tick: 20
→ Ticks bis Tod (wenn keine Heilung mehr): HP / 20

Monster-Kill-Rate:
  - Monster-HP: 1.500
  - Ticks pro Kill: 1.500 / 500 = 3
  - Kills in 9.600 Ticks: ~3.200

XP/Loot Hochrechnung:
  - XP pro Kill * 3.200 * Effizienz-Rate
  - Yang pro Kill * 3.200 * Effizienz-Rate
  - Drop-Rolls: 3.200 * Drop-Chance pro Item
```

### Tränke & Buffs einberechnen
```
1. HP-Trank Verbrauch berechnen:
   - Trank-Trigger: Bei X% HP
   - Geschätzte Tränke pro Zeiteinheit basierend auf Schadens-Rate
   - Tränke reichen für: Vorrat / Verbrauch-Rate = Y Stunden

2. Elixier-Kontingent:
   - Schaden pro Tick * Ticks = Gesamt-Schaden-Eingang
   - Elixier deckt davon X ab → Kontingent / Schaden-pro-Tick = Ticks geschützt

3. Buff-Timer:
   - Buff läuft X Sekunden → nach Ablauf: Stats ohne Buff neu berechnen
   - Zwei Phasen: Mit Buff (stärker) → Ohne Buff (schwächer)

4. Tod-Check:
   - Wenn Tränke leer UND Elixier leer: Ab wann stirbt der Spieler?
   - Aktion endet an diesem Zeitpunkt
```

### Sonderfälle

#### Level-Up während Offline
- XP akkumulieren → wenn Schwelle erreicht: Level +1
- Statpunkte und Skillpunkte werden gesammelt (nicht auto-verteilt)
- Neue Stats (HP etc.) werden NICHT sofort angewendet (da nicht verteilt)
- Mehrere Level-Ups möglich

#### Tod während Offline
- Berechne Zeitpunkt des Todes
- Alle Ergebnisse bis zu diesem Zeitpunkt gelten
- XP-Verlust durch Tod anwenden
- Rest der Offline-Zeit: Nichts passiert

#### Inventar voll
- Wenn Inventar während Offline voll wird: Überschüssige Items gehen verloren
- Alterantiv: Overflow-Queue die beim Login abgeholt werden kann

#### Metinstein beim Farmen
- Drop-Rolls für Metinsteine werden normal berechnet
- Metinsteine landen im Inventar (wenn Platz)

## Effizienz-Rate
- Flat-Rate auf alle Ergebnisse (z.B. 80%)
- Konfigurierbar über Admin-Panel
- Offline-Boost-Item: Setzt auf 100%

## Ablauf beim Login

```
1. Client verbindet → Auth prüfen
2. Server prüft: Gibt es eine Redis-Session für diesen Charakter?
3. Wenn ja UND offline:
   a. Berechne Offline-Progress
   b. Persistiere Ergebnis in PostgreSQL (XP, Items, Yang, Level-Ups)
   c. Lösche Redis-Session
   d. Sende Offline-Report an Client
4. Client zeigt Offline-Report Pop-up
5. Spieler klickt "Einsammeln"
6. Normaler Spielzustand wird geladen
```

## Offline-Report Daten

```json
{
  "action": "farming",
  "zone": "Dunkler Wald",
  "duration_seconds": 28800,
  "died": false,
  "died_after_seconds": null,
  "efficiency_rate": 0.8,
  "results": {
    "xp_gained": 0,
    "yang_gained": 450000,
    "monsters_killed": 3200,
    "items_received": [
      { "item_id": 12, "name": "Orkzahn", "quantity": 15 },
      { "item_id": 45, "name": "Lederstiefel+0", "quantity": 1, "bonuses": [...] }
    ],
    "metin_stones_found": 2,
    "dragon_shards_found": 8,
    "potions_used": 120,
    "buffs_expired": ["Drachengott ATK"]
  },
  "level_ups": [],
  "stat_points_pending": 0,
  "skill_points_pending": 0
}
```

## Festgelegt
- **Hochrechnung** statt Tick-für-Tick Simulation
- **Flat-Rate Effizienz** (konfigurierbar, z.B. 80%)
- **Tod wird berechnet** → Aktion endet an dem Zeitpunkt
- **Statpunkte bei Level-Up sammeln** (nicht auto-verteilen)
- **Max 8h** Offline-Progress
- **Offline-Report** beim Login mit Zusammenfassung

## Offene Punkte
- [ ] Inventar-voll-Handling: Items verlieren oder Overflow-Queue?
- [ ] Performance-Test: Wie lange dauert eine Offline-Berechnung? (Ziel: < 100ms)
- [ ] Edge Case: Was wenn Server-Neustart während Offline-Phase? (Redis Persistence)
- [ ] Offline-Boost-Item: Wie wird es beim Offline-Start aktiviert?
