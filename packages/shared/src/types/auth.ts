import type { AccountRole } from "../enums/index.js";

export interface Account {
  id: string;
  email: string;
  emailVerified: boolean;
  role: AccountRole;
  createdAt: string;
  lastLogin: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Account;
}
