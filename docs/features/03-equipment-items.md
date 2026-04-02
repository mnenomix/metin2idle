# Feature 03: Equipment & Item-System

## Übersicht
Spieler rüsten ihren Charakter mit Waffen, Rüstungen und Accessoires aus. Items haben Seltenheitsstufen, Stats und können geupgradet werden (siehe Feature 04). Das Inventar verwaltet alle gesammelten Gegenstände.

## Equipment-Slots

Wie in Metin2:

| Slot | Beschreibung | Beispiele |
|------|-------------|-----------|
| Waffe | Hauptwaffe | Schwert, Dolch, Bogen, Glocke, Fächer |
| Rüstung | Körperpanzerung | Plattenrüstung, Lederrüstung, Magierrobe |
| Helm | Kopfschutz | Kriegerhelm, Kapuze |
| Schild | Nur bestimmte Klassen | Holzschild, Stahlschild |
| Armband | Handgelenk | Armband der Stärke |
| Schuhe | Fußschutz | Lederstiefel, Kampfstiefel |
| Halskette | Accessoire | Halskette des Widerstands |
| Ohrringe | Accessoire | Ohrringe der Weisheit |

### Klassen-Restriktionen
Nicht jede Klasse kann jede Waffe tragen. Schild kann jede Klasse tragen.

| Klasse | Waffen | Rüstungstyp |
|--------|--------|-------------|
| Krieger | Zweihänder | Schwere Rüstung |
| Ninja | Dolch, Bogen, Einhandschwert | Leichte Rüstung |
| Sura | Schwert | Mittlere Rüstung |
| Schamane | Glocke, Fächer | Roben |

## Item-Eigenschaften

### Basis-Stats
Jedes Equipment hat feste Basiswerte:
- Waffen: Angriffsschaden (Min-Max), Angriffsgeschwindigkeit
- Rüstung/Helm/Schild: Verteidigung, HP-Bonus
- Accessoires: Verschiedene Boni (Ausweichen, Resistenzen etc.)

### Seltenheitsstufen

| Stufe | Farbe | Beschreibung |
|-------|-------|-------------|
| Normal | Weiß | Keine Bonuseigenschaften |
| Magisch | Grün | 1-2 Bonuseigenschaften |
| Selten | Blau | 2-3 Bonuseigenschaften |
| Episch | Rot/Gold | 3-4 Bonuseigenschaften, höhere Werte |

### Bonuseigenschaften (Boni)
Wie in Metin2 können Items zufällige Boni haben:
- Angriffswert +X
- Starker Angriff gegen Monster +X%
- Kritischer Treffer +X%
- Durchschlag +X%
- HP +X
- MP +X
- Gift-/Feuer-/Blitz-Resistenz +X%
- Bewegungsgeschwindigkeit +X%
- Angriffsgeschwindigkeit +X%

Boni werden beim Drop zufällig gewürfelt (Typ + Wert innerhalb Range).

### Boni verändern

#### Gegenstand verstärken ("Adder")
- Fügt einen **neuen zufälligen Bonus** zum Equipment hinzu
- Maximum: 4 Boni pro Item
- **Kann fehlschlagen** → Item wird verbraucht, kein Bonus hinzugefügt
- Erfolgsrate: Über Admin-Panel konfigurierbar

#### Gegenstand verzaubern ("Switcher")
- Ersetzt **alle vorhandenen Boni** durch neue zufällige Boni
- Anzahl der Boni bleibt gleich, Typ und Werte werden neu gewürfelt
- Quasi ein Re-Roll aller Boni
- Kein Fehlschlag, aber Ergebnis kann schlechter sein als vorher

#### Beschaffung (Adder & Switcher)
- **Drop**: Seltener Loot von Monstern und Truhen (konfigurierbar via Admin-Panel: welcher Mob, welche Chance)
- **Händler**: Kaufbar bei Ingame-NPC für Yang (hoher Preis als Yang-Sink)
- Preise über Admin-Panel steuerbar

## Item-Typen (Nicht-Equipment)

### Verbrauchsgüter
- **HP-Tränke**: Verschiedene Stufen (klein, mittel, groß) → mehr Heilung
- **Elixier der Sonne/Mond**: HP/MP-Kontingent-Heilung (siehe Feature 02)
- **Buff-Items**: Drachengottpillen (ATK), TAU (Verteidigung), Krit-Buffs etc.
- **Upgrade-Materialien**: Segensspruch, Seelenstein (siehe Feature 04)

### Sonstige
- **Yang**: Währung, kein Inventar-Item
- **Quest-Items**: Spezielle Items für Quests (falls implementiert)
- **Erze/Materialien**: Für Mining/Crafting (siehe Feature 11)

## Inventar

### Aufbau
- Globales Inventar (nicht seitenbasiert wie in Metin2)
- Slot-basiert: Feste Anzahl Slots, erweiterbar
- Items sind stackbar wo sinnvoll (Tränke, Materialien)
- Equipment ist nicht stackbar (jedes Item hat eigene Boni/Upgrade-Stufe)

### Inventar-Erweiterung
- Slot-Erweiterungen beim **Gemischtwarenhändler** (Ingame-NPC/Shop) für Yang kaufbar
- Yang-Sink: Preise steigen progressiv pro Erweiterung
- Motivation für Spieler: Inventarplatz = wertvolle Ressource

### Sortierung & Filter
- Nach Typ filtern (Waffen, Rüstung, Verbrauchsgüter, Materialien)
- Nach Seltenheit sortieren
- Nach Level sortieren

## Item-Vergleich
- Beim Hovern/Klicken auf ein Item: Vergleich mit aktuell ausgerüstetem Item
- Anzeige: Was wird besser, was wird schlechter (grün/rot Markierung)

## Item-Quellen
- **Monster-Drops**: Hauptquelle, über Drop-Tabellen (Feature 02)
- **Metinsteine**: Bessere Drop-Chancen (Feature 05)
- **Dungeons**: Exklusive Dungeon-Items (Feature 07)
- **Marktplatz**: Von anderen Spielern kaufen (Feature 10)
- **Crafting/Mining**: Materialien sammeln und herstellen (Feature 11)

## UI-Darstellung
- Equipment: Charakter-Übersicht mit Slots um den Charakter-Sprite
- Inventar: Raster-Ansicht mit Metin2-Item-Icons
- Tooltip bei Hover: Item-Name, Stats, Boni, Level-Anforderung, Vergleich
- Drag & Drop oder Klick zum Ausrüsten

## Festgelegt
- **Schild**: Jede Klasse kann Schild tragen
- **Inventar**: Global, slot-basiert, erweiterbar beim Gemischtwarenhändler für Yang
- **Lager**: Erstmal nicht implementiert, optional als späteres Feature
- **Boni ändern**: Über Items (Gegenstand segnen/verhexen), kein Alchemist-NPC

## Offene Punkte
- [ ] Komplette Waffen-Liste pro Klasse mit Basiswerten
- [ ] Komplette Rüstungs-Liste mit Basiswerten
- [ ] Accessoire-Liste
- [ ] Bonuseigenschaften: Exakte Werte-Ranges definieren
- [ ] Inventar: Wie viele Slots initial?
- [ ] Inventar: Preis-Staffelung für Slot-Erweiterungen
- [ ] Level-Anforderungen pro Item festlegen
- [ ] Item-Icons: Metin2 Icon DB anbinden
- [ ] Gegenstand segnen / verhexen: Detail-Mechanik (→ Boni-Diskussion)
