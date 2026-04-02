# T3: WebSocket-Layer

## Übersicht
WebSocket-Verbindung zwischen Client (React) und Server (Node.js) für Echtzeit-Updates. Der Spieler sieht live was sein Charakter tut: Kampf-Ticks, Loot, Level-Ups, Marktplatz-Benachrichtigungen.

## Tech-Stack
- **Socket.IO** - Bewährt, Fallback auf Long-Polling, Rooms/Namespaces, Auto-Reconnect

## Verbindungs-Lifecycle

```
1. Spieler loggt ein → HTTP Auth (Auth.js)
2. Client baut WebSocket-Verbindung auf (mit Auth-Token)
3. Server validiert Token → Verbindung akzeptiert
4. Server sendet initialen Spielzustand
5. Bidirektionale Kommunikation während der Session
6. Disconnect → Server markiert Spieler als offline (nach 60s ohne Heartbeat)
```

## Events: Server → Client

### Idle-Aktionen (Leveln, Farmen, Mining, Fischen)
| Event | Daten | Wann |
|-------|-------|------|
| `tick` | Schaden, Monster-HP, Spieler-HP | Jeden Tick (3s) |
| `monster:killed` | XP/Yang-Gewinn, Drop-Items | Bei Monster-Kill |
| `player:damaged` | Schaden, aktuelle HP | Bei Schaden am Spieler |
| `player:healed` | Heilung, Quelle (Trank/Elixier) | Bei Heilung |
| `player:died` | XP-Verlust, Aktion gestoppt | Bei Tod |
| `levelup` | Neues Level, Stat-/Skillpunkte | Bei Level-Up |
| `loot:received` | Item-Details | Bei Item-Drop |
| `metin:dropped` | Metinstein-Details | Bei Metinstein-Drop (Farmen) |
| `buff:expired` | Buff-ID | Wenn Buff-Timer abläuft |

### Metinstein-Abfarmen
| Event | Daten | Wann |
|-------|-------|------|
| `metin:progress` | Schaden am Stein, HP | Jeden Tick |
| `metin:destroyed` | Loot | Bei Zerstörung |
| `metin:next` | Nächster Stein in Queue | Nach Zerstörung |

### Dungeon
| Event | Daten | Wann |
|-------|-------|------|
| `dungeon:stage` | Aktuelle Etage, Monster | Bei Etagen-Wechsel |
| `dungeon:boss` | Boss-Daten | Bei Boss-Start |
| `dungeon:completed` | Loot-Übersicht | Bei Abschluss |
| `dungeon:failed` | Grund (Tod) | Bei Scheitern |

### Marktplatz
| Event | Daten | Wann |
|-------|-------|------|
| `market:sold` | Item, Preis, Gebühr | Wenn eigenes Item gekauft wurde |
| `market:expired` | Item | Wenn Angebot abgelaufen |

### Handel
| Event | Daten | Wann |
|-------|-------|------|
| `trade:request` | Von wem, Angebot | Bei Handelsanfrage |
| `trade:updated` | Neuer Stand | Bei Änderung im Handelsfenster |
| `trade:completed` | Erhaltene Items | Bei Abschluss |
| `trade:cancelled` | Grund | Bei Abbruch |

### System
| Event | Daten | Wann |
|-------|-------|------|
| `quest:completed` | Quest-Details, Belohnung | Bei Quest-Abschluss |
| `achievement:unlocked` | Achievement, Belohnung | Bei Achievement |
| `notification` | Nachricht | Allgemeine Benachrichtigung |

## Events: Client → Server

| Event | Daten | Beschreibung |
|-------|-------|-------------|
| `action:start` | Action-Typ, Zone, Loadout | Idle-Aktion starten |
| `action:stop` | - | Idle-Aktion stoppen |
| `equip:item` | Inventory-ID, Slot | Item ausrüsten |
| `unequip:item` | Slot | Item ablegen |
| `upgrade:item` | Inventory-ID, Schutz-Item | Item upgraden |
| `enchant:item` | Inventory-ID, Adder/Switcher | Item verzaubern/verstärken |
| `skill:assign` | Skill-ID, Punkte | Skillpunkte verteilen |
| `skill:read_book` | Skill-ID | Fertigkeitsbuch lesen |
| `skill:use_soulstone` | Skill-ID | Seelenstein nutzen |
| `stat:assign` | Stat-Typ, Punkte | Statpunkte verteilen |
| `market:list` | Inventory-ID, Preis | Item im Marktplatz listen |
| `market:buy` | Listing-ID | Item kaufen |
| `market:cancel` | Listing-ID | Angebot zurückziehen |
| `trade:send` | Target-Character, Items, Yang | Handelsanfrage |
| `trade:confirm` | Trade-ID | Handel bestätigen |
| `trade:cancel` | Trade-ID | Handel abbrechen |
| `npc:buy` | NPC-ID, Item-ID, Menge | Beim NPC kaufen |
| `npc:sell` | Inventory-ID, Menge | An NPC verkaufen |
| `biologist:deliver` | - | Items beim Biologen abgeben |
| `alchemy:craft` | Splitter-Menge | Drachenstein craften |
| `dragon_stone:equip` | Inventory-ID, Slot | Drachenstein einsetzen |
| `horse:feed` | Medal-Menge | Pferd leveln |
| `heartbeat` | - | Keep-alive (alle 30s) |

## Rooms / Namespaces

```
/game          - Haupt-Namespace für Spiellogik
  room:zone:{id}   - Alle Spieler in einem Gebiet (für späteres Feature)
  room:trade:{id}  - Zwei Spieler im Handel
```

## Reconnect & Offline-Übergang

1. **Disconnect erkannt** (kein Heartbeat > 60s)
2. Server startet **Offline-Timer**
3. Idle-Aktion läuft weiter im Redis (max 8h)
4. Bei **Reconnect**: Server sendet aktuellen Stand aus Redis
5. Bei **neuem Login nach 8h+**: Offline-Berechnung → Report

## Skalierung

- Socket.IO mit **Redis Adapter** für Multi-Server (falls nötig)
- Sticky Sessions via Reverse Proxy
- Heartbeat reduziert auf 30s um Connections zu schonen
- Tick-Events nur senden wenn Client verbunden (Offline → kein Senden, nur Redis-Update)

## Festgelegt
- **Socket.IO** als WebSocket-Lib
- **Auth-Token** bei Verbindungsaufbau validieren
- **Heartbeat** alle 30s
- **Offline nach 60s** ohne Heartbeat
- **Redis Adapter** für Skalierung vorbereitet

## Offene Punkte
- [ ] Max gleichzeitige Verbindungen testen (ARM-Server Limits)
- [ ] Tick-Event Throttling bei vielen Spielern
- [ ] Kompression für WebSocket-Nachrichten?
