'use client';

import React, { useEffect, useState } from 'react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { PeaceOfMindHeader } from '@/client/components/family/PeaceOfMindHeader';
import { ActivityTimeline } from '@/client/components/family/ActivityTimeline';
import { MedicationManager } from '@/client/components/family/MedicationManager';
import { Soc2AuditViewer } from '@/client/components/family/Soc2AuditViewer';

export default function FamilyPage() {
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const loadData = async () => {
    try {
      const data = await fetchFamilySummary();
      setSummary(data);
    } catch (e) {
      console.error('Failed to load family data:', e);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000); // Poll every 5s for real-time peace of mind
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {summary && (
          <>
            <PeaceOfMindHeader summary={summary} onRefresh={loadData} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Live Activity Timeline */}
              <ActivityTimeline activities={summary.recentActivities} />

              {/* Right Column: Prescriptions & Schedule Manager */}
              <MedicationManager
                medications={summary.medications}
                onMedicationAdded={loadData}
              />
            </div>
          </>
        )}
      </main>

      <Soc2AuditViewer isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
