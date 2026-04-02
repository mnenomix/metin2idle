# Entwicklungsreihenfolge (Roadmap)

## Prinzip
Von innen nach außen: Erst das technische Fundament, dann die Kern-Spielmechanik, dann Feature für Feature draufbauen. Jede Phase ist spielbar/testbar.

---

## Phase 0: Projekt-Setup
- [ ] Monorepo-Struktur (Frontend + Backend)
- [ ] Docker Compose (Node.js, PostgreSQL, Redis, Nginx/Traefik)
- [ ] TypeScript-Konfiguration
- [ ] Vite + React Setup (Frontend)
- [ ] Node.js + Express/Fastify Setup (Backend)
- [ ] Drizzle ORM + erste Migration
- [ ] Socket.IO Grundgerüst
- [ ] shadcn/ui + Tailwind + Dark Theme
- [ ] Auth.js Integration (Email + Google + Discord)

**Ergebnis**: Lauffähige App mit Login, leere Spielwelt.

---

## Phase 1: Wiki-Scraper & Seed-Daten
- [ ] Scraper-Script für Metin2 Wiki
  - Monster-Daten (Level, HP, ATK, DEF, XP, Yang)
  - Drop-Tabellen (Monster → Items)
  - Metinstein-Daten + Drops
  - XP-Kurve (XP pro Level 1-99)
  - Item-Stammdaten
- [ ] Sprite-Download (Monster, Metinsteine, Bosse)
- [ ] Item-Icons von m2icondb.com
- [ ] DB-Seed-Scripts generieren

**Ergebnis**: Vollständige Spieldaten in der Datenbank.

---

## Phase 2: Charaktererstellung
- [ ] F1: Charakter erstellen (Name, Klasse, Geschlecht, Königreich)
- [ ] Charakter-Übersicht UI
- [ ] Basis-Stats pro Klasse
- [ ] F12: Königreich-Wahl (rein kosmetisch)

**Ergebnis**: Spieler kann Account erstellen, einloggen, Charakter erstellen.

---

## Phase 3: Kern-Gameloop (Leveln)
- [ ] T4: Game-Loop / Tick-System (1s Server-Loop)
- [ ] T3: WebSocket-Events (Tick, Kill, LevelUp, Death)
- [ ] F2: Leveln-Modus (nur XP, Gebiet wählen)
- [ ] Kampfformel (Spieler vs Monster)
- [ ] HP-Regeneration + Tod + XP-Verlust
- [ ] Statpunkte verteilen
- [ ] UI: Kampf-Ansicht (Monster-Sprite, HP-Balken, Kampf-Log, XP-Bar)
- [ ] UI: Gebiets-Auswahl

**Ergebnis**: Spieler kann Leveln - Kern des Spiels funktioniert.

---

## Phase 4: Equipment & Inventar
- [ ] F3: Item-System (Item-Typen, Seltenheiten, Boni)
- [ ] Inventar-UI (Grid, Tooltips, Vergleich)
- [ ] Equipment-Slots + Ausrüsten/Ablegen
- [ ] Charakter-Stats Neuberechnung bei Equipment-Wechsel
- [ ] Inventar-Erweiterung beim Gemischtwarenhändler
- [ ] NPC-Shops (Kaufen/Verkaufen)

**Ergebnis**: Spieler kann Items sehen, ausrüsten, bei NPCs kaufen.

---

## Phase 5: Farmen & Loot
- [ ] F2: Farmen-Modus (nur Items/Yang, keine XP)
- [ ] Drop-System (Monster-Drops aus Loot-Tabellen)
- [ ] XX: Loot-Tabellen aktiv (Seed-Daten aus Phase 1)
- [ ] Loadout-System (Tränke, Buffs vor Aktionsstart)
- [ ] HP-Trank Logik (Trigger + fixer Cooldown)
- [ ] Elixier der Sonne Logik (Kontingent)
- [ ] Buff-Items (Zeitkontingent, nur aktiv während Aktion)
- [ ] F3: Gegenstand verstärken (Adder) + Gegenstand verzaubern (Switcher)
- [ ] Drachensplitter-Drops beim Farmen (F19 Vorbereitung)

**Ergebnis**: Spieler kann Farmen, bekommt Loot, nutzt Loadout.

---

## Phase 6: Upgrading
- [ ] F4: Schmied-NPC (Upgrade +0 bis +9)
- [ ] Segensschriftrolle + Magischer Stein Mechanik
- [ ] Tausch-System beim Schmied (10x Schriftrolle → 1x Stein)
- [ ] UI: Schmiede-Interface + Händler-Tab

**Ergebnis**: Spieler kann Items upgraden, Risiko-Reward Mechanik.

---

## Phase 7: Metinsteine
- [ ] F5: Metinsteine als Drop beim Farmen
- [ ] Metinsteine im Inventar
- [ ] Metinstein-Abfarmen als separate Idle-Aktion
- [ ] Level-Differenz Check (max 15 Level über Stein)
- [ ] Metin-Loot-Tabellen (Fertigkeitsbücher, Geiststeine, Seelensteine)
- [ ] UI: Metinstein-Bereich

**Ergebnis**: Dritte Idle-Aktion verfügbar, wertvoller Loot.

---

## Phase 8: Skills
- [ ] F6: Skill-Pfad-Wahl ab Level 5
- [ ] Skillpunkte verteilen (Normal 1-20)
- [ ] Skills wirken als passive Boni im Kampf
- [ ] Fertigkeitsbücher lesen (M1-M10, 8h Cooldown)
- [ ] Seelensteine (G1-P, Erfolg/Fehlschlag)
- [ ] Konzentriertes Lesen (100% Erfolg)
- [ ] Exorzismus-Schriftrolle (Cooldown-Reset)
- [ ] Buch des Vergessens
- [ ] UI: Skill-Übersicht

**Ergebnis**: Vollständiges Skill-System.

---

## Phase 9: Dungeons
- [ ] F7: Dungeon-System (Etagen, Monster-Wellen, Boss)
- [ ] 9 Dungeons (Affen → Razador)
- [ ] Ticket-System
- [ ] Cooldowns
- [ ] Dungeon-exklusive Drops
- [ ] UI: Dungeon-Auswahl, Dungeon-Lauf, Boss-Kampf

**Ergebnis**: Endgame-Content verfügbar.

---

## Phase 10: Sekundäre Systeme
- [ ] F11: Mining (Spitzhacke, Erze, Mining-Skill)
- [ ] F11: Fischen (Angel, Köder, Fisch-Buffs, Kochen)
- [ ] F14: Pferd (Kaufen, Medaillen, Level 1-30)
- [ ] F18: Biologen-Quests (Sammel-Quests, permanente Boni)
- [ ] F19: Drachenalchemie (Splitter → Steine, Slots, Set-Boni)

**Ergebnis**: Alle Langzeit-Progressionssysteme aktiv.

---

## Phase 11: Wirtschaft & Social
- [ ] F10: Marktplatz (Listen, Kaufen, Gebühren, Suche/Filter)
- [ ] F10: Direkthandel (Handelsfenster, doppelte Bestätigung)
- [ ] F16: Währungen (Yang-Sinks balancen, Drachenmünzen)

**Ergebnis**: Spieler-Wirtschaft funktioniert.

---

## Phase 12: Quests & Achievements
- [ ] F17: Daily Quests (Yang-Belohnungen)
- [ ] F17: Storylines (Kapitel, NPC-Dialoge, Drachenmünzen)
- [ ] F17: Achievements (Langzeit-Ziele, Titel)
- [ ] UI: Quest-Log, Achievement-Raster

**Ergebnis**: Spieler haben Ziele und Anreize.

---

## Phase 13: Offline-Progress
- [ ] T5: Offline-Berechnung (Hochrechnung)
- [ ] F15: Offline-Report beim Login
- [ ] Offline-Boost-Item (Drachenmünzen)
- [ ] PWA Service Worker für Push-Notifications

**Ergebnis**: Spiel läuft auch wenn Browser zu ist.

---

## Phase 14: Admin-Panel
- [ ] T6: Dashboard (Spieler-Statistiken, Server-Performance)
- [ ] T6: Spieler-Verwaltung (Suche, Yang/DM vergeben, Ban)
- [ ] T6: Spiel-Konfiguration (alle game_config Werte)
- [ ] T6: Stammdaten-CRUD (Items, Monster, Zonen, Dungeons, Quests)
- [ ] T6: Drop-Tabellen Editor
- [ ] T6: Monitoring & Logs

**Ergebnis**: Vollständige Admin-Kontrolle.

---

## Spätere Versionen
- F8: PvP / Duell-System
- F9: Gilden
- F13: Forum / Thread-System
- Reichskriege
- Weitere Dungeons
- Level-Cap Erhöhung (99 → 120)
- Cosmetics-Shop (Drachenmünzen)
- Echtgeld-Integration
