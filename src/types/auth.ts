export type AuthRole = 'caregiver' | 'senior' | 'guardian' | 'child';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: AuthRole;
  avatar: string;
  activeParentId?: string;
  provider: 'google' | 'mock';
}

export interface LoginRequest {
  provider: 'google';
  preset?: 'caregiver_priya' | 'senior_ramesh' | 'custom';
  customData?: {
    name: string;
    email: string;
    role: AuthRole;
  };
}

export interface AuthSessionResponse {
  authenticated: boolean;
  user: AuthUser | null;
}
