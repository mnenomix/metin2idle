import {
  pgTable,
  uuid,
  varchar,
  boolean,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const accountRoleEnum = pgEnum("account_role", ["player", "admin"]);

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }),
  name: varchar("name", { length: 255 }),
  image: varchar("image", { length: 255 }),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  role: accountRoleEnum("role").notNull().default("player"),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  lastLogin: timestamp("last_login", { mode: "date" }),
});
