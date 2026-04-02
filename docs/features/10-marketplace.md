# Feature 10: Marktplatz / Handel

## Übersicht
Zentraler Marktplatz auf dem Spieler Items zum Sofortkauf anbieten können. Zusätzlich gibt es direkten Handel zwischen zwei Spielern. Alle Items sind handelbar. Beim Verkauf über den Marktplatz fällt eine Yang-Gebühr an.

## Marktplatz

### Items einstellen
1. Spieler wählt Item aus Inventar
2. Legt **Preis in Yang** fest
3. Optional: **Menge** bei stackbaren Items
4. Klickt "Anbieten"
5. Item wird aus Inventar entfernt und im Marktplatz gelistet

### Items kaufen
1. Spieler durchsucht den Marktplatz
2. Findet gewünschtes Item
3. Klickt "Kaufen" → Yang wird abgezogen, Item ins Inventar
4. Sofortkauf, kein Bieten/Auktionieren

### Verkaufsgebühr
- Beim **erfolgreichen Verkauf** wird eine prozentuale Gebühr vom Erlös abgezogen
- Gebühr als Yang-Sink für die Spielökonomie
- Beispiel: 5% Gebühr → Verkauf für 100.000 Yang → Verkäufer erhält 95.000 Yang
- Gebühr-Prozentsatz über Admin-Panel konfigurierbar

### Listing zurückziehen
- Spieler kann ein Angebot jederzeit zurückziehen
- Item geht zurück ins Inventar
- Keine Gebühr beim Zurückziehen

### Suche & Filter
- **Textsuche**: Nach Item-Name
- **Kategorie-Filter**: Waffen, Rüstungen, Accessoires, Verbrauchsgüter, Materialien, Sonstiges
- **Klassen-Filter**: Nur Items für meine Klasse
- **Level-Filter**: Min/Max Level
- **Sortierung**: Preis (aufsteigend/absteigend), Datum, Level
- **Seltenheits-Filter**: Normal, Magisch, Selten, Episch

### Angebots-Limit
- Maximal X gleichzeitige Angebote pro Spieler (z.B. 10-20)
- Limit über Admin-Panel konfigurierbar
- Verhindert Marktplatz-Spam

## Direkter Handel

### Ablauf
1. Spieler A öffnet Handelsanfrage an Spieler B
2. Beide Spieler legen Items und/oder Yang ins Handelsfenster
3. Beide bestätigen das Angebot
4. **Doppelte Bestätigung**: Nach dem ersten "Bestätigen" sehen beide die finale Übersicht → zweites "Bestätigen"
5. Tausch wird ausgeführt

### Sicherheit
- Doppelte Bestätigung verhindert Scam
- Items können nicht während des Handels verändert werden
- Handelsfenster zeigt Item-Details (Stats, Boni, Upgrade-Stufe)
- Kein Handel möglich wenn Inventar des Empfängers voll

## UI-Darstellung

### Marktplatz-Ansicht
- Eigener Menüpunkt im Spiel
- **Links**: Filter & Suchleiste
- **Mitte**: Item-Liste mit Icon, Name, Stats-Vorschau, Preis, Verkäufer-Name
- **Tooltip**: Volle Item-Details bei Hover/Klick
- **Eigene Angebote**: Tab mit eigenen aktiven Listings

### Handels-Fenster
- Pop-up bei Handelsanfrage
- Zwei Seiten: Eigene Items | Items des Partners
- Yang-Feld für Geldtausch
- Bestätigungs-Buttons

## Festgelegt
- **Sofortkauf** (kein Auktionssystem)
- **Alle Items handelbar** (keine Ausnahmen)
- **Verkaufsgebühr** als Yang-Sink (%-Satz über Admin-Panel)
- **Direkthandel** zwischen Spielern möglich

## Offene Punkte
- [ ] Verkaufsgebühr: Basis-Prozentsatz (5%? 3%?)
- [ ] Angebots-Limit pro Spieler
- [ ] Wie lange bleibt ein Angebot aktiv? (z.B. 48h, 7 Tage, unbegrenzt?)
- [ ] Marktplatz-Historie: Kann man vergangene Verkäufe einsehen?
- [ ] Preis-Vorschläge: Durchschnittspreis eines Items anzeigen?
