export const AccountRole = {
  PLAYER: "player",
  ADMIN: "admin",
} as const;
export type AccountRole = (typeof AccountRole)[keyof typeof AccountRole];

export const AuthProvider = {
  EMAIL: "email",
  GOOGLE: "google",
  DISCORD: "discord",
} as const;
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];

export const Kingdom = {
  SHINSOO: "shinsoo",
  CHUNJO: "chunjo",
  JINNO: "jinno",
} as const;
export type Kingdom = (typeof Kingdom)[keyof typeof Kingdom];

export const CharacterClass = {
  WARRIOR: "warrior",
  NINJA: "ninja",
  SURA: "sura",
  SHAMAN: "shaman",
} as const;
export type CharacterClass =
  (typeof CharacterClass)[keyof typeof CharacterClass];

export const Gender = {
  MALE: "male",
  FEMALE: "female",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];
