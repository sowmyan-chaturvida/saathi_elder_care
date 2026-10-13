export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night';

export type MealRelation = 'before_food' | 'after_food' | 'with_food' | 'anytime';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  timeSlot: TimeSlot;
  scheduledTime: string; // e.g. "08:00 AM"
  mealRelation: MealRelation;
  instructionsEnglish: string;
  takenToday: boolean;
  takenAt?: string; // ISO string
  notes?: string;
  colorTag: string; // e.g. "#E06A3B"
}

export interface RoutineItem {
  id: string;
  title: string;
  time: string;
  icon: string;
  completed: boolean;
  category: 'wellness' | 'exercise' | 'hydration' | 'leisure';
}

export interface SeniorProfile {
  id: string;
  name: string;
  preferredName: string;
  age: number;
  city: string;
  locality: string;
  languagePreference: 'english';
  conditions: string[];
  allergies: string[];
  emergencyContacts: EmergencyContact[];
  primaryDoctor?: {
    name: string;
    clinic: string;
    phone: string;
  };
}

export interface EmergencyContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  isPrimary: boolean;
  notifyOnSos: boolean;
  notifyOnMissedMed: boolean;
}

export type ActivityType = 
  | 'medication_taken' 
  | 'medication_missed' 
  | 'companion_chat' 
  | 'sos_triggered' 
  | 'sos_resolved' 
  | 'scam_checked' 
  | 'routine_completed';

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: ActivityType;
  title: string;
  description: string;
  severity: 'info' | 'success' | 'warning' | 'critical';
  metadata?: Record<string, unknown>;
}

export interface SosAlert {
  id: string;
  active: boolean;
  triggeredAt: string;
  triggerSource: 'senior_button' | 'fall_sensor' | 'voice_trigger';
  resolvedAt?: string;
  resolvedBy?: string;
  resolutionNote?: string;
}

export interface VitalsLog {
  id: string;
  timestamp: string;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bloodSugar: number;
  bloodSugarType: 'fasting' | 'post_meal' | 'random';
  pulse?: number;
  recordedBy: string;
  notes?: string;
}

export interface FamilySummary {
  senior: SeniorProfile;
  activeSos: SosAlert | null;
  adherencePercentage: number;
  medicationsTakenCount: number;
  totalMedicationsCount: number;
  medications: Medication[];
  routines: RoutineItem[];
  vitals?: VitalsLog[];
  recentActivities: ActivityLog[];
  lastCheckinTime: string;
}

