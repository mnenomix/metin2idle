# T6: Admin-Panel

## Übersicht
Web-basiertes Admin-Panel für Spielleiter/Admins. Ermöglicht die Konfiguration aller Spielwerte, Spieler-Verwaltung und Monitoring. Erreichbar über eigene Route, nur für Accounts mit Admin-Rolle.

## Tech-Stack
- Eigene React-App (gleicher Stack: React + TypeScript + Tailwind + shadcn/ui)
- Geschützt durch Admin-Rolle (Auth.js)
- Kommuniziert mit Backend über REST-API + WebSocket
- Dunkles Theme (konsistent mit Spiel-UI)

## Bereiche

---

### 1. Dashboard
- Aktive Spieler (online)
- Registrierte Accounts gesamt
- Aktive Idle-Sessions nach Typ (Leveln, Farmen, Mining etc.)
- Server-Performance (Tick-Dauer, Redis-Latenz)
- Yang-Wirtschaft: Gesamt im Umlauf, täglicher Ein-/Ausfluss

---

### 2. Spieler-Verwaltung

#### Spieler suchen & anzeigen
- Suche nach Name, Email, Account-ID
- Spieler-Profil: Account-Details, Charaktere, Login-Historie

#### Spieler-Aktionen
- **Yang vergeben/entziehen**
- **Drachenmünzen vergeben/entziehen**
- **Items vergeben** (aus Item-Stammdaten)
- **Items entfernen**
- **Level setzen**
- **Statpunkte zurücksetzen**
- **Skillpunkte zurücksetzen**
- **Account sperren / entsperren** (Ban)
- **Rolle ändern** (Spieler → Admin, Admin → Spieler)

#### Spieler-Einsicht
- Inventar einsehen
- Equipment einsehen
- Aktive Idle-Aktion einsehen
- Quest-Fortschritt
- Achievement-Fortschritt
- Biologe-Fortschritt
- Drachenstein-Slots
- Pferd-Level
- Handelshistorie (Marktplatz)

---

### 3. Spiel-Konfiguration

Alle Werte die über `game_config` (→ T2) gespeichert werden:

#### Kampf & Balancing
| Config | Beschreibung |
|--------|-------------|
| base_tick_rate | Basis-Tick in ms (Standard: 3000) |
| min_tick_rate | Minimaler Tick in ms (Standard: 1000) |
| death_xp_loss_percent | XP-Verlust bei Tod (%) |
| hp_potion_cooldown | Fixer HP-Trank Cooldown (Sekunden) |
| offline_efficiency | Offline-Progress Effizienz (0.0 - 1.0) |
| offline_max_hours | Max Offline-Dauer (Stunden) |

#### Drops & Loot
| Config | Beschreibung |
|--------|-------------|
| metin_drop_chance_* | Metinstein-Dropchance pro Zone |
| dragon_shard_drop_rate | Drachensplitter-Droprate beim Farmen |
| biologist_item_drop_rate | Biologen-Item-Droprate |

#### Marktplatz
| Config | Beschreibung |
|--------|-------------|
| marketplace_fee_percent | Verkaufsgebühr (%) |
| marketplace_max_listings | Max Angebote pro Spieler |
| marketplace_listing_duration | Angebots-Dauer (Stunden) |

#### Upgrading
| Config | Beschreibung |
|--------|-------------|
| upgrade_success_rate_* | Erfolgsrate pro Stufe (+1 bis +9) |
| blessing_scroll_price | Segensschriftrolle Yang-Preis |
| magic_stone_price | Magischer Stein Yang-Preis |
| scroll_to_stone_ratio | Tauschverhältnis Schriftrollen → Stein |

#### Skills
| Config | Beschreibung |
|--------|-------------|
| book_cooldown_hours | Fertigkeitsbuch-Cooldown (Stunden) |
| soulstone_success_rate | Seelenstein-Erfolgsrate (%) |
| exorcism_scroll_price | Exorzismus-Schriftrolle Preis |
| concentrated_reading_price | Konzentriertes Lesen Preis |

#### Dungeons
| Config | Beschreibung |
|--------|-------------|
| dungeon_cooldown_* | Cooldown pro Dungeon (Sekunden) |
| dungeon_ticket_price_* | Ticket-Preis pro Dungeon (Yang) |
| dungeon_ticket_drop_rate_* | Ticket-Droprate bei Metinsteinen |

#### Inventar
| Config | Beschreibung |
|--------|-------------|
| inventory_initial_slots | Start-Slots |
| inventory_slot_price_base | Basis-Preis für Slot-Erweiterung |
| inventory_slot_price_growth | Preis-Steigerung pro Erweiterung |

---

### 4. Stammdaten-Verwaltung

CRUD-Operationen für alle Spiel-Stammdaten:

#### Items
- Alle Item-Typen anlegen, bearbeiten, löschen
- Basiswerte, Klassen-Restriktionen, Level-Anforderungen
- Icon zuweisen (aus Metin2 Icon DB)
- NPC-Kauf/Verkaufspreise

#### Monster
- Monster anlegen, bearbeiten, löschen
- Stats (HP, ATK, DEF, Level)
- Zone zuweisen
- XP- und Yang-Belohnungen

#### Zonen / Gebiete
- Gebiete anlegen, bearbeiten
- Level-Range
- Metinstein-Dropchance
- Zugewiesene Monster

#### Drop-Tabellen
- Pro Monster/Metin/Boss: Welches Item mit welcher Chance
- Übersichtliche Tabellen-Ansicht
- Bulk-Edit möglich

#### Dungeons
- Dungeon-Details: Level, Etagen, Boss, Cooldown
- Ticket-Pflicht und Ticket-Item zuweisen
- Etagen-Zusammensetzung (Monster pro Etage)

#### Metinsteine
- Metinstein-Typen anlegen
- HP, Schaden, Level, Zone
- Drop-Tabellen

#### NPCs / Händler
- NPC-Shops konfigurieren
- Welcher NPC verkauft was zu welchem Preis
- Tausch-Rezepte (z.B. 10x Segensschriftrolle → 1x Magischer Stein)

#### Quests
- Daily Quest Templates
- Storylines und Kapitel
- Achievements

#### Skills
- Skill-Effekte pro Stufe bearbeiten

---

### 5. Monitoring & Logs

#### Live-Monitoring
- Aktive Spieler-Anzahl (Graph)
- Server-Tick-Performance (Durchschnitt, P95)
- Redis Memory-Nutzung
- PostgreSQL Query-Performance

#### Logs
- Login/Logout-Log
- Marktplatz-Transaktionen
- Item-Upgrades (Erfolg/Fehlschlag)
- Admin-Aktionen (wer hat was geändert)
- Fehler-Log

#### Wirtschafts-Übersicht
- Yang im Umlauf (gesamt)
- Yang-Quellen vs Yang-Sinks (Grafik)
- Drachenmünzen im Umlauf
- Marktplatz-Volumen (täglich)
- Durchschnittspreise populärer Items

---

### 6. System

#### Announcements
- Server-weite Nachrichten an alle Spieler senden
- Geplante Wartungsarbeiten ankündigen

#### Server-Steuerung
- Wartungsmodus aktivieren/deaktivieren
- Graceful Shutdown (alle Sessions persistieren)

## UI-Prinzipien
- Saubere Tabellen mit Suche/Filter/Sortierung
- Inline-Editing wo möglich
- Bestätigung bei kritischen Aktionen (Item vergeben, Account sperren)
- Änderungshistorie: Wer hat wann was geändert
- Responsive (auch am Handy nutzbar)

## Festgelegt
- **Web-basiert** im React-Frontend (eigener Admin-Bereich)
- **Admin-Rolle** über Auth.js
- **Alle Spielwerte konfigurierbar** über game_config
- **Stammdaten-CRUD** für Items, Monster, Zonen, Dungeons, Quests etc.
- **Spieler-Verwaltung** mit Yang/Drachenmünzen/Items vergeben
- **Monitoring** für Performance und Wirtschaft
- **Audit-Log** für Admin-Aktionen

## Offene Punkte
- [ ] Admin-Panel UI Framework (eigene Components oder Admin-UI-Lib wie React-Admin?)
- [ ] Wie granular sollen Rollen sein? (Super-Admin, Moderator, Support?)
- [ ] Export-Funktionen (CSV/JSON für Statistiken?)
- [ ] API Rate-Limiting für Admin-Endpunkte
