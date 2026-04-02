# Metin2 Idle MMO - Projektübersicht

## Konzept
Ein browserbasiertes 2D Idle-MMO inspiriert von Metin2. Spieler erstellen einen Charakter, farmen automatisch Monster, upgraden Equipment und interagieren mit anderen Spielern über Gilden, PvP, Chat und Marktplatz.

## Tech-Stack
- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui (dunkles Theme)
- **Backend**: Node.js
- **Auth**: Auth.js (im Backend integriert)
- **Datenbank**: PostgreSQL (Persistenz) + Redis (Cache/Session/Live-State)
- **ORM**: Drizzle ORM
- **Kommunikation**: WebSocket für Echtzeit-Updates (Marktplatz, Live-Progress)
- **Infrastruktur**: Docker Compose auf eigenem ARM-VServer
- **Reverse Proxy**: Traefik oder Nginx

## Entscheidungen

| Frage | Entscheidung |
|-------|-------------|
| Multiplayer-Scope | Medium (Gilden, PvP, Chat, Marktplatz) |
| Auth | Email/Passwort + Google OAuth + Discord OAuth, erweiterbar |
| Offline-Progress | Ja, begrenzt (z.B. max 8h, reduzierte Effizienz) |
| Monetarisierung | Soft-Launch (Architektur vorbereitet, kein Payment initial) |
| Visueller Stil | 2D UI mit Original-Metin2-Sprites/Icons, Buttons, Progressbars, HP-Balken, Dialog-Texte. Keine Animationen oder 3D. |

## Architektur-Prinzip
- Redis hält den "heißen" Spielzustand (laufende Aktionen, Timer, XP-Zähler)
- PostgreSQL persistiert alle paar Sekunden den Fortschritt
- Offline-Progress wird beim Login serverseitig berechnet
