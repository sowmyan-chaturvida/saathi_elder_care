import { ActivityLog, Medication, RoutineItem, SeniorProfile, VitalsLog } from '@/types/care';

export const INITIAL_VITALS: VitalsLog[] = [
  {
    id: 'vit_1',
    timestamp: new Date(Date.now() - 3.5 * 3600 * 1000).toISOString(),
    bloodPressureSystolic: 122,
    bloodPressureDiastolic: 78,
    bloodSugar: 104,
    bloodSugarType: 'fasting',
    pulse: 71,
    recordedBy: 'Ramesh Chandra Sharma',
    notes: 'Morning routine check. Normal blood pressure & sugar.',
  },
  {
    id: 'vit_2',
    timestamp: new Date(Date.now() - 26 * 3600 * 1000).toISOString(),
    bloodPressureSystolic: 126,
    bloodPressureDiastolic: 82,
    bloodSugar: 138,
    bloodSugarType: 'post_meal',
    pulse: 75,
    recordedBy: 'Priya Sharma (During call check-in)',
    notes: 'Post-lunch reading yesterday.',
  },
];

export const INITIAL_SENIOR: SeniorProfile = {
  id: 'senior_ramesh_sharma',
  name: 'Ramesh Chandra Sharma',
  preferredName: 'Ramesh Uncle',
  age: 73,
  city: 'New Delhi',
  locality: 'B-Block, Janakpuri',
  languagePreference: 'english',
  conditions: ['Mild Hypertension', 'Type-2 Diabetes (Well-controlled)', 'Knee Joint Stiffness'],
  allergies: ['Penicillin'],
  emergencyContacts: [
    {
      id: 'contact_priya',
      name: 'Priya Sharma',
      relation: 'Daughter (Indiranagar, Bangalore)',
      phone: '+91 98112 45678',
      isPrimary: true,
      notifyOnSos: true,
      notifyOnMissedMed: true,
    },
    {
      id: 'contact_dr_verma',
      name: 'Dr. Anand Verma',
      relation: 'Family Physician (Janakpuri Clinic)',
      phone: '+91 98711 23456',
      isPrimary: false,
      notifyOnSos: true,
      notifyOnMissedMed: false,
    },
    {
      id: 'contact_neighbour_gupta',
      name: 'Mr. O.P. Gupta',
      relation: 'Next-door Neighbour (Flat 204)',
      phone: '+91 98101 98765',
      isPrimary: false,
      notifyOnSos: true,
      notifyOnMissedMed: false,
    }
  ],
  primaryDoctor: {
    name: 'Dr. Anand Verma',
    clinic: 'Verma Heart & Family Health Clinic, Janakpuri',
    phone: '+91 98711 23456'
  }
};

export const INITIAL_MEDICATIONS: Medication[] = [
  {
    id: 'med_amlodipine',
    name: 'Amlodipine 5mg',
    dosage: '1 Tablet',
    timeSlot: 'morning',
    scheduledTime: '08:00 AM',
    mealRelation: 'after_food',
    instructionsHindi: 'Take with warm water 15 minutes after breakfast',
    instructionsEnglish: 'Take with warm water 15 minutes after breakfast',
    takenToday: true,
    takenAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
    notes: 'Blood pressure control',
    colorTag: '#E06A3B'
  },
  {
    id: 'med_shelcal',
    name: 'Shelcal 500 (Calcium + D3)',
    dosage: '1 Tablet',
    timeSlot: 'afternoon',
    scheduledTime: '01:30 PM',
    mealRelation: 'after_food',
    instructionsHindi: 'Take with water after lunch',
    instructionsEnglish: 'Take with water after lunch',
    takenToday: false,
    notes: 'Bone strength & joint health',
    colorTag: '#0D9488'
  },
  {
    id: 'med_glycomet',
    name: 'Glycomet GP 1',
    dosage: '1 Tablet',
    timeSlot: 'night',
    scheduledTime: '08:30 PM',
    mealRelation: 'after_food',
    instructionsHindi: 'Take with water after dinner',
    instructionsEnglish: 'Take with water after dinner',
    takenToday: false,
    notes: 'Sugar management',
    colorTag: '#6366F1'
  }
];

export const INITIAL_ROUTINES: RoutineItem[] = [
  {
    id: 'rt_morning_walk',
    title: 'Morning Park Walk & Breathing Exercises',
    titleHindi: 'Morning Park Walk & Breathing Exercises (District Park)',
    time: '06:45 AM',
    icon: 'Footprints',
    completed: true,
    category: 'exercise',
  },
  {
    id: 'rt_hydration',
    title: 'Warm Water & Fenugreek Seeds',
    titleHindi: 'Warm water with soaked fenugreek seeds',
    time: '07:30 AM',
    icon: 'GlassWater',
    completed: true,
    category: 'hydration',
  },
  {
    id: 'rt_music',
    title: 'Classic Retro Songs Radio',
    titleHindi: 'Classic golden era radio songs',
    time: '04:30 PM',
    icon: 'Music',
    completed: false,
    category: 'leisure',
  },
  {
    id: 'rt_family_call',
    title: 'Evening Catch-up Call with Priya',
    titleHindi: 'Daily evening call with daughter Priya',
    time: '07:30 PM',
    icon: 'PhoneCall',
    completed: false,
    category: 'wellness',
  }
];

export const INITIAL_ACTIVITIES: ActivityLog[] = [
  {
    id: 'act_scam_1',
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 mins ago
    type: 'scam_checked',
    title: 'Suspicious Disconnection SMS Deflected',
    description: 'Papa checked an SMS alleging BSES Rajdhani bill default. Saathi auto-quarantined the link (bit.ly/del-power-pay) and alerted audio warning. System Blocked Successfully.',
    severity: 'warning',
    metadata: {
      quarantinedUrl: 'bit.ly/del-power-pay',
      provider: 'BSES Rajdhani',
      verifiedBlocked: true,
    },
  },
  {
    id: 'act_companion_1',
    timestamp: new Date(Date.now() - 2.5 * 3600 * 1000).toISOString(), // ~2.5 hrs ago
    type: 'companion_chat',
    title: 'Retro Kishore Kumar & Weather Chat',
    description: '12-minute engaging Hindi dialogue. Papa asked for "Zindagi Ke Safar Mein" playlist and checked afternoon temperature for West Delhi.',
    severity: 'info',
    metadata: {
      audioDuration: '12m',
      audioDigestAvailable: true,
      sentiment: 'Cheerful & Calm',
    },
  },
  {
    id: 'act_med_1',
    timestamp: new Date(Date.now() - 4.2 * 3600 * 1000).toISOString(), // morning ~8:15 AM
    type: 'medication_taken',
    title: 'Amlodipine 5mg marked Taken',
    description: 'Confirmed via physical Senior Tablet interaction: "Maine Le Li" button tapped on living room hub. Hardware Touch Verified.',
    severity: 'success',
    metadata: {
      hardwareTouchVerified: true,
      medicationName: 'Amlodipine 5mg',
      doseTime: '08:15 AM',
    },
  },
];
