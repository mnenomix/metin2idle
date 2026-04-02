# Feature 15: Offline-Progress

## Übersicht
Wenn der Spieler den Browser schließt oder offline geht, läuft die aktive Idle-Aktion weiter - begrenzt auf eine maximale Dauer. Beim nächsten Login wird der Fortschritt serverseitig berechnet und dem Spieler präsentiert.

## Grundmechanik

### Was passiert beim Offline-Gehen?
- Die **aktuell aktive Idle-Aktion** läuft weiter (Leveln, Farmen, Mining, Fischen)
- Server merkt sich: Welche Aktion, welches Gebiet, welches Loadout
- Nach Ablauf der maximalen Offline-Zeit stoppt die Aktion automatisch

### Beim nächsten Login
1. Server berechnet was in der Offline-Zeit passiert wäre
2. Spieler bekommt eine **Zusammenfassung** angezeigt:
   - Dauer der Offline-Aktivität
   - XP erhalten (beim Leveln)
   - Items erhalten (beim Farmen)
   - Erze/Fische erhalten (beim Mining/Fischen)
   - Metinsteine erhalten (beim Farmen)
   - Verbrauchte Tränke/Buffs
3. Loot wird ins Inventar gelegt, XP wird gutgeschrieben

### Berechnung
- Serverseitig basierend auf Tick-Rate und Spieler-Stats zum Zeitpunkt des Offline-Gehens
- Gleiche Formeln wie beim Online-Grinding (keine Benachteiligung)
- **Reduzierte Effizienz**: Offline-Progress gibt z.B. 80% der normalen Ausbeute
- Tod möglich: Wenn der Charakter während der Offline-Zeit sterben würde → Aktion stoppt an diesem Punkt

## Limits

### Maximale Offline-Dauer
- **8 Stunden** maximaler Offline-Progress
- Danach stoppt die Aktion automatisch
- Anreiz: Regelmäßig einloggen für optimalen Fortschritt
- Über Admin-Panel konfigurierbar

### Einschränkungen
- **Nur 1 Aktion**: Es läuft nur die zuletzt aktive Aktion weiter
- **Kein Dungeon offline**: Dungeons können nicht offline abgeschlossen werden (zu komplex, Boss-Mechanik)
- **Kein Metinstein-Abfarmen offline**: Nur normales Leveln/Farmen/Mining/Fischen
- **Loadout wird verbraucht**: Tränke, Buffs etc. ticken normal weiter und werden aufgebraucht
- **Kein Marktplatz offline**: Aber eingestellte Angebote bleiben aktiv (andere können kaufen)

## Effizienz

- **Flat-Rate**: z.B. 80% der normalen Online-Ausbeute
- Einfach zu verstehen für Spieler
- Wert über Admin-Panel konfigurierbar

## UI: Offline-Report

### Login-Screen
- Pop-up nach Login: "Willkommen zurück!"
- Zusammenfassung der Offline-Aktivität
- Visuell ansprechend: Icons für Items, XP-Balken-Fortschritt
- Button: "Einsammeln" → Loot geht ins Inventar

### Inhalt des Reports
- Dauer der Offline-Aktivität
- Aktion die gelaufen ist (z.B. "Farmen in Dunkler Wald")
- XP erhalten (falls Leveln)
- Level-Ups während Offline (falls passiert)
- Items erhalten (Liste mit Icons)
- Verbrauchte Tränke/Buffs
- Falls Tod: "Dein Charakter ist nach 4h 23min gestorben. Ergebnis bis zu diesem Zeitpunkt:"

## Festgelegt
- **Max 8 Stunden** Offline-Progress
- **Nur Leveln, Farmen, Mining, Fischen** (keine Dungeons, keine Metinsteine)
- **Loadout wird verbraucht** (Tränke, Buffs)
- **Tod möglich** → Aktion stoppt
- **Offline-Report** beim nächsten Login
- Alles über Admin-Panel konfigurierbar

## Festgelegt
- **Flat-Rate Effizienz** (konfigurierbar über Admin-Panel)
- **Statpunkte sammeln** bei Offline-Level-Ups → Verteilung beim nächsten Login
- **Offline-Boost-Item**: Setzt Effizienz auf 100% (Monetarisierungs-Kandidat)

## Offene Punkte
- [ ] Offline-Report: Detailgrad (jedes Item einzeln oder zusammengefasst?)
- [ ] Offline-Boost-Item: Dauer (pro Nutzung 8h?) und Beschaffung
