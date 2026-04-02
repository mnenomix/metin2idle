# Feature 17: Quests & Achievements

## Übersicht
Drei Systeme die dem Spieler Ziele geben: Daily Quests (tägliche Aufgaben für Yang), Story-Quests (Storylines mit Drachenmünzen-Belohnung) und Achievements (Langzeit-Meilensteine mit Drachenmünzen-Belohnung).

---

## Daily Quests

### Grundmechanik
- Jeden Tag neue zufällige Aufgaben
- Begrenzte Anzahl pro Tag (z.B. 5 Dailys)
- Belohnung: **Nur Yang** (keine Drachenmünzen)
- Reset täglich um Mitternacht (Serverzeit)

### Beispiel-Quests
| Quest | Ziel | Yang-Belohnung |
|-------|------|---------------|
| Monsterjäger | Töte 100 Monster beim Leveln/Farmen | Mittel |
| Dungeonläufer | Schließe 1 Dungeon ab | Hoch |
| Schmied-Lehrling | Upgrade 1 Item erfolgreich | Mittel |
| Angler | Fange 10 Fische | Niedrig |
| Bergarbeiter | Baue 10 Erze ab | Niedrig |
| Metinbrecher | Zerstöre 3 Metinsteine | Hoch |
| Händler | Verkaufe 1 Item im Marktplatz | Niedrig |

### Konfiguration
- Quest-Pool und Belohnungen über Admin-Panel konfigurierbar
- Anzahl der täglichen Quests konfigurierbar
- Möglichkeit für Bonus-Quests an Wochenenden/Events

---

## Story-Quests (Storylines)

### Grundmechanik
- Mehrere **Storylines** mit jeweils mehreren Kapiteln/Quests
- Quests werden nacheinander freigeschaltet (linear pro Storyline)
- Einmalig abschließbar
- Belohnung pro Quest: **Yang + Items**
- Belohnung für Storyline-Abschluss: **Drachenmünzen**

### Storyline-Struktur
```
Storyline: "Der Fall des Affenkönigs"
├── Kapitel 1: Erreiche Level 20 → Yang
├── Kapitel 2: Schließe Hasun Dong ab → Yang + Item
├── Kapitel 3: Schließe Jungsun Dong ab → Yang + Item
├── Kapitel 4: Schließe Sangsun Dong ab → Yang + Seltenes Item
└── Abschluss-Belohnung: Drachenmünzen + Titel
```

### Quest-Typen innerhalb von Storylines
- Erreiche Level X
- Schließe Dungeon X ab
- Besiege X Monster in Gebiet Y
- Upgrade ein Item auf +X
- Erreiche Skill-Stufe X
- Fange X seltene Fische
- Sammle X Erze

### Beispiel-Storylines
| Storyline | Thema | Level-Range | Kapitel | DM-Belohnung |
|-----------|-------|------------|---------|-------------|
| Erste Schritte | Tutorial/Einstieg | 1-20 | 5 | Wenig |
| Der Fall des Affenkönigs | Affendungeons | 22-55 | 6 | Mittel |
| Im Netz der Spinne | Spinnendungeon | 40-65 | 5 | Mittel |
| Aufstieg des Kriegers | Endgame-Dungeons | 70-99 | 8 | Hoch |
| Meister der Schmiede | Upgrading/Crafting | 30-80 | 6 | Mittel |
| Der perfekte Reiter | Pferd leveln | 22-99 | 7 | Mittel |

### Dialog-System
- Story-Quests werden über NPC-Dialoge erzählt (Text + NPC-Portrait)
- Gibt dem Spiel Lore und Kontext
- NPCs geben die nächste Quest nach Abschluss der vorherigen

---

## Achievements

### Grundmechanik
- Langzeit-Ziele die im Hintergrund getrackt werden
- Nicht zeitlich begrenzt
- Belohnung: **Drachenmünzen + Titel**
- Kategorien nach Spielbereichen

### Achievement-Kategorien

#### Kampf
| Achievement | Ziel | DM |
|------------|------|-----|
| Anfänger | Töte 100 Monster | Wenig |
| Jäger | Töte 10.000 Monster | Mittel |
| Legende | Töte 1.000.000 Monster | Hoch |
| Dungeon-Neuling | Schließe 1 Dungeon ab | Wenig |
| Dungeon-Meister | Schließe jeden Dungeon mindestens 1x ab | Hoch |

#### Fortschritt
| Achievement | Ziel | DM |
|------------|------|-----|
| Level 50 | Erreiche Level 50 | Mittel |
| Level 99 | Erreiche Level 99 | Hoch |
| Perfektionist | Bringe einen Skill auf Perfekt (P) | Hoch |
| Vollständig | Alle Skills eines Pfades auf Meister | Hoch |

#### Equipment
| Achievement | Ziel | DM |
|------------|------|-----|
| +9 Waffe | Upgrade eine Waffe auf +9 | Hoch |
| Voll ausgerüstet | Alle Equipment-Slots befüllt | Mittel |

#### Wirtschaft
| Achievement | Ziel | DM |
|------------|------|-----|
| Erster Handel | Verkaufe 1 Item im Marktplatz | Wenig |
| Millionär | Besitze 1.000.000 Yang | Mittel |
| Milliardär | Besitze 1.000.000.000 Yang | Hoch |

#### Sammler
| Achievement | Ziel | DM |
|------------|------|-----|
| Angler-Meister | Fange jeden Fischtyp mindestens 1x | Mittel |
| Bergbau-Experte | Baue jedes Erz mindestens 1x ab | Mittel |
| Metin-Sammler | Zerstöre 100 Metinsteine | Mittel |

#### Pferd
| Achievement | Ziel | DM |
|------------|------|-----|
| Reiter | Kaufe dein erstes Pferd | Wenig |
| Pferde-Meister | Pferd auf Level 30 | Hoch |

### Titel
- Achievements schalten **Titel** frei die neben dem Spielernamen angezeigt werden
- z.B. "Dungeon-Meister", "Legende", "Milliardär"
- Spieler wählt aktiven Titel aus freigeschalteten

---

## UI-Darstellung

### Quest-Log
- Eigener Menüpunkt: "Quests"
- Tabs: Daily Quests | Storylines | Achievements
- Daily: Liste mit Fortschrittsbalken, Yang-Belohnung
- Storylines: Übersicht aller Storylines, aktive Quest hervorgehoben
- Achievements: Raster mit Icons, grau = gesperrt, farbig = freigeschaltet

### Benachrichtigungen
- Pop-up bei Quest-Abschluss
- Pop-up bei Achievement-Freischaltung (besonders bei seltenen)
- Tägliche Erinnerung an offene Daily Quests

## Festgelegt
- **Daily Quests**: Nur Yang als Belohnung
- **Story-Quests**: Yang + Items pro Quest, Drachenmünzen für Storyline-Abschluss
- **Achievements**: Drachenmünzen + Titel
- **Mehrere Storylines** mit unterschiedlichen Themen
- **Titel-System** durch Achievements
- Alles über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Komplette Storylines ausschreiben (Dialoge, Quests pro Kapitel)
- [ ] Anzahl Daily Quests pro Tag
- [ ] Yang-Belohnungen für Dailys balancen
- [ ] Drachenmünzen-Mengen pro Storyline/Achievement balancen
- [ ] Komplette Achievement-Liste
- [ ] Titel-Liste
