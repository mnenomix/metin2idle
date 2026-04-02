# Feature 01: Charaktererstellung & Klassen

## Übersicht
Spieler erstellen einen Charakter mit Name, Königreich, Klasse und Geschlecht. Der Skill-Pfad wird erst ab Level 5 freigeschaltet.

## Charaktererstellung (Flow)

1. **Name** eingeben (unique pro Server)
2. **Königreich** wählen: Shinsoo, Chunjo, Jinno
3. **Klasse** wählen: Krieger, Ninja, Sura, Schamane
4. **Geschlecht** wählen: Männlich / Weiblich (rein kosmetisch, beeinflusst Sprite)

## Klassen & Skill-Pfade

### Krieger
- Hohe HP, Nahkampf-fokussiert
- **Skill-Pfad ab Lv5:**
  - Körper (Nahkampf-Tank, Selbstbuffs)
  - Mental (Gruppenbuffs, Support)

### Ninja
- Hohe Angriffsgeschwindigkeit, kritische Treffer
- **Skill-Pfad ab Lv5:**
  - Nahkampf (Dolch, Assassine)
  - Fernkampf (Bogen, Kite)

### Sura
- Hybrid Nahkampf/Magie
- **Skill-Pfad ab Lv5:**
  - Waffen-Sura (Nahkampf + magische Buffs)
  - Magie-Sura (Flächenschaden, Zauber)

### Schamane
- Supporter/Heiler
- **Skill-Pfad ab Lv5:**
  - Drachen (Offensiv-Magie, Debuffs)
  - Heilung (Heals, Schutzzauber)

## Basis-Stats

Jede Klasse startet mit unterschiedlichen Basiswerten:

| Stat | Beschreibung | Krieger | Ninja | Sura | Schamane |
|------|-------------|---------|-------|------|----------|
| VIT | Vitalität (HP) | Hoch | Niedrig | Mittel | Mittel |
| INT | Intelligenz (MP, Magieschaden) | Niedrig | Niedrig | Hoch | Hoch |
| STR | Stärke (Phys. Schaden) | Hoch | Mittel | Mittel | Niedrig |
| DEX | Geschick (Angriffsgeschwindigkeit, Ausweichen) | Mittel | Hoch | Niedrig | Mittel |

### Stat-Verteilung
- Pro Levelaufstieg erhält der Spieler **3 Statpunkte** zur freien Verteilung
- Verteilung erfolgt manuell durch den Spieler
- Klassen starten mit unterschiedlich verteilten Anfangs-Stats (z.B. Krieger hat mehr STR, Ninja mehr DEX)

## Skill-System (ab Level 5)

- Ab Level 5 wird der Skill-Bereich freigeschaltet
- Spieler wählt einen der zwei Skill-Pfade seiner Klasse
- Pro Levelaufstieg erhält der Spieler **1 Skillpunkt**
- Skillpunkte werden in Skills des gewählten Pfades investiert
- Skills haben mehrere Stufen (Lv1 bis Lv20 wie in Metin2?)
- Bestimmte Skills werden erst ab bestimmten Leveln freigeschaltet

## Festgelegt
- **Max-Level**: 99 (erweiterbar via Content-Update)
- **Statpunkte pro Level**: 3
- **Skill-Details**: Werden in Feature 06 (Skills) separat dokumentiert

## Offene Punkte
- [ ] Exakte Basiswerte pro Klasse definieren
- [ ] Sprite-Assets beschaffen (Metin2 Icon DB)
