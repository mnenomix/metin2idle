# Feature 02: Idle-Grinding & Levelsystem

## Übersicht
Es gibt zwei getrennte Idle-Aktionen: **Leveln** (nur XP) und **Farmen** (nur Items/Drops). Der Spieler muss sich entscheiden was er gerade braucht. Zusätzlich gibt es das **Metinstein-Abfarmen** als dritte Idle-Aktion (siehe Feature 05).

## Gebiete / Maps

Wie in Metin2 gibt es levelbasierte Gebiete, jedes mit eigenen Monstern:

| Gebiet | Level-Range | Beispiel-Monster |
|--------|------------|-----------------|
| Anfängerwald | 1-10 | Wildhund, Wolf, Wildschwein |
| Dunkler Wald | 11-20 | Orc, Bärenwolf |
| Geisterwald | 21-30 | Spinne, Geist |
| ... | ... | ... |

- Spieler kann nur Gebiete betreten die seinem Level entsprechen (oder darunter)
- Jedes Gebiet hat einen Pool an Monstern mit unterschiedlicher Stärke
- Höhere Gebiete = mehr XP, bessere Drops, aber stärkere Monster

## Idle-Mechanik (Kernloop)

### Modus: Leveln
1. Spieler wählt ein **Gebiet** aus
2. Optional: **Erfahrungsringe** und andere XP-Buffs ins Loadout
3. Spieler klickt **"Leveln starten"**
4. Charakter kämpft automatisch gegen Monster
5. Pro Kill: **Nur XP** (keine Item-Drops)
6. Spieler kann jederzeit stoppen oder Gebiet wechseln

### Modus: Farmen
1. Spieler wählt ein **Gebiet** aus
2. Optional: Drop-Buffs ins Loadout
3. Spieler klickt **"Farmen starten"**
4. Charakter kämpft automatisch gegen Monster
5. Pro Kill: **Nur Items/Yang** (keine XP) + Chance auf Metinstein-Drop
6. Spieler kann jederzeit stoppen oder Gebiet wechseln

### Kampf-Berechnung (pro Tick)
- Server berechnet Kampf alle X Sekunden (Tick-Rate, z.B. alle 2-3 Sekunden)
- Faktoren: Spieler-Stats vs. Monster-Stats
- Ergebnis pro Tick:
  - **Schaden am Monster**: Basierend auf ATK, Waffe, Skills
  - **Schaden am Spieler**: Basierend auf Monster-ATK vs. Spieler-DEF
  - **Kill**: Wenn Monster-HP ≤ 0 → XP + Yang + Drop-Roll → nächstes Monster spawnt
  - **Tod des Spielers**: Wenn Spieler-HP ≤ 0 → Grinding stoppt, Spieler muss heilen

### Loadout-System
Vor jeder Aktion (Farming, Dungeon etc.) stellt der Spieler ein Loadout zusammen:
- **Item-Slots** für Verbrauchsgüter: Tränke, Elixiere, Buff-Items
- Items werden aus dem Inventar in die Slots gezogen
- Loadout kann gespeichert und wiederverwendet werden

### Heilung im Kampf

#### HP-Tränke
- **Trigger**: Einstellbar vom Spieler (z.B. "Heile bei 30% HP")
- **Cooldown**: Fix (z.B. alle 5 Sekunden) - NICHT einstellbar
- **Limit**: Vorrat aus Inventar, werden beim Verbrauch abgezogen
- Mana-Tränke: Nicht implementiert (Mana wird im Idle nicht gemanagt)

#### Elixier der Sonne
- **Trigger**: Sofort bei jedem eingehenden Schaden
- **Cooldown**: Keiner
- **Limit**: HP-Kontingent (z.B. 1.000.000 HP Heilung gesamt)
- Premium-Item: Deutlich besser als Tränke da kein Cooldown
- Spieler stirbt nur wenn: Einzelhit > aktuelle HP ODER Kontingent aufgebraucht

### Buff-Items (Drachengott, TAU, Krit-Buff etc.)
- Werden vor Aktionsstart optional ins Loadout gelegt
- Haben ein **Zeitkontingent** (z.B. 1h)
- Zeit tickt **nur runter während Aktion aktiv** ist
- Abbruch nach 30 Min → Item hat noch 50% Kontingent übrig
- Können bei nächster Aktion mit Restkontingent wiederverwendet werden

## XP & Levelsystem

### XP-Kurve
- Progressiv steigende XP-Anforderung pro Level
- Orientiert an Metin2: Exponentiell steigend, ab ~Level 60 wird es sehr grindig
- Max-Level: 99

### Level-Up Belohnungen
- 3 Statpunkte zur freien Verteilung
- 1 Skillpunkt (ab Level 5)
- Neue Gebiete werden freigeschaltet
- Neue Equipment-Slots oder Items werden verfügbar

## Drops & Loot

### Drop-Tabelle pro Monster
Jedes Monster hat eine eigene Drop-Tabelle:
- **Yang** (immer, variable Menge)
- **Verbrauchsgüter**: Tränke, Scrolls (häufig)
- **Equipment**: Waffen, Rüstung (selten)
- **Upgrade-Materialien**: Steine, Erze (selten)
- **Seltene Items**: Spezial-Drops (sehr selten)

### Drop-Chance
- Basis-Droprate pro Item festgelegt
- Mögliche Boni: Glücks-Buff, Gruppenbonus, Event-Bonus

## UI-Darstellung

### Grinding-Ansicht
- **Oben**: Aktuelles Gebiet + Monster-Sprite (2D)
- **Mitte**: HP-Balken (Spieler + Monster), Kampf-Log als Textdialog
  - "Du greifst Wildhund an. 142 Schaden."
  - "Wildhund greift dich an. 23 Schaden."
  - "Wildhund besiegt! +45 XP, +12 Yang"
- **Unten**: XP-Progressbar zum nächsten Level, Loot-Übersicht

### Gebiets-Auswahl
- Liste aller freigeschalteten Gebiete
- Pro Gebiet: Level-Range, Monster-Vorschau, empfohlenes Level

## Festgelegt
- **Tick-Rate**: 3 Sekunden Basis, reduzierbar durch Angriffsgeschwindigkeits-Buffs (Min: 1s)
- **Tod-Penalty**: XP-Verlust wie in Metin2 + Aktion stoppt
- **Gebiete**: Originalgetreu aus Metin2, Spieler wählt Gebiet frei (wenn Level passt)
- **Dungeons**: Separates Feature (z.B. Affendungeon) - wird in Feature 07 behandelt
- **HP-Trank Cooldown**: Fix, nicht einstellbar
- **Leveln vs. Farmen**: Strikt getrennt. Leveln = nur XP, Farmen = nur Items/Yang
- **Metinsteine**: Droppen als Item beim Farmen, werden separat abgefarmt (→ Feature 05)

## Offene Punkte
- [ ] Komplette Gebietsliste mit Monstern definieren (original Metin2)
- [ ] XP-Kurve berechnen (Formel)
- [ ] Drop-Tabellen pro Monster (Farmen-Modus)
- [ ] XP-Tabellen pro Monster (Leveln-Modus)
- [ ] Kampfformel (Schaden, Crit, Ausweichen etc.)
- [ ] Fixer HP-Trank Cooldown-Wert festlegen
- [ ] XP-Verlust bei Tod: Wie viel % ?
- [ ] Elixier-Kontingent-Werte definieren
- [ ] Loadout: Wie viele Slots?
- [ ] Metinstein-Dropchance pro Gebiet
