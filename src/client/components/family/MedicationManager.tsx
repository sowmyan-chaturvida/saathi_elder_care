'use client';

import React, { useState } from 'react';
import { Pill, Plus, Clock, Utensils, X, Check } from 'lucide-react';
import { Medication } from '@/types/care';
import { postAddMedication } from '@/client/services/apiClient';

interface MedicationManagerProps {
  medications: Medication[];
  onMedicationAdded: () => void;
}

export function MedicationManager({ medications, onMedicationAdded }: MedicationManagerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    dosage: '1 Tablet',
    timeSlot: 'morning',
    scheduledTime: '09:00 AM',
    mealRelation: 'after_food',
    instructionsHindi: 'Nashte ke baad taaza paani ke saath',
    instructionsEnglish: 'Take with water after breakfast',
    colorTag: '#0D9488',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);
    try {
      await postAddMedication(formData);
      setModalOpen(false);
      setFormData({
        name: '',
        dosage: '1 Tablet',
        timeSlot: 'morning',
        scheduledTime: '09:00 AM',
        mealRelation: 'after_food',
        instructionsHindi: 'Nashte ke baad taaza paani ke saath',
        instructionsEnglish: 'Take with water after breakfast',
        colorTag: '#0D9488',
      });
      onMedicationAdded();
    } catch (err) {
      console.error('Failed to add prescription:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Prescriptions & Schedule</h3>
          <p className="text-slate-500 text-xs">Manage reminders and meal instructions remotely</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-tactile bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-semibold rounded-xl flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Medicine</span>
        </button>
      </div>

      <div className="space-y-3">
        {medications.map((med) => (
          <div
            key={med.id}
            className="p-4 rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundColor: `${med.colorTag}15`, color: med.colorTag }}
              >
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">{med.name}</h4>
                  <span className="text-xs bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                    {med.dosage}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5" />
                    {med.scheduledTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5" />
                    {med.instructionsHindi}
                  </span>
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right">
              {med.takenToday ? (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-300">
                  Taken Today
                </span>
              ) : (
                <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-300">
                  Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Medication Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-slate-300 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-teal-100 text-teal-700 rounded-xl">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Add New Prescription</h3>
                <p className="text-xs text-slate-500">Will immediately sync to Papa&apos;s companion view</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Medicine Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Telmisartan 40mg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Dosage</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1 Tablet"
                    value={formData.dosage}
                    onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Scheduled Time</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 08:30 AM"
                    value={formData.scheduledTime}
                    onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="night">Night</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Meal Relation</label>
                  <select
                    value={formData.mealRelation}
                    onChange={(e) => setFormData({ ...formData, mealRelation: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    <option value="after_food">After Food (खाने के बाद)</option>
                    <option value="before_food">Before Food (खाली पेट)</option>
                    <option value="with_food">With Food (खाने के साथ)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Instructions for Senior (Hindi/Vernacular)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nashte ke 15 minute baad paani se"
                  value={formData.instructionsHindi}
                  onChange={(e) => setFormData({ ...formData, instructionsHindi: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn-tactile flex-1 bg-slate-200 text-slate-800 text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-tactile flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold"
                >
                  <Check className="w-4 h-4 mr-1" />
                  <span>{isSubmitting ? 'Saving...' : 'Add Prescription'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
