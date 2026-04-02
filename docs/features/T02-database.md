# T2: Datenbank-Schema

## Übersicht
PostgreSQL als persistente Hauptdatenbank, Redis für heißen Spielzustand. Das Schema deckt alle definierten Kernfeatures ab.

## PostgreSQL - Tabellen

---

### Auth & Account

#### `accounts`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | Account-ID |
| email | VARCHAR UNIQUE | Email-Adresse |
| password_hash | VARCHAR NULL | Bcrypt-Hash (NULL bei reinem OAuth) |
| email_verified | BOOLEAN | Email bestätigt? |
| role | ENUM | 'player', 'admin' |
| created_at | TIMESTAMP | Erstellungszeitpunkt |
| last_login | TIMESTAMP | Letzter Login |

#### `auth_providers`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| account_id | UUID FK → accounts | |
| provider | VARCHAR | 'google', 'discord' |
| provider_id | VARCHAR | ID beim Provider |
| created_at | TIMESTAMP | |

UNIQUE(provider, provider_id)

---

### Charakter

#### `characters`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | Charakter-ID |
| account_id | UUID FK → accounts | |
| name | VARCHAR UNIQUE | Charaktername |
| class | ENUM | 'warrior', 'ninja', 'sura', 'shaman' |
| gender | ENUM | 'male', 'female' |
| kingdom | ENUM | 'shinsoo', 'chunjo', 'jinno' |
| skill_path | ENUM NULL | Skill-Pfad (NULL bis Level 5) |
| level | INT | 1-99 |
| xp | BIGINT | Aktuelle XP |
| yang | BIGINT | Yang-Währung |
| dragon_coins | INT | Drachenmünzen (Premium) |
| stat_points | INT | Unverteilte Statpunkte |
| skill_points | INT | Unverteilte Skillpunkte |
| vit | INT | Vitalität |
| int_ | INT | Intelligenz |
| str | INT | Stärke |
| dex | INT | Geschick |
| hp | INT | Aktuelle HP |
| max_hp | INT | Maximale HP |
| created_at | TIMESTAMP | |

---

### Inventar & Equipment

#### `items`
Stammdaten aller Item-Typen (vom Admin befüllt).

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | Item-Typ-ID |
| name | VARCHAR | Item-Name |
| type | ENUM | 'weapon', 'armor', 'helmet', 'shield', 'bracelet', 'shoes', 'necklace', 'earring', 'consumable', 'material', 'metin_stone', 'dragon_shard', 'dragon_stone', 'ticket', 'book', 'quest_item', 'fishing', 'mining', 'horse_medal' |
| subtype | VARCHAR NULL | Weitere Klassifizierung |
| class_restriction | ENUM[] NULL | Welche Klassen es tragen können |
| level_requirement | INT | Mindestlevel |
| stackable | BOOLEAN | Stapelbar? |
| base_stats | JSONB | Basiswerte (ATK, DEF, etc.) |
| description | TEXT | Beschreibung |
| icon | VARCHAR | Icon-Referenz (Metin2 Icon DB) |
| npc_sell_price | INT NULL | Verkaufspreis beim NPC |
| npc_buy_price | INT NULL | Kaufpreis beim NPC |

#### `inventory`
Spieler-Inventar: Jede Zeile = 1 Item-Stack oder 1 einzigartiges Item.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| character_id | UUID FK → characters | |
| item_id | INT FK → items | Item-Typ |
| quantity | INT | Menge (1 bei Equipment) |
| upgrade_level | INT DEFAULT 0 | +0 bis +9 |
| bonuses | JSONB NULL | Zufällige Boni [{type, value}] |
| buff_remaining | INT NULL | Rest-Kontingent (Sekunden/HP) |
| slot_index | INT NULL | Position im Inventar |
| created_at | TIMESTAMP | |

#### `equipment`
Aktuell ausgerüstete Items pro Charakter.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| slot | ENUM | 'weapon', 'armor', 'helmet', 'shield', 'bracelet', 'shoes', 'necklace', 'earring' |
| inventory_id | UUID FK → inventory | Verweis auf Inventar-Item |

PK(character_id, slot)

#### `inventory_config`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| max_slots | INT | Aktuelle Inventar-Größe |

---

### Skills

#### `character_skills`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| character_id | UUID FK → characters | |
| skill_id | INT FK → skills | |
| level | INT | 0-20 (Normal) |
| tier | ENUM | 'normal', 'master', 'grand_master', 'perfect' |
| tier_progress | INT | Fortschritt innerhalb der Tier (M1-M10, G1-G10) |
| book_cooldown_until | TIMESTAMP NULL | Wann nächstes Buch gelesen werden kann |

#### `skills`
Stammdaten aller Skills.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| name | VARCHAR | Skill-Name |
| class | ENUM | Klasse |
| path | VARCHAR | Skill-Pfad |
| type | ENUM | 'active', 'passive', 'buff' |
| description | TEXT | |
| effects | JSONB | Effekte pro Stufe |

---

### Pferd

#### `horses`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| level | INT | 1-30 |
| medals_collected | INT | Gesammelte Medaillen für nächstes Level |

---

### Dungeons

#### `dungeon_cooldowns`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | |
| dungeon_id | INT FK → dungeons | |
| available_at | TIMESTAMP | Wann wieder betretbar |

PK(character_id, dungeon_id)

#### `dungeons`
Stammdaten.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| name | VARCHAR | |
| level_requirement | INT | |
| requires_ticket | BOOLEAN | |
| ticket_item_id | INT FK → items NULL | |
| cooldown_seconds | INT | |
| stages | INT | Anzahl Etagen |
| boss_id | INT FK → monsters | |

---

### Monster & Gebiete

#### `zones`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| name | VARCHAR | Gebietsname |
| level_min | INT | |
| level_max | INT | |
| metin_drop_chance | DECIMAL | Chance auf Metinstein beim Farmen |

#### `monsters`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| name | VARCHAR | |
| level | INT | |
| hp | INT | |
| attack | INT | |
| defense | INT | |
| xp_reward | INT | XP beim Leveln |
| yang_reward | INT | Yang beim Farmen |
| zone_id | INT FK → zones | |
| is_boss | BOOLEAN | |

#### `drop_tables`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| source_type | ENUM | 'monster', 'metin_stone', 'dungeon_boss' |
| source_id | INT | ID des Monsters/Metins/Bosses |
| item_id | INT FK → items | |
| drop_chance | DECIMAL | 0.0 - 1.0 |
| min_quantity | INT | |
| max_quantity | INT | |

---

### Metinsteine (als Inventar-Items)

#### `metin_stones`
Stammdaten der Metinstein-Typen.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INT PK | |
| name | VARCHAR | z.B. "Metin der Schwärze" |
| level | INT | |
| hp | INT | |
| damage | INT | Schaden am Spieler |
| zone_id | INT FK → zones | In welchem Gebiet droppbar |
| item_id | INT FK → items | Zugehöriges Inventar-Item |

---

### Marktplatz

#### `marketplace_listings`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| seller_id | UUID FK → characters | |
| inventory_id | UUID FK → inventory | |
| price | BIGINT | Yang-Preis |
| quantity | INT | Menge (bei stackbaren) |
| created_at | TIMESTAMP | |
| expires_at | TIMESTAMP NULL | Ablaufdatum |

#### `marketplace_history`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| item_id | INT FK → items | |
| seller_id | UUID FK → characters | |
| buyer_id | UUID FK → characters | |
| price | BIGINT | |
| quantity | INT | |
| fee | BIGINT | Gebühr |
| sold_at | TIMESTAMP | |

---

### Quests & Achievements

#### `daily_quests`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| character_id | UUID FK → characters | |
| quest_template_id | INT | |
| progress | INT | Aktueller Fortschritt |
| target | INT | Zielwert |
| completed | BOOLEAN | |
| date | DATE | Für welchen Tag |

#### `storyline_progress`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | |
| storyline_id | INT | |
| current_chapter | INT | Aktuelles Kapitel |
| completed | BOOLEAN | Storyline komplett abgeschlossen? |

PK(character_id, storyline_id)

#### `achievements`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | |
| achievement_id | INT | |
| progress | BIGINT | Aktueller Fortschritt |
| unlocked | BOOLEAN | |
| unlocked_at | TIMESTAMP NULL | |

PK(character_id, achievement_id)

#### `active_title`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| title_id | INT | Aktiver Titel |

---

### Biologe

#### `biologist_progress`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| current_quest | INT | Aktuelle Quest-Nummer (1-18) |
| items_delivered | INT | Bereits abgegebene Items der aktuellen Quest |
| permanent_bonuses | JSONB | Kumulierte Boni {vit, int, str, dex, hp} |

---

### Drachenalchemie

#### `dragon_stone_slots`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | |
| slot | INT | 1-6 |
| inventory_id | UUID FK → inventory NULL | Eingesetzter Stein |

PK(character_id, slot)

---

### Mining & Fischen

#### `mining_fishing_stats`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| character_id | UUID FK → characters | PK |
| pickaxe_level | INT DEFAULT 0 | Spitzhacke +0 bis +9 |
| pickaxe_xp | INT | XP der Spitzhacke |
| mining_skill_tier | ENUM | 'normal', 'master', 'grand_master', 'perfect' |
| mining_skill_progress | INT | |
| rod_level | INT DEFAULT 0 | Angel +0 bis +20 |
| rod_xp | INT | XP der Angel |

---

### Direkthandel

#### `trades`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | UUID PK | |
| player_a | UUID FK → characters | |
| player_b | UUID FK → characters | |
| status | ENUM | 'pending', 'confirmed_a', 'confirmed_b', 'completed', 'cancelled' |
| yang_a | BIGINT | Yang von Spieler A |
| yang_b | BIGINT | Yang von Spieler B |
| created_at | TIMESTAMP | |
| completed_at | TIMESTAMP NULL | |

#### `trade_items`
| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| trade_id | UUID FK → trades | |
| from_character | UUID FK → characters | |
| inventory_id | UUID FK → inventory | |

---

### Admin-Konfiguration

#### `game_config`
Key-Value Store für alle konfigurierbaren Werte.

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| key | VARCHAR PK | z.B. 'marketplace_fee_percent' |
| value | JSONB | Wert |
| category | VARCHAR | Gruppierung (z.B. 'marketplace', 'combat', 'drops') |
| description | TEXT | Beschreibung für Admin-Panel |
| updated_at | TIMESTAMP | |
| updated_by | UUID FK → accounts NULL | Welcher Admin hat es geändert |

---

## Redis - Datenstruktur

Redis hält den "heißen" Zustand der nicht bei jedem Tick in PostgreSQL geschrieben werden muss.

### Aktive Idle-Sessions
```
idle:session:{character_id} = {
  action: "leveling" | "farming" | "mining" | "fishing" | "metin_stones",
  zone_id: 5,
  started_at: timestamp,
  loadout: { potions: [...], buffs: [...] },
  current_hp: 850,
  current_monster_hp: 200,
  xp_gained: 12500,
  loot: [...],
  tick_count: 142
}
TTL: 9h (8h Offline-Max + 1h Buffer)
```

### Cooldowns
```
cooldown:book:{character_id}:{skill_id} = timestamp
cooldown:dungeon:{character_id}:{dungeon_id} = timestamp
```

### Online-Status
```
online:{character_id} = last_heartbeat_timestamp
TTL: 60s (Auto-Expire wenn kein Heartbeat)
```

### Buff-Timer
```
buffs:{character_id} = [
  { item_id: 12, remaining_seconds: 1800 },
  { item_id: 15, remaining_seconds: 600 }
]
```

---

## Persistierung Redis → PostgreSQL

- Alle **30 Sekunden**: Idle-Session-Fortschritt wird in PostgreSQL geschrieben
- Bei **Aktion-Ende**: Sofort persistieren (XP, Items, etc.)
- Bei **Server-Neustart**: Letzer persistierter Stand aus PostgreSQL laden, max 30s Verlust

## Festgelegt
- **ORM / Migrations**: Drizzle ORM (TypeScript-native, SQL-nah)

## Offene Punkte
- [ ] Indizes definieren (Performance-kritische Queries)
- [ ] Backup-Strategie für PostgreSQL
- [ ] Redis Persistence Config (RDB/AOF)
