# Feature 11: Mining & Fischen

## Übersicht
Mining und Fischen sind zwei zusätzliche Idle-Aktivitäten die ab Level 30 freigeschaltet werden. Beide liefern exklusive Ressourcen die über andere Wege nicht oder schwer erhältlich sind. Sie funktionieren als eigenständige Idle-Aktionen neben Leveln, Farmen und Metinsteinen.

---

## Mining (Bergbau)

### Grundmechanik
- Verfügbar ab **Level 30**
- Benötigt eine **Spitzhacke** (beim NPC kaufbar)
- Spieler wählt "Mining starten" → Idle-Aktion
- Pro Tick: Versuch Erz abzubauen → Erfolg oder Fehlschlag
- Erfolgsrate abhängig von Spitzhacke-Stufe und Mining-Skill

### Spitzhacke
- Startet auf Stufe +0
- Kann beim NPC aufgewertet werden (bis +9)
- Sammelt Erfahrungspunkte bei jedem Abbauversuch
- Höhere Stufe = höhere Erfolgsrate
- Upgrade-Mechanik ähnlich wie Equipment (kann fehlschlagen)

### Mining-Skill
- Eigene passive Fähigkeit (nicht Teil der Klassen-Skills)
- Wird durch Mining-Bücher gelevelt (droppen beim Mining)
- Stufen: Normal → Meister → Großmeister → Perfekt
- Höhere Stufe = höhere Erfolgsrate

### Erze & Ressourcen
| Erz | Seltenheit | Verwendung |
|-----|-----------|------------|
| Kupfererz | Häufig | Basis-Crafting-Material |
| Silbererz | Mittel | Crafting, Schmuck-Herstellung |
| Golderz | Selten | Wertvolles Crafting-Material |
| Dunkles Erz | Sehr selten | Upgrade-Material, Premium-Crafting |
| Diamanterz | Extrem selten | Top-Tier Material |

### Verarbeitung
- Erze können beim NPC zu veredelten Materialien verarbeitet werden
- Veredelte Materialien werden für Schmuck-Crafting verwendet
- Erfolgsrate bei Verarbeitung (über Admin-Panel konfigurierbar)

---

## Fischen (Angeln)

### Grundmechanik
- Verfügbar ab **Level 30**
- Benötigt eine **Angel** (beim Fischer-NPC kaufbar) und **Köder**
- Spieler wählt "Fischen starten" → Idle-Aktion
- Pro Tick: Versuch einen Fisch zu fangen → Erfolg oder Fehlschlag
- Erfolgsrate abhängig von Angel-Stufe

### Angel
- Startet auf Stufe +0
- Kann aufgewertet werden (bis +20)
- Sammelt Erfahrungspunkte bei jedem Fang-Versuch
- Höhere Stufe = höhere Erfolgsrate + seltene Fische

### Köder
- **Würmer**: Basis-Köder, günstig beim NPC
- **Paste**: Besserer Köder, höhere Fangchance
- Köder werden pro Fang-Versuch verbraucht

### Fänge
| Fang | Seltenheit | Effekt (gekocht) |
|------|-----------|-----------------|
| Gewöhnlicher Fisch | Häufig | Kleine HP-Heilung |
| Aal | Mittel | +Stärke-Buff (zeitlich begrenzt) |
| Goldfisch | Selten | +50% XP-Buff (zeitlich begrenzt) |
| Yabbie-Krebs | Sehr selten | +100% XP-Buff (zeitlich begrenzt) |
| Perlen | Selten | Wertvolles Handels-/Crafting-Material |
| Muscheln | Mittel | Crafting-Material |
| Seltene Items | Sehr selten | Zufällige wertvolle Items (Schlüssel, Gold etc.) |

### Kochen
- Gefangene Fische können beim Koch-NPC zu Buff-Items verarbeitet werden
- Gekochte Fische geben zeitlich begrenzte Buffs
- Buff-Fische sind besonders wertvoll fürs Leveln (XP-Buffs) und Dungeons (Stat-Buffs)
- Können auch im Marktplatz gehandelt werden

---

## Idle-Aktion Integration

Mining und Fischen sind **separate Idle-Aktionen**:
- Man kann nicht gleichzeitig Leveln/Farmen UND Minen/Fischen
- Man muss sich entscheiden: Leveln, Farmen, Metinsteine, Mining oder Fischen
- Loadout-System gilt auch hier (Tränke nicht nötig, aber ggf. Buff-Items)

## UI-Darstellung

### Mining-Ansicht
- Spitzhacke-Info (Stufe, Fortschritt)
- Mining-Skill-Level
- Idle-Log: "Abbauversuch... Erfolg! Silbererz erhalten." / "Fehlschlag."
- Erz-Übersicht der aktuellen Session

### Fischen-Ansicht
- Angel-Info (Stufe, Fortschritt)
- Köder-Vorrat
- Idle-Log: "Biss! Aal gefangen!" / "Der Fisch ist entkommen."
- Fang-Übersicht der aktuellen Session

## Festgelegt
- Beide ab **Level 30** verfügbar
- Eigene Idle-Aktionen (nicht parallel zu Leveln/Farmen)
- Spitzhacke upgradebar (+0 bis +9)
- Angel upgradebar (+0 bis +20)
- Fische kochbar zu Buff-Items (besonders XP-Buffs)
- Erze verarbeitbar zu Crafting-Materialien
- Alles über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Komplette Fisch-Liste mit Buffs und Werten
- [ ] Komplette Erz-Liste mit Verwendung
- [ ] Tick-Rate für Mining/Fischen (gleich wie Kampf 3s?)
- [ ] Spitzhacke/Angel Upgrade-Kosten und Erfolgsraten
- [ ] Koch-Rezepte definieren
- [ ] Verarbeitungs-Rezepte für Erze
- [ ] Mining-Bücher: Droprate und Cooldown
