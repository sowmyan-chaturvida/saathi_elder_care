'use client';

import React, { Suspense, useState } from 'react';
import { useAuth } from '@/client/context/AuthContext';
import { useSearchParams } from 'next/navigation';

function LoginContent() {
  const { loginWithGoogle, loading } = useAuth();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/family';

  const [selectedRole, setSelectedRole] = useState<'caregiver' | 'senior'>('caregiver');
  const [customMode, setCustomMode] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');

  const handleSignIn = async (preset?: 'caregiver_priya' | 'senior_ramesh' | 'custom') => {
    if (preset === 'custom') {
      if (!customName.trim() || !customEmail.trim()) return;
      await loginWithGoogle('custom', {
        name: customName.trim(),
        email: customEmail.trim(),
        role: selectedRole,
      });
      return;
    }

    if (preset) {
      await loginWithGoogle(preset);
      return;
    }

    // Default based on selected role
    if (selectedRole === 'senior') {
      await loginWithGoogle('senior_ramesh');
    } else {
      await loginWithGoogle('caregiver_priya');
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-on-primary shadow-lg shadow-primary/20 mb-3 transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
          </div>
          <h1 className="font-headline font-extrabold text-3xl text-primary tracking-tight">
            Saathi Care
          </h1>
          <p className="text-sm text-on-surface-variant font-medium mt-1">
            Empathetic Companion &amp; Real-Time Family Care Platform
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-xl border border-outline-variant/40 backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="font-headline font-bold text-xl text-on-surface">
              Sign In to Your Account
            </h2>
            <p className="text-xs text-on-surface-variant mt-1">
              Connect securely with Google Single Sign-On to safeguard your family&apos;s peace of mind.
            </p>
          </div>

          {/* Role Choice Selector */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-2xl border border-outline-variant/30">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('caregiver');
                  setCustomMode(false);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === 'caregiver'
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-base">diversity_1</span>
                <span>Child / Guardian</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('senior');
                  setCustomMode(false);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRole === 'senior'
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-base">elderly</span>
                <span>Senior / Parent</span>
              </button>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-1.5 px-1">
              {selectedRole === 'caregiver'
                ? '✓ Children & guardians get access to the Family Portal, vitals log, prescription manager & scam reports.'
                : '✓ Seniors receive oversized high-contrast controls, voice companion & instant emergency SOS.'}
            </p>
          </div>

          {!customMode ? (
            <>
              {/* Primary Google Login Button */}
              <button
                onClick={() => handleSignIn()}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline font-bold text-sm border border-outline-variant/50 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs disabled:opacity-50"
              >
                {/* Official Google 'G' SVG Logo */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>
                  {loading
                    ? 'Connecting to Google...'
                    : `Continue with Google as ${selectedRole === 'caregiver' ? 'Guardian' : 'Senior'}`}
                </span>
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/40" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-surface-container-lowest px-2 text-on-surface-variant font-bold">
                    Or Quick Demo Switch
                  </span>
                </div>
              </div>

              {/* Fast 1-Click Profile Cards for Instant Testing */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleSignIn('caregiver_priya')}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 text-left transition-all hover:translate-x-0.5 cursor-pointer"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY"
                    alt="Priya Sharma"
                    className="w-10 h-10 rounded-full object-cover border border-primary/20 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline font-bold text-xs text-on-surface">Priya Sharma</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed-variant">
                        Guardian
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      priya.sharma@gmail.com • Manages Father Ramesh
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSignIn('senior_ramesh')}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 text-left transition-all hover:translate-x-0.5 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
                    alt="Ramesh Sharma"
                    className="w-10 h-10 rounded-full object-cover border border-secondary/20 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline font-bold text-xs text-on-surface">Ramesh Sharma</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed">
                        Senior (Age 73)
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      ramesh.sharma73@gmail.com • Janakpuri, Delhi
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                </button>
              </div>

              {/* Custom Sign In Toggle */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setCustomMode(true)}
                  className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  + Sign in as a New Family Guardian
                </button>
              </div>
            </>
          ) : (
            /* Custom Account Form */
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn('custom');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                  Google Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. vikram@gmail.com"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCustomMode(false)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container text-on-surface-variant font-bold text-xs hover:bg-surface-container-high transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Continue to Dashboard'}
                </button>
              </div>
            </form>
          )}

          {/* Security & Compliance Footer Badge */}
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-[11px] text-on-surface-variant">
            <span className="flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
              SOC 2 Type II Certified
            </span>
            <span>256-Bit PII Redacted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
            progress_activity
          </span>
          Loading sign-in portal...
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
