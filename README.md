# Metin2 Idle MMO

Ein browserbasiertes 2D Idle-MMO inspiriert von Metin2. Spieler erstellen einen Charakter, leveln und farmen automatisch Monster, upgraden Equipment und interagieren mit anderen Spielern über Marktplatz und Handel.

## Tech-Stack

| Bereich | Technologie |
|---------|------------|
| Frontend | React + TypeScript + Vite |
| UI | Tailwind CSS + shadcn/ui (Dark Theme) |
| Backend | Node.js |
| Auth | Auth.js (Email, Google, Discord) |
| Datenbank | PostgreSQL + Redis |
| ORM | Drizzle ORM |
| Echtzeit | Socket.IO |
| Infrastruktur | Docker Compose (ARM-VServer) |

## Features

### Kernfeatures

| # | Feature | Status | Dokumentation |
|---|---------|--------|---------------|
| 1 | Charaktererstellung & Klassen | 🟢 Definiert | [Details](docs/features/01-character-creation.md) |
| 2 | Idle-Grinding & Levelsystem | 🟢 Definiert | [Details](docs/features/02-idle-grinding.md) |
| 3 | Equipment & Item-System | 🟢 Definiert | [Details](docs/features/03-equipment-items.md) |
| 4 | Item-Upgrading (+0 bis +9) | 🟢 Definiert | [Details](docs/features/04-item-upgrading.md) |
| 5 | Metinsteine | 🟢 Definiert | [Details](docs/features/05-metinstones.md) |
| 6 | Skills & Skillsystem | 🟢 Definiert | [Details](docs/features/06-skills.md) |
| 7 | Dungeons | 🟢 Definiert | [Details](docs/features/07-dungeons.md) |
| 8 | PvP / Duell-System | ⏸️ Später | - |
| 9 | Gilden | ⏸️ Später | - |
| 10 | Marktplatz / Handel | 🟢 Definiert | [Details](docs/features/10-marketplace.md) |
| 11 | Mining & Fischen | 🟢 Definiert | [Details](docs/features/11-mining-fishing.md) |
| 12 | Königreiche (Fraktionen) | 🟢 Definiert | [Details](docs/features/12-kingdoms.md) |
| 13 | Forum / Thread-System | ⏸️ Später | - |
| 14 | Pferde / Reitsystem | 🟢 Definiert | [Details](docs/features/14-mounts.md) |
| 15 | Offline-Progress | 🟢 Definiert | [Details](docs/features/15-offline-progress.md) |
| 16 | Währungen (Yang & Drachenmünzen) | 🟢 Definiert | [Details](docs/features/16-currencies.md) |
| 17 | Quests & Achievements | 🟢 Definiert | [Details](docs/features/17-quests-achievements.md) |
| 18 | Biologen-Quests | 🟢 Definiert | [Details](docs/features/18-biologist.md) |
| 19 | Drachensplitter & Drachenalchemie | 🟢 Definiert | [Details](docs/features/19-dragon-alchemy.md) |

### Technische Features

| # | Feature | Status | Dokumentation |
|---|---------|--------|---------------|
| T1 | Auth-System | 🟢 Definiert | [Details](docs/features/T01-auth.md) |
| T2 | Datenbank-Schema | 🟢 Definiert | [Details](docs/features/T02-database.md) |
| T3 | WebSocket-Layer | 🟢 Definiert | [Details](docs/features/T03-websocket.md) |
| T4 | Game-Loop / Tick-System | 🟢 Definiert | [Details](docs/features/T04-gameloop.md) |
| T5 | Offline-Berechnung | 🟢 Definiert | [Details](docs/features/T05-offline-calc.md) |
| T6 | Admin-Panel | 🟢 Definiert | [Details](docs/features/T06-admin-panel.md) |
| T7 | Frontend & PWA | 🟢 Definiert | [Details](docs/features/T07-frontend-pwa.md) |

## Dokumentation

- [Projektübersicht](docs/project-overview.md) - Konzept, Tech-Stack, Architektur-Entscheidungen
- [Backlog](docs/backlog.md) - Feature-Status auf einen Blick
- [Entwicklungs-Roadmap](docs/development-roadmap.md) - 14 Phasen von Setup bis Admin-Panel
- [Assets & Ressourcen](docs/assets-resources.md) - Sprites, Icons, Datenquellen

## Status

Projekt befindet sich in der **Planungsphase**. Alle Kernfeatures sind definiert, die Entwicklung startet mit Phase 0 (Projekt-Setup).
