'use client';

import React, { useState } from 'react';
import { SeniorProfile } from '@/types/care';

interface AddParentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onParentAdded: (parent: SeniorProfile) => void;
}

const COMMON_CONDITIONS = [
  'Hypertension',
  'Type 2 Diabetes',
  'Arthritis / Knee Pain',
  'Heart Health',
  'Asthma / Respiratory',
  'Mild Memory Care',
];

export function AddParentModal({ isOpen, onClose, onParentAdded }: AddParentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    preferredName: '',
    relation: 'Mother' as 'Father' | 'Mother' | 'Grandfather' | 'Grandmother' | 'In-Law' | 'Other',
    age: 70,
    city: 'New Delhi',
    locality: 'Janakpuri',
    conditions: ['Hypertension'] as string[],
    allergies: 'None',
    primaryDoctorName: 'Dr. Anand Verma',
    primaryDoctorClinic: 'Delhi Heart & Wellness Center',
    primaryDoctorPhone: '+91 98111 23456',
    emergencyContactName: 'Priya Sharma (Daughter)',
    emergencyContactRelation: 'Daughter',
    emergencyContactPhone: '+91 98765 43210',
  });

  if (!isOpen) return null;

  const toggleCondition = (cond: string) => {
    if (formData.conditions.includes(cond)) {
      setFormData({ ...formData, conditions: formData.conditions.filter((c) => c !== cond) });
    } else {
      setFormData({ ...formData, conditions: [...formData.conditions, cond] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.preferredName.trim()) {
      setErrorMsg('Please enter parent name and preferred name.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = {
        name: formData.name.trim(),
        preferredName: formData.preferredName.trim(),
        relation: formData.relation,
        age: Number(formData.age),
        city: formData.city.trim(),
        locality: formData.locality.trim(),
        conditions: formData.conditions,
        allergies: formData.allergies ? [formData.allergies.trim()] : [],
        primaryDoctorName: formData.primaryDoctorName.trim() || undefined,
        primaryDoctorClinic: formData.primaryDoctorClinic.trim() || undefined,
        primaryDoctorPhone: formData.primaryDoctorPhone.trim() || undefined,
        emergencyContactName: formData.emergencyContactName.trim(),
        emergencyContactRelation: formData.emergencyContactRelation.trim(),
        emergencyContactPhone: formData.emergencyContactPhone.trim(),
      };

      const res = await fetch('/api/v1/parents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Failed to add parent profile');
      }

      onParentAdded(data.data);
      onClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to register parent';
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-outline-variant/40 my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">person_add</span>
            </div>
            <div>
              <h2 className="font-headline font-bold text-lg text-on-surface">Add Parent Profile</h2>
              <p className="text-xs text-on-surface-variant">
                Register an ageing parent to activate their companion hub &amp; monitoring.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {errorMsg && (
          <div className="mt-4 p-3 rounded-xl bg-error-container text-on-error-container text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Parent&apos;s Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Kavita Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Preferred Name / Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mother, Maa, or Kavita"
                value={formData.preferredName}
                onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Relation
              </label>
              <select
                value={formData.relation}
                onChange={(e) => setFormData({ ...formData, relation: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Grandmother">Grandmother</option>
                <option value="Grandfather">Grandfather</option>
                <option value="In-Law">In-Law</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Age
              </label>
              <input
                type="number"
                min={40}
                max={120}
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 65 })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Locality &amp; City
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Janakpuri, Delhi"
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Medical Conditions Selector */}
          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
              Medical Conditions (Select all that apply)
            </label>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_CONDITIONS.map((cond) => {
                const isSelected = formData.conditions.includes(cond);
                return (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => toggleCondition(cond)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-on-primary shadow-xs'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {cond}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Doctor & Emergency Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-outline-variant/30">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Primary Doctor &amp; Clinic
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Verma (Delhi Heart Clinic)"
                value={formData.primaryDoctorName}
                onChange={(e) => setFormData({ ...formData, primaryDoctorName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Primary Emergency Phone (WhatsApp/SMS)
              </label>
              <input
                type="text"
                required
                placeholder="+91 98765 43210"
                value={formData.emergencyContactPhone}
                onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-3 border-t border-outline-variant/30">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl bg-surface-container text-on-surface-variant font-bold text-xs hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-on-primary font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? 'Registering Parent...' : 'Save & Register Parent'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
