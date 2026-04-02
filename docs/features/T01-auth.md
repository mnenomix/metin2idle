# T1: Auth-System

## Übersicht
Authentifizierung über Auth.js (ehemals NextAuth), direkt im Node.js-Backend integriert. Email/Passwort, Google OAuth und Discord OAuth. Erweiterbar für weitere Provider.

## Tech-Stack
- **Auth.js** für Session-Management und OAuth-Provider
- **bcrypt** für Passwort-Hashing
- **PostgreSQL** als Session/User-Store (Auth.js Adapter)
- Kein separater Auth-Container nötig → läuft im Node.js-Backend

## Auth-Provider

### Email/Passwort
- Registrierung: Email + Passwort (min. 8 Zeichen)
- Email-Verifizierung (Bestätigungslink)
- Passwort-Reset via Email
- Passwort-Hashing: bcrypt

### Google OAuth
- Login via Google-Account
- Beim ersten Login: Account wird automatisch erstellt

### Discord OAuth
- Login via Discord-Account
- Beim ersten Login: Account wird automatisch erstellt

### Account-Verknüpfung
- Spieler kann nachträglich weitere Provider verknüpfen
- Ein Spieler-Account = 1 oder mehrere Auth-Provider

## Rollen

| Rolle | Zugriff |
|-------|---------|
| Spieler | Spiel-Features, eigener Account |
| Admin | Alles + Admin-Panel (→ T6) |

## Sicherheit
- Rate-Limiting auf Login/Register-Endpunkte
- Brute-Force-Schutz (Account-Lock nach X Fehlversuchen)
- HTTPS Pflicht (via Reverse Proxy)
- CORS korrekt konfiguriert
- Passwort-Hashing mit bcrypt (Salt-Rounds: 12)

## Infrastruktur
- Läuft als Teil des Node.js-Backend-Containers
- PostgreSQL als Datenbank (Auth.js Adapter)
- Kein separater Auth-Service nötig

## Offene Punkte
- [ ] Email-Provider für Verifizierung/Reset (SMTP self-hosted oder externer Dienst?)
- [ ] Rate-Limiting Werte
- [ ] 2FA (später?)
