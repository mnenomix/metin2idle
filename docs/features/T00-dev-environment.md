# T0: Entwicklungsumgebung & Infrastruktur

## Übersicht
Docker-basierte Entwicklungsumgebung und Produktions-Setup. Lokale Entwicklung mit Hot-Reload, Produktion als vollständiges Docker Compose Setup auf ARM-VServer.

## Lokale Entwicklung (docker-compose.dev.yml)

### Services
| Service | Image | Port |
|---------|-------|------|
| PostgreSQL | postgres:16 | 5432 |
| Redis | redis:7-alpine | 6379 |

- Frontend (React + Vite) läuft **nativ** → Hot-Reload
- Backend (Node.js) läuft **nativ** → Hot-Reload
- Nur Datenbank-Services in Docker

### Volumes
- PostgreSQL: Persistenter Volume für Daten
- Redis: Optional persistent (RDB)

## Produktion (docker-compose.yml)

### Services
| Service | Image | Port |
|---------|-------|------|
| PostgreSQL | postgres:16 | intern |
| Redis | redis:7-alpine | intern |
| Backend | Custom (Node.js) | intern |
| Frontend | Custom (React Build → Nginx) | intern |
| Reverse Proxy | traefik:v3 oder nginx:alpine | 80, 443 |

- Alle Services in einem Docker-Netzwerk
- Nur Reverse Proxy nach außen erreichbar
- HTTPS via Traefik (Let's Encrypt) oder Nginx + Certbot
- ARM-kompatible Images

## Monorepo-Struktur (Vorschlag)

```
idle/
├── docker-compose.yml          # Produktion
├── docker-compose.dev.yml      # Lokale Entwicklung
├── packages/
│   ├── frontend/               # React + Vite
│   └── backend/                # Node.js
├── docs/                       # Feature-Dokumentation
└── scripts/                    # Scraper, Seeds, Utilities
```

## Festgelegt
- **Docker Compose** für lokale Entwicklung (PostgreSQL + Redis)
- **Docker Compose** für Produktion (alle Services)
- **ARM-kompatibel** (VServer)
- Frontend + Backend laufen lokal **nativ** (kein Docker für Dev)
