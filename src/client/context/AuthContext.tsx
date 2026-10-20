'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthRole, AuthUser } from '@/types/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  isCaregiver: boolean;
  isSenior: boolean;
  loginWithGoogle: (
    preset?: 'caregiver_priya' | 'senior_ramesh' | 'custom',
    customData?: { name: string; email: string; role: AuthRole }
  ) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshSession = async () => {
    try {
      const res = await fetch('/api/v1/auth/session', { cache: 'no-store' });
      const data = await res.json();
      if (data.authenticated && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.error('Failed to check session', e);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  const loginWithGoogle = async (
    preset: 'caregiver_priya' | 'senior_ramesh' | 'custom' = 'caregiver_priya',
    customData?: { name: string; email: string; role: AuthRole }
  ) => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider: 'google',
          preset,
          customData,
        }),
      });

      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        if (data.user.role === 'senior') {
          router.push('/senior');
        } else {
          router.push('/family');
        }
      }
    } catch (e) {
      console.error('Login failed', e);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await fetch('/api/v1/auth/logout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (e) {
      console.error('Logout error', e);
    } finally {
      setLoading(false);
    }
  };

  const isCaregiver = !!(user && (user.role === 'caregiver' || user.role === 'guardian' || user.role === 'child'));
  const isSenior = !!(user && user.role === 'senior');

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        isCaregiver,
        isSenior,
        loginWithGoogle,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
