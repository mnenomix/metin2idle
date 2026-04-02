# Feature 04: Item-Upgrading (+0 bis +9)

## Übersicht
Spieler können Waffen, Rüstungen und Schmuck beim Schmied verbessern (+0 bis +9). Höhere Stufen erhöhen die Basiswerte des Items. Fehlschläge zerstören den Gegenstand NICHT, aber Materialien und Yang gehen verloren. Schutzgegenstände verhindern Stufen-Rückfall.

## Grundmechanik

### Ablauf
1. Spieler geht zum **Schmied** (Ingame-NPC)
2. Wählt einen Gegenstand aus dem Inventar
3. Wählt Upgrade-Item: **Segensschriftrolle** oder **Magischer Stein** (Pflicht)
4. Benötigte Yang-Kosten werden angezeigt
5. Klick auf "Verbessern" → Erfolg oder Fehlschlag

### Stufen & Anforderungen

| Stufe | Yang-Kosten | Materialien | Risiko |
|-------|------------|-------------|--------|
| +1 | Niedrig | Nur Yang | Sehr gering |
| +2 | Niedrig | Nur Yang | Gering |
| +3 | Mittel | Nur Yang | Gering |
| +4 | Mittel | Nur Yang | Mittel |
| +5 | Hoch | Yang + Upgrade-Material | Mittel |
| +6 | Hoch | Yang + Upgrade-Material | Hoch |
| +7 | Sehr hoch | Yang + Upgrade-Material | Sehr hoch |
| +8 | Sehr hoch | Yang + Upgrade-Material | Extrem hoch |
| +9 | Maximum | Yang + Upgrade-Material | Extrem hoch |

- **+1 bis +4**: Nur Yang erforderlich, geringe Fehlschlag-Chance
- **+5 bis +9**: Yang + spezifische Materialien (abhängig vom Item-Typ), steigende Fehlschlag-Chance
- Exakte Raten über Admin-Panel konfigurierbar

### Upgrade-Materialien (ab +5)
Je nach Item-Typ verlangt der Schmied unterschiedliche Materialien:
- Edelsteinfragmente, Perlen, Schlangenschwanz+ etc.
- Materialien droppen von Monstern oder werden über Mining/Crafting gewonnen
- Welches Material der Schmied verlangt hängt vom Item ab

### Effekt pro Stufe
- Waffen: Angriffswert steigt pro Stufe
- Rüstungen: Verteidigungswert steigt pro Stufe
- Schmuck: Bonuswerte steigen pro Stufe
- Anzeige im Item-Namen: "Schwert+7", "Plattenrüstung+3"

## Fehlschlag-Konsequenzen

**Items werden NICHT zerstört.**

### Fehlschlag je nach Upgrade-Item
| Upgrade-Item | Effekt bei Fehlschlag |
|-------------|----------------------|
| Segensschriftrolle | Item **fällt um eine Stufe** (z.B. +6 → +5) |
| Magischer Stein | Item **bleibt auf aktueller Stufe** (kein Rückfall) |

- Upgrade ohne Segensschriftrolle oder Magischer Stein ist **nicht möglich**
- Yang wird bei Fehlschlag immer verbraucht
- Upgrade-Item wird bei Erfolg und Fehlschlag verbraucht

## Schmied als Händler

Der Schmied bietet neben dem Upgrade-Service auch Items zum Kauf/Tausch an:

### Kaufbare Items
- **Segensschriftrolle**: Für Yang kaufbar (Schutz beim Upgraden)
- **Upgrade-Materialien**: Basis-Materialien für Yang

### Tausch-System
- **10x Segensschriftrolle = 1x Magischer Stein** (besseres Upgrade-Material)
- Tauschverhältnisse über Admin-Panel konfigurierbar
- Weitere Tausch-Rezepte können über Admin-Panel hinzugefügt werden

## UI-Darstellung

### Schmiede-Interface
- NPC-Dialog mit Schmied öffnet Upgrade-Fenster
- **Links**: Item-Slot (Item aus Inventar ziehen)
- **Mitte**: Benötigte Materialien + Yang anzeigen (grün = vorhanden, rot = fehlt)
- **Rechts**: Optionaler Schutzgegenstand-Slot
- **Unten**: "Verbessern"-Button
- **Ergebnis**: Erfolg/Fehlschlag-Meldung (Text-Dialog)

### Händler-Tab
- Zweiter Tab im Schmied-Interface: "Waren"
- Liste kaufbarer Items mit Yang-Preisen
- Tausch-Bereich: Items eintauschen gegen höherwertige

### Item-Anzeige
- Upgrade-Stufe im Item-Namen: "+7 Schwert des Feuers"
- Farbliche Hervorhebung je nach Stufe (z.B. +9 = Gold/Leuchtend)
- Tooltip zeigt aktuelle und nächste Stufe im Vergleich

## Offene Punkte
- [ ] Exakte Erfolgsraten pro Stufe definieren (Basiswerte für Admin-Panel)
- [ ] Yang-Kosten pro Stufe und Item-Typ
- [ ] Upgrade-Materialien: Welches Material für welchen Item-Typ
- [ ] Stat-Steigerung pro Upgrade-Stufe (Formel)
- [ ] Segensschriftrolle: Yang-Preis beim Schmied
- [ ] Weitere Tausch-Rezepte beim Schmied definieren
