# Feature 06: Skills & Skillsystem

## Übersicht
Ab Level 5 wählt der Spieler einen von zwei Skill-Pfaden seiner Klasse. Pro Levelaufstieg erhält er 1 Skillpunkt. Skills haben ein mehrstufiges Aufstiegssystem: Normal → Meister → Großmeister → Perfekt. Höhere Stufen erfordern Fertigkeitsbücher und Seelensteine.

## Skill-Pfad-Wahl (Level 5)
- Ab Level 5 wird der Skill-Bereich freigeschaltet
- Spieler wählt **einen** der zwei Pfade (nicht änderbar)
- Jeder Pfad hat 6 aktive Skills + passive Skills (kein Champion-Skill bei Max-Level 99)

## Skill-Stufen

| Stufe | Bereich | Wie aufsteigen |
|-------|---------|---------------|
| Normal | Lv 1-20 | Skillpunkte verteilen |
| Meister (M) | M1-M10 | Fertigkeitsbücher lesen |
| Großmeister (G) | G1-G10 | Seelensteine einsetzen |
| Perfekt (P) | Endstufe | Letzter Seelenstein-Aufstieg |

### Normal (Lv 1-20)
- 1 Skillpunkt pro Level-Up (ab Level 5)
- Punkte frei auf Skills des gewählten Pfades verteilbar
- Ab **17 Punkten** in einem Skill: Chance auf Meisterung
- Bei **20 Punkten**: Automatische Meisterung zu M1
- **Wichtig**: Punkte über 17 hinaus können verschwendet sein → Spieler-Warnung im UI

### Meister (M1-M10)
- Aufstieg durch **Fertigkeitsbücher** lesen
- Fertigkeitsbücher droppen aus Metinsteinen (→ Feature 05)
- Bücher lesen hat Cooldown (z.B. alle 24h pro Skill)
- Pro Lese-Versuch: Erfolg oder Fehlschlag
- Fortschritt pro Meister-Stufe steigt: M1→M2 braucht 1 Erfolg, M9→M10 braucht 10 Erfolge
- Insgesamt ~55 erfolgreiche Bücher für M1 bis M10

### Großmeister (G1-G10) & Perfekt (P)
- Aufstieg durch **Seelensteine**
- Seelensteine droppen aus höherstufigen Metinsteinen (ab Lv 40+)
- Einfaches Erfolg/Fehlschlag-System (keine Rangpunkte)
- Erfolgsquote ~30%
- Bei Misserfolg: Seelenstein verbraucht, kein Fortschritt

## Skills im Idle-Kontext

### Aktive Skills → Passive Boni
Da das Spiel idle-basiert ist, werden aktive Skills **automatisch im Kampf eingesetzt**. Ihre Wirkung wird als permanenter Bonus/Effekt auf die Kampfberechnung angewendet:
- Schadens-Skills → Erhöhen den Schaden pro Tick
- Buff-Skills → Permanenter Stat-Bonus während der Aktion
- AoE-Skills → Erhöhen effektiven Schaden (schnellere Kills)

### Passive Skills
Wirken dauerhaft ohne Aktivierung:
- **Konterfertigkeit**: Reduziert eingehenden Skill-Schaden (relevant für PvP)
- **Boost**: Erhöht Schaden eines bestimmten Skills

## Skill-Listen pro Klasse

### Krieger - Körper-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Dreiwege-Schnitt | Aktiv | Erhöhter Tick-Schaden |
| Kampfrausch | Buff | +Angriffsgeschwindigkeit, -Verteidigung |
| Sausen | Aktiv | Erhöhter Tick-Schaden |
| Schwertwirbel | AoE | Schnellere Kills |
| Aura des Schwertes | Buff | +Angriffswert |
| Lebenswille | Aktiv | Hoher Einzelschaden |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Schwertwirbel-Boost | Passiv | +Schwertwirbel-Schaden |

### Krieger - Mental-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Durchschlag | Aktiv | Erhöhter Tick-Schaden |
| Stampfer | AoE | Schnellere Kills, Stun-Chance |
| Schwertschlag | Aktiv | Fernschaden |
| Heftiges Schlagen | AoE | Erhöhter Tick-Schaden |
| Starker Körper | Buff | +Verteidigung |
| Schwertzirkel | AoE | Flächenschaden |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Durchschlag-Boost | Passiv | +Durchschlag-Schaden |

### Ninja - Nahkampf-Pfad (Klinge)
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Hinterhalt | Aktiv | Hoher Einzelschaden |
| Degenwirbel | AoE | Flächenschaden + Gift |
| Giftwolke | AoE | Gift-DoT |
| Blitzangriff | Aktiv | Erhöhter Schaden |
| Tarnung | Buff | Ausweich-Chance |
| Schleichendes Gift | Aktiv | Schaden + Gift |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Hinterhalt-Boost | Passiv | +Hinterhalt-Schaden |

### Ninja - Fernkampf-Pfad (Bogen)
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Wiederholter Schuss | Aktiv | Mehrfach-Schaden |
| Feuerpfeil | AoE | Flächenschaden + Feuer |
| Giftpfeil | Aktiv | Gift-DoT |
| Pfeilregen | AoE | Flächenschaden |
| Federschreiten | Buff | +Bewegungsgeschwindigkeit |
| Funkenschlag | Aktiv | Schaden + Gift |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Feuerpfeil-Boost | Passiv | +Feuerpfeil-Schaden |

### Sura - Waffen-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Fingerschlag | Aktiv | Durchschlag-Schaden |
| Verzauberte Klinge | Buff | +Angriffswert |
| Verzauberte Rüstung | Buff | Schadensreflektion |
| Drachenwirbel | AoE | Flächenschaden |
| Furcht | Passiv | Reduziert Gegner-Angriff bei Treffer |
| Zauber aufheben | Aktiv | Entfernt Gegner-Buffs (PvP) |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Fingerschlag-Boost | Passiv | +Fingerschlag-Schaden |

### Sura - Magie-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Dunkler Schlag | Aktiv | Fernschaden, Mehrfachziel |
| Geist der Flamme | AoE | Flächenschaden + Feuer |
| Geisterschlag | Aktiv | Fernschaden + Slow |
| Flammenschlag | AoE | Explosions-Flächenschaden |
| Dunkler Schutz | Buff | -Magieschaden, +Verteidigung |
| Dunkler Stein | Aktiv | Fernschaden |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Dunkler Schlag-Boost | Passiv | +Dunkler Schlag-Schaden |

### Schamane - Drachen-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Fliegender Talisman | Aktiv | Fernschaden + Slow |
| Drachengebrüll | AoE | Flächenschaden + Feuer |
| Reflektieren | Buff | Schadensreflektion |
| Drachenschießen | Aktiv | Durchschlag + Feuer |
| Segen | Buff | +Physische Resistenz |
| Hilfe des Drachen | Buff | +Kritische Treffer-Chance |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Drachenschießen-Boost | Passiv | +Drachenschießen-Schaden |

### Schamane - Heilungs-Pfad
| Skill | Typ | Idle-Effekt |
|-------|-----|-------------|
| Blitzwurf | Aktiv | Fernschaden + Blitz |
| Blitzkralle | Aktiv | Kettenschaden + Blitz |
| Schnelligkeit | Buff | +Geschwindigkeit |
| Blitz heraufbeschwören | AoE | Flächenschaden + Blitz |
| Kurieren | Buff | HP-Regeneration |
| Angriff+ | Buff | +Angriffswert |
| Konterfertigkeit | Passiv | -Eingehender Schaden |
| Blitz-Boost | Passiv | +Blitz heraufbeschwören-Schaden |

## Fertigkeitsbücher & Seelensteine

### Fertigkeitsbücher
- **Quelle**: Metinsteine (→ Feature 05), seltene Monster-Drops
- **Verwendung**: Skill von M1 auf M10 leveln
- **Cooldown**: 1 Buch pro Skill alle **8 Stunden** lesbar
- **Ergebnis**: Erfolg (Fortschritt) oder Fehlschlag (kein Fortschritt)

### Seelensteine
- **Quelle**: Metinsteine ab Level 40+, seltene Drops
- **Verwendung**: Skill von G1 auf P leveln
- **Erfolgsrate**: ~30%
- **Fehlschlag**: Seelenstein verbraucht, kein Fortschritt (keine Rangpunkte)

### Hilfs-Items

#### Exorzismus-Schriftrolle
- **Effekt**: Setzt den 8h-Cooldown für Fertigkeitsbücher zurück
- **Quelle**: Seltener Drop, kaufbar beim Händler
- Ermöglicht mehrere Bücher am Tag pro Skill zu lesen

#### Konzentriertes Lesen
- **Effekt**: **100% Erfolgsrate** beim nächsten Buch oder Seelenstein
- **Quelle**: Seltener Drop, kaufbar beim Händler
- Wird nach einmaliger Verwendung verbraucht

#### Buch des Vergessens
- Setzt Skillpunkte einer Fertigkeit zurück
- Ermöglicht Umverteilung
- Seltener Drop oder beim Händler kaufbar

## Festgelegt
- Skill-Pfad-Wahl ab Level 5 (nicht änderbar)
- 1 Skillpunkt pro Level-Up
- Skill-Stufen: Normal (1-20) → Meister (M1-M10) → Großmeister (G1-G10) → Perfekt (P)
- Aktive Skills werden im Idle-Kampf automatisch eingesetzt
- Mana wird nicht als Ressource gemanagt (Skills kosten kein Mana im Idle)
- Skill-Listen originalgetreu aus Metin2 (ohne Mana-Kosten)
- **Kein Champion-Skill** (Max-Level 99, kann mit Content-Update kommen)
- **Fertigkeitsbuch-Cooldown**: 8 Stunden (statt 24h)
- **Keine Rangpunkte**: Seelensteine sind einfach Erfolg/Fehlschlag
- **Exorzismus-Schriftrolle**: Setzt 8h-Cooldown zurück
- **Konzentriertes Lesen**: 100% Erfolgsrate beim nächsten Buch/Seelenstein

## Offene Punkte
- [ ] Skill-Effekte: Exakte Werte pro Stufe (Schadensformeln)
- [ ] Buch des Vergessens: Preis beim Händler
- [ ] Exorzismus-Schriftrolle: Preis beim Händler
- [ ] Konzentriertes Lesen: Preis beim Händler
- [ ] Seelenstein-Erfolgsrate: Genau 30% oder anpassbar via Admin-Panel?
