import 'server-only';
import { ActivityLog, FamilySummary, Medication, RoutineItem, SeniorProfile, SosAlert, VitalsLog } from '@/types/care';
import { INITIAL_ACTIVITIES, INITIAL_MEDICATIONS, INITIAL_ROUTINES, INITIAL_SENIOR, INITIAL_VITALS } from './seedData';

class CareStore {
  private senior: SeniorProfile = { ...INITIAL_SENIOR };
  private medications: Medication[] = JSON.parse(JSON.stringify(INITIAL_MEDICATIONS));
  private routines: RoutineItem[] = JSON.parse(JSON.stringify(INITIAL_ROUTINES));
  private activities: ActivityLog[] = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));
  private vitals: VitalsLog[] = JSON.parse(JSON.stringify(INITIAL_VITALS));
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

    const sourceName = 
      source === 'fall_sensor' ? 'Fall Detection Sensor (Living Room / Wearable)' :
      source === 'voice_trigger' ? 'Voice Distress Trigger ("Bachao / Help")' : 'Oversized Senior SOS Button';

    const description = 
      source === 'fall_sensor'
        ? `CRITICAL: Sudden physical fall / hard impact detected by motion sensor for ${this.senior.preferredName}. Automated SOS triggered, siren sounded, and family emergency alert broadcasted immediately!`
        : `Emergency alert activated by ${this.senior.preferredName} via ${sourceName}. Loud siren sounded and family notified!`;

    this.addActivity({
      type: 'sos_triggered',
      title: source === 'fall_sensor' ? 'FALL DETECTED — EMERGENCY SOS' : 'EMERGENCY SOS TRIGGERED',
      description,
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

  public getVitals(): VitalsLog[] {
    return this.vitals;
  }

  public addVitalsLog(log: Omit<VitalsLog, 'id' | 'timestamp'>): VitalsLog {
    const newLog: VitalsLog = {
      id: `vit_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      ...log,
    };
    this.vitals.unshift(newLog);

    this.addActivity({
      type: 'routine_completed',
      title: 'Health Vitals Logged',
      description: `BP: ${newLog.bloodPressureSystolic}/${newLog.bloodPressureDiastolic} mmHg • Sugar: ${newLog.bloodSugar} mg/dL (${newLog.bloodSugarType}) recorded by ${newLog.recordedBy}.`,
      severity: (newLog.bloodPressureSystolic > 140 || newLog.bloodSugar > 160) ? 'warning' : 'info',
      metadata: { vitalsId: newLog.id }
    });

    return newLog;
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
      vitals: this.vitals,
      recentActivities: this.activities.slice(0, 15),
      lastCheckinTime: this.lastCheckinTime,
    };
  }
}

const globalForCareStore = global as unknown as { careStore: CareStore };
export const careStore = globalForCareStore.careStore || new CareStore();
if (process.env.NODE_ENV !== 'production') globalForCareStore.careStore = careStore;
