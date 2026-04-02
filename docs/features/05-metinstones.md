# Feature 05: Metinsteine

## Übersicht
Metinsteine sind Items die beim **Farmen** als seltener Loot droppen. Sie wandern ins Inventar und können in einer separaten Idle-Aktion "abgefarmt" werden. Jeder Metinstein hat ein Level und eine eigene Drop-Tabelle. Metinsteine sind eine der besten Quellen für wertvolle Items.

## Grundmechanik

### 1. Metinstein erhalten
- Beim **Farmen** (nicht beim Leveln!) besteht pro Kill eine Chance auf einen Metinstein-Drop
- Metinstein-Level entspricht dem Gebiet in dem gefarmt wird
- Drop-Chance variiert je nach Gebiet (über Admin-Panel konfigurierbar)
- Metinsteine landen als Item im Inventar

### 2. Metinstein abfarmen (Idle-Aktion)
1. Spieler geht in den Bereich **"Metinsteine"**
2. Wählt einen oder mehrere Metinsteine aus dem Inventar aus
3. Optional: Loadout zusammenstellen (Tränke, Buffs)
4. Klickt **"Metinsteine abfarmen"**
5. Charakter zerstört die Metinsteine nacheinander (Idle-Aktion mit Timer)
6. Pro zerstörtem Metinstein: Loot-Drop

### Kampf-Mechanik
- Keine Verteidiger-Monster (vereinfacht gegenüber Original)
- Metinstein hat HP basierend auf seinem Level
- Spieler macht Schaden pro Tick (wie beim normalen Grinding)
- **Spieler nimmt trotzdem Schaden** (der Metinstein "strahlt" Schaden aus) → Balancing-Hebel
- Dauer hängt ab von: Metinstein-HP vs. Spieler-DPS
- Tod = Aktion stoppt, aktueller Metinstein geht verloren

## Drop-Bedingung: Level-Unterschied

**Wichtig**: Metinsteine droppen nur Loot wenn der Spieler **maximal 15 Level über** dem Metinstein-Level ist.

| Spieler-Level | Metin-Level | Differenz | Loot? |
|--------------|-------------|-----------|-------|
| 30 | 25 | 5 | ✅ Ja, voller Loot |
| 35 | 25 | 10 | ✅ Ja, voller Loot |
| 40 | 25 | 15 | ✅ Ja, gerade noch |
| 41 | 25 | 16 | ❌ Nein, kein Loot |

- Metinstein wird trotzdem zerstört, aber es droppt **nichts**
- Anreiz: Auch hochstufige Spieler sollten levelgerechte Metinsteine farmen
- Spieler unter dem Metinstein-Level können es versuchen, brauchen aber gutes Gear

## Metinstein-Typen

Orientiert am Original, gebunden an Gebiete:

| Level | Metin-Typ | Besonderer Loot |
|-------|-----------|-----------------|
| 5 | Metin des Mondes | Fertigkeitsbücher (niedrig) |
| 10 | Metin des Kummers | Fertigkeitsbücher |
| 25 | Metin der Schwärze | Fertigkeitsbücher, Geiststeine |
| 40 | Metin der Seele | Fertigkeitsbücher, Geiststeine, Seelensteine |
| 60 | Metin der Finsternis | Geiststeine, Seelensteine |
| 80 | Metin des Zorns | Seltene Drops, Seelensteine |
| 90+ | Metin der Eitelkeit | Premium-Drops |

### Mögliche Drops
- **Fertigkeitsbücher**: Zum Erlernen/Verbessern von Skills (→ Feature 06)
- **Geiststeine**: Wertvolles Upgrade-/Crafting-Material
- **Seelensteine**: Seltenes Material (ab Level 40+ Metinsteine)
- **Yang**: Große Mengen
- **Equipment**: Höhere Chance auf seltene Items als beim normalen Farmen
- **Upgrade-Materialien**: Segensschriftrollen, Magische Steine, seltene Erze

## UI-Darstellung

### Metinstein-Bereich
- Eigener Menüpunkt / Bereich im Spiel
- Liste aller Metinsteine im Inventar (mit Level, Typ, Icon)
- Auswahl: Mehrere Metinsteine für eine Session markieren
- Loadout-Konfiguration vor Start

### Während der Aktion
- Aktueller Metinstein-Sprite mit HP-Balken
- Spieler HP-Balken
- Fortschritt: "Metinstein 2/5"
- Kampf-Log: Schaden am Stein, Schaden am Spieler
- Loot-Anzeige nach jedem zerstörten Stein

### Loot-Übersicht
- Nach Abschluss: Zusammenfassung aller Drops der Session
- Warnung wenn Level-Differenz > 15 (kein Loot möglich)

## Festgelegt
- Metinsteine sind **Inventar-Items**, keine Welt-Objekte
- Droppen nur beim **Farmen**, nicht beim Leveln
- Abfarmen ist eine **separate Idle-Aktion**
- Keine Verteidiger-Monster beim Abfarmen
- Level-Cap für Loot: **Max 15 Level über Metinstein**
- Drop-Raten und Loot-Tabellen über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Komplette Metinstein-Liste mit Leveln und HP-Werten (original Metin2)
- [ ] Exakte Drop-Tabellen pro Metinstein-Typ
- [ ] Metinstein-Dropchance pro Gebiet beim Farmen
- [ ] Schaden den der Metinstein am Spieler verursacht (Balancing)
- [ ] Kann man Metinsteine handeln/im Marktplatz verkaufen?
