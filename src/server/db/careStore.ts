import { ActivityLog, FamilySummary, Medication, RoutineItem, SeniorProfile, SosAlert } from '@/types/care';
import { INITIAL_ACTIVITIES, INITIAL_MEDICATIONS, INITIAL_ROUTINES, INITIAL_SENIOR } from './seedData';

class CareStore {
  private senior: SeniorProfile = { ...INITIAL_SENIOR };
  private medications: Medication[] = JSON.parse(JSON.stringify(INITIAL_MEDICATIONS));
  private routines: RoutineItem[] = JSON.parse(JSON.stringify(INITIAL_ROUTINES));
  private activities: ActivityLog[] = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));
  private activeSos: SosAlert | null = null;
  private lastCheckinTime: string = new Date(Date.now() - 15 * 60 * 1000).toISOString(); // 15 mins ago

  public getSeniorProfile(): SeniorProfile {
    return this.senior;
  }

  public getMedications(): Medication[] {
    return this.medications;
  }

  public markMedicationTaken(id: string): { medication: Medication; previousState: boolean } | null {
    const med = this.medications.find(m => m.id === id);
    if (!med) return null;

    const previousState = med.takenToday;
    med.takenToday = true;
    med.takenAt = new Date().toISOString();
    this.lastCheckinTime = new Date().toISOString();

    // Add activity log
    this.addActivity({
      type: 'medication_taken',
      title: 'Medication Taken',
      description: `${this.senior.preferredName} marked ${med.name} as taken.`,
      severity: 'success',
      metadata: { medicationId: id, medicationName: med.name }
    });

    return { medication: med, previousState };
  }

  public addMedication(newMed: Omit<Medication, 'id' | 'takenToday'>): Medication {
    const id = `med_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const med: Medication = {
      ...newMed,
      id,
      takenToday: false,
    };
    this.medications.push(med);

    this.addActivity({
      type: 'routine_completed',
      title: 'Prescription Added',
      description: `New medication ${med.name} (${med.scheduledTime}) was added to schedule.`,
      severity: 'info',
    });

    return med;
  }

  public getActiveSos(): SosAlert | null {
    return this.activeSos;
  }

  public triggerSos(source: 'senior_button' | 'fall_sensor' | 'voice_trigger' = 'senior_button'): SosAlert {
    const alert: SosAlert = {
      id: `sos_${Date.now()}`,
      active: true,
      triggeredAt: new Date().toISOString(),
      triggerSource: source,
    };
    this.activeSos = alert;

    this.addActivity({
      type: 'sos_triggered',
      title: 'EMERGENCY SOS TRIGGERED',
      description: `Emergency alert activated by ${this.senior.preferredName} via ${source}. Loud siren sounded and family notified!`,
      severity: 'critical',
      metadata: { sosId: alert.id, source }
    });

    return alert;
  }

  public resolveSos(resolvedBy: string, note?: string): SosAlert | null {
    if (!this.activeSos) return null;

    const resolvedAlert: SosAlert = {
      ...this.activeSos,
      active: false,
      resolvedAt: new Date().toISOString(),
      resolvedBy,
      resolutionNote: note || 'Resolved by family caregiver.',
    };

    this.activeSos = null;

    this.addActivity({
      type: 'sos_resolved',
      title: 'Emergency SOS Resolved',
      description: `Emergency alert resolved by ${resolvedBy}: "${resolvedAlert.resolutionNote}".`,
      severity: 'success',
      metadata: { sosId: resolvedAlert.id }
    });

    return resolvedAlert;
  }

  public addActivity(params: Omit<ActivityLog, 'id' | 'timestamp'>): ActivityLog {
    const log: ActivityLog = {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      ...params,
    };
    this.activities.unshift(log); // latest first
    return log;
  }

  public getActivities(limit = 20): ActivityLog[] {
    return this.activities.slice(0, limit);
  }

  public getFamilySummary(): FamilySummary {
    const total = this.medications.length;
    const taken = this.medications.filter(m => m.takenToday).length;
    const adherence = total > 0 ? Math.round((taken / total) * 100) : 100;

    return {
      senior: this.senior,
      activeSos: this.activeSos,
      adherencePercentage: adherence,
      medicationsTakenCount: taken,
      totalMedicationsCount: total,
      medications: this.medications,
      routines: this.routines,
      recentActivities: this.activities.slice(0, 15),
      lastCheckinTime: this.lastCheckinTime,
    };
  }
}

const globalForCareStore = global as unknown as { careStore: CareStore };
export const careStore = globalForCareStore.careStore || new CareStore();
if (process.env.NODE_ENV !== 'production') globalForCareStore.careStore = careStore;
