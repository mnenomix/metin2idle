# Feature 18: Biologen-Quests

## Übersicht
Der Biologe ist ein NPC der spezielle Sammel-Quests vergibt. Spieler müssen bestimmte Items abgeben die nur durch Farmen oder den Marktplatz erhältlich sind. Als Belohnung gibt es **dauerhafte Stat-Boni** auf den Charakter. Das ist ein wichtiges Langzeit-Progressionssystem.

## Grundmechanik

### Ablauf
1. Spieler besucht den **Biologen** (NPC)
2. Biologe zeigt aktuelle Quest: "Bringe mir X Stück von Item Y"
3. Spieler farmt das Item (Drops von bestimmten Monstern) oder kauft es im Marktplatz
4. Spieler gibt Items beim Biologen ab
5. **Dauerhafter Stat-Bonus** wird freigeschaltet
6. Nächste Quest wird verfügbar

### Besonderheiten
- Quests sind **levelgebunden** (nächste Quest erst ab bestimmtem Level)
- Items sind **nur durch Farmen oder Marktplatz** erhältlich (nicht beim NPC kaufbar)
- Boni sind **permanent** und stapeln sich über die gesamte Questreihe
- Cooldown zwischen Abgaben möglich (z.B. 1 Abgabe alle X Stunden)
- Anreiz für den Marktplatz: Seltene Biologen-Items sind wertvoll zum Handeln

## Quest-Kette (Beispiel, orientiert am Original)

| Quest | Level | Benötigtes Item | Anzahl | Dauerhafter Bonus |
|-------|-------|----------------|--------|-------------------|
| 1 | 4+ | Pfirsichblüte | 10 | +5 Max-HP |
| 2 | 10+ | Glockenblume | 10 | +5 Max-HP |
| 3 | 15+ | Pilz | 15 | +1 STR |
| 4 | 20+ | Wurzel | 15 | +1 VIT |
| 5 | 25+ | Orkzahn | 20 | +1 DEX |
| 6 | 30+ | Spinnengift | 20 | +1 INT |
| 7 | 35+ | Fluchsammlung | 25 | +10 Max-HP |
| 8 | 40+ | Geisterbaumast | 25 | +2 STR |
| 9 | 45+ | Affenfell | 30 | +2 DEX |
| 10 | 50+ | Dämonenherz | 30 | +2 VIT |
| 11 | 55+ | Drachenschuppe | 35 | +15 Max-HP |
| 12 | 60+ | Spinnenkönigin-Gift | 35 | +2 INT |
| 13 | 65+ | Geister-Andenken | 40 | +3 STR |
| 14 | 70+ | Anführernotiz | 40 | +3 DEX |
| 15 | 75+ | Dämonenrelikt | 50 | +20 Max-HP |
| 16 | 80+ | Drachenzahn | 50 | +3 VIT |
| 17 | 85+ | Nemere-Splitter | 60 | +3 INT |
| 18 | 90+ | Razador-Essenz | 60 | +30 Max-HP, +2 alle Stats |

*Exakte Items, Mengen und Boni über Admin-Panel konfigurierbar*

## Item-Quellen

- Biologen-Items droppen **nur beim Farmen** (nicht beim Leveln)
- Bestimmte Items droppen nur in bestimmten Gebieten/Monstern
- Drop-Rate ist niedrig → Langzeit-Grind oder Marktplatz
- Biologen-Items sind im Marktplatz handelbar → Wirtschaftsfaktor

## UI-Darstellung

### Biologen-Interface
- NPC-Dialog mit aktueller Quest
- Fortschrittsanzeige: "12/25 Orkzähne abgegeben"
- Übersicht aller bisherigen und kommenden Boni
- Gesamtbonus-Zusammenfassung: "Biologe gesamt: +50 HP, +5 STR, +4 DEX..."

## Festgelegt
- **Dauerhafte Boni** (permanent auf den Charakter)
- Items nur durch **Farmen oder Marktplatz** erhältlich
- **Levelgebundene** Quest-Kette (18 Quests von Lv4 bis Lv90)
- Wichtiger **Marktplatz-Treiber** (seltene Items werden gehandelt)
- Alles über Admin-Panel konfigurierbar

## Offene Punkte
- [ ] Exakte Item-Liste und Drop-Quellen (welches Monster droppt was)
- [ ] Exakte Bonus-Werte pro Quest
- [ ] Anzahl benötigter Items pro Quest
- [ ] Cooldown zwischen Abgaben?
- [ ] Abgabe einzeln oder alle auf einmal?
