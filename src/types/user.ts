import type { UserRole } from "../constants/enums.js";

export interface User {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Agent extends User {
  role: typeof import("../constants/enums.js").UserRole.AGENT;
  employeeId: string;
  assignedCity: string;
  deviceId: string | null;
  pushToken: string | null;
  lastLocationLat: number | null;
  lastLocationLng: number | null;
  lastLocationAt: string | null;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  deviceId: string;
}

export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}
