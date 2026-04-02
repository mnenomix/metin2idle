# Feature 07: Dungeons

## Übersicht
Dungeons sind spezielle Instanzen mit stärkeren Monstern, Bossen und exklusiven Drops. Im Gegensatz zum normalen Farmen/Leveln sind Dungeons mehrstufige Idle-Aktionen mit einem Boss am Ende. Dungeons orientieren sich am Metin2-Original.

## Grundmechanik

### Ablauf
1. Spieler wählt einen **freigeschalteten Dungeon** aus
2. Stellt **Loadout** zusammen (Tränke, Elixiere, Buffs)
3. Klickt **"Dungeon betreten"**
4. Charakter kämpft sich idle durch mehrere **Etagen/Wellen**
5. Pro Etage: Monster-Wellen → alle besiegt = nächste Etage
6. **Letzte Etage**: Boss-Kampf
7. Boss besiegt → Dungeon abgeschlossen → Loot

### Kampf-Mechanik
- Gleiche Tick-basierte Berechnung wie beim Grinding (3s Basis)
- Monster sind stärker als in der Open World
- Bosse haben deutlich mehr HP, höheren Schaden und ggf. Spezialfähigkeiten
- Tod = Dungeon gescheitert, kein Loot (Verbrauchsgüter aus Loadout trotzdem weg)

### Dungeon-Limits
- Jeder Dungeon hat einen **Cooldown** nach Abschluss
- Manche Dungeons brauchen ein **Ticket** zum Betreten
- Cooldowns und Ticket-Anforderungen über Admin-Panel konfigurierbar

### Tickets
- **Quelle**: Metinsteine (Drop), NPC-Händler (für Yang kaufbar)
- Jeder Dungeon mit Ticket-Pflicht hat ein eigenes Ticket-Item
- Ticket wird beim Betreten verbraucht (auch bei Scheitern)
- Ticket-Droprate und Yang-Preis über Admin-Panel konfigurierbar

## Dungeon-Liste (Auswahl, originalgetreu)

| # | Dungeon | Level | Ticket | Cooldown | Boss | Besonderer Loot |
|---|---------|-------|--------|----------|------|-----------------|
| 1 | Hasun Dong (Affen leicht) | 22+ | Nein | 1h | Steinaffe (Lv30) | Fertigkeitsbücher, Yang |
| 2 | Jungsun Dong (Affen normal) | 35+ | Nein | 2h | Gehender Affe (Lv43) | Bessere FB, Materialien |
| 3 | Sangsun Dong (Affen schwer) | 45+ | Ja | 3h | Affen-Lord (Lv55) | Seltene FB, Seelensteine |
| 4 | Spinnendungeon | 50+ | Ja | 3h | Spinnenbaroness | Spinnen-Equipment |
| 5 | Dämonenturm | 40+ | Ja | 4h | Sensenmann | Exklusive Waffen, Rüstungen |
| 6 | Devil's Catacomb | 75+ | Ja | 5h | Teufel | Seltene Upgrade-Materialien |
| 7 | Drachenraum | 85+ | Ja | 6h | Drache | Drachen-Equipment |
| 8 | Nemeres Warte | 90+ | Ja | 7h | Nemere | Top-Tier Equipment |
| 9 | Razador | 95+ | Ja | 8h | Razador | Best-in-Slot Equipment |

Alle Werte (Level, Ticket-Pflicht, Cooldowns) über Admin-Panel konfigurierbar.

## Dungeon-Loot

### Drop-Arten
- **Exklusive Dungeon-Items**: Equipment das nur in diesem Dungeon droppt
- **Upgrade-Materialien**: Segensschriftrollen, Magische Steine, Seelensteine
- **Fertigkeitsbücher**: Höhere Droprate als bei Metinsteinen
- **Yang**: Große Mengen
- **Seltene Verbrauchsgüter**: Konzentriertes Lesen, Exorzismus-Schriftrollen

### Loot-Verteilung
- Etagen-Monster droppen normalen Loot (wie beim Farmen)
- **Boss** hat eigene Drop-Tabelle mit exklusiven Items
- Boss-Drops haben garantierte + zufällige Komponenten
- Drop-Tabellen über Admin-Panel konfigurierbar

## Boss-Mechanik

### Unterschied zu normalen Monstern
- **Deutlich mehr HP**: 10-50x eines normalen Monsters gleichen Levels
- **Höherer Schaden**: Kann den Spieler schnell töten ohne gutes Loadout
- **Spezial-Effekte** (optional): z.B. alle X Ticks ein Spezialangriff mit erhöhtem Schaden
- Bosse sind der Haupt-Schwierigkeitsfaktor

### Kampf-Darstellung
- Boss-Sprite (2D) mit großem HP-Balken
- Kampf-Log mit Boss-spezifischen Meldungen
- "Der Affenkönig schlägt wild um sich! 892 Schaden!"
- Spannungsmoment: Reichen Tränke und HP?

## UI-Darstellung

### Dungeon-Übersicht
- Liste aller Dungeons (freigeschaltete + gesperrte)
- Pro Dungeon: Level-Anforderung, Schwierigkeit, Cooldown-Status, Loot-Vorschau
- Gesperrte Dungeons ausgegraut mit Level-Anforderung

### Dungeon-Lauf
- Fortschrittsanzeige: "Etage 3/7"
- Aktuelle Monster/Boss mit HP-Balken
- Spieler HP + Loadout-Status (Tränke verbleibend, Buff-Timer)
- Kampf-Log

### Abschluss
- Loot-Übersicht nach Boss-Kill
- Statistiken: Dauer, Schaden ausgeteilt, Tränke verbraucht

## Festgelegt
- Dungeons geben **XP und Loot** (keine Trennung wie beim Open-World Grinding)
- **Tod** = Dungeon gescheitert, alles verloren (Verbrauchsgüter weg, kein Loot)
- **Gruppen-Dungeons**: Späteres Feature (Gilden)
- **Tickets**: Manche Dungeons brauchen Tickets (aus Metinsteinen oder beim NPC kaufbar)
- **Cooldowns**: Pro Dungeon, über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Boss-Stats und Spezialfähigkeiten
- [ ] Etagen-Zusammensetzung: Welche Monster pro Etage?
- [ ] Dungeon-exklusive Items definieren
- [ ] Ticket-Preise beim NPC (Yang)
- [ ] Ticket-Droprate bei Metinsteinen
- [ ] Cooldown-Werte finalisieren (siehe Tabelle oben als Vorschlag)
