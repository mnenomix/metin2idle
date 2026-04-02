# Feature 19: Drachensplitter & Drachenalchemie

## Übersicht
Spieler sammeln Drachensplitter als Nebenprodukt beim Farmen. Diese werden beim Alchemisten zu Drachensteinen verarbeitet. Drachensteine geben passive Boni und können in Slots am Charakter ausgerüstet werden. Ein Set aus gleichen Steinen gibt zusätzliche Set-Boni.

## Grundmechanik

### 1. Drachensplitter sammeln
- Beim **Farmen** droppen neben normalen Items auch **Drachensplitter**
- Passive Nebenressource (kein extra Aufwand)
- Drop-Rate über Admin-Panel konfigurierbar

### 2. Drachensplitter umwandeln
- Beim **Alchemisten** (NPC) können Splitter zu Drachensteinen verarbeitet werden
- X Splitter → 1 Drachenstein (zufälliger Typ und Qualität)

### 3. Drachensteine ausrüsten
- Charakter hat **Drachenstein-Slots** (z.B. 6 Slots)
- Drachensteine werden in Slots eingesetzt → passive Boni

## Drachenstein-Typen

| Stein | Farbe | Primär-Bonus |
|-------|-------|-------------|
| Diamant | Weiß | INT, Eis-Resistenz |
| Rubin | Rot | STR, Feuer-Bonus |
| Jade | Grün | HP/MP-Pool, Wind-Bonus |
| Saphir | Blau | DEX, Erd-Resistenz |
| Granat | Orange | HP/MP-Regeneration, Blitz-Bonus |
| Onyx | Schwarz | VIT, Dunkelheits-Resistenz |

## Drachenstein-Qualität

### Klasse (bestimmt Anzahl der Boni)
| Klasse | Boni |
|--------|------|
| Roh | 1 Bonus |
| Geschliffen | 2 Boni |
| Selten | 3 Boni |
| Antik | 4 Boni |
| Legendär | 5 Boni |
| Mythisch | 6 Boni |

### Reinheit (bestimmt Stärke der Boni)
| Reinheit | Bonus-Stärke |
|----------|-------------|
| Matt | Niedrig |
| Klar | Mittel |
| Makellos | Hoch |
| Brillant | Sehr hoch |
| Exzellent | Maximum |

### Verbesserung
- Steine können beim Alchemisten **verbessert** werden
- Klasse erhöhen: Mehrere Steine gleichen Typs + Splitter kombinieren
- Reinheit erhöhen: Spezielle Items + Yang
- Kann fehlschlagen → Stein bleibt auf aktueller Stufe (nicht zerstört)

## Set-Bonus

Wenn alle 6 Slots mit Steinen **gleicher Klasse** besetzt sind:
- **Legendär-Set**: +1 auf relevante Stats und Resistenzen
- **Mythisch-Set**: +3 auf relevante Stats und Resistenzen
- Anreiz: Gleiche Steine sammeln statt mischen

## UI-Darstellung

### Alchemisten-Interface
- Splitter-zu-Stein Umwandlung
- Stein-Verbesserung (Klasse/Reinheit)
- Übersicht eigener Steine

### Drachenstein-Slots
- Im Charakter-Fenster: 6 Slots unter/neben dem Equipment
- Drag & Drop zum Einsetzen
- Set-Bonus-Anzeige wenn aktiv
- Tooltip: Stein-Details (Typ, Klasse, Reinheit, Boni)

## Festgelegt
- **Drachensplitter** droppen passiv beim Farmen
- **6 Drachenstein-Typen** (Diamant, Rubin, Jade, Saphir, Granat, Onyx)
- **6 Slots** am Charakter
- **Klasse + Reinheit** als Qualitätsdimensionen
- **Set-Bonus** bei 6 gleichen Steinen
- Steine können verbessert aber **nicht zerstört** werden
- Alles über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Drachensplitter pro Umwandlung (wie viele für 1 Stein?)
- [ ] Drachensplitter-Droprate beim Farmen
- [ ] Exakte Bonus-Werte pro Stein-Typ, Klasse und Reinheit
- [ ] Verbesserungs-Kosten und Erfolgsraten
- [ ] Set-Bonus exakte Werte
- [ ] Können Drachensteine gehandelt werden?
