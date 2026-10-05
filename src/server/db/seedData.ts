import { ActivityLog, Medication, RoutineItem, SeniorProfile } from '@/types/care';

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
    id: 'act_1',
    timestamp: new Date(Date.now() - 3.8 * 3600 * 1000).toISOString(),
    type: 'medication_taken',
    title: 'Morning Medication Taken',
    description: 'Ramesh Uncle took Amlodipine 5mg on schedule after breakfast.',
    severity: 'success',
  },
  {
    id: 'act_2',
    timestamp: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    type: 'routine_completed',
    title: 'Morning Routine Completed',
    description: 'Completed 35-minute walk at District Park.',
    severity: 'info',
  },
  {
    id: 'act_3',
    timestamp: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    type: 'companion_chat',
    title: 'Voice Chat with Saathi',
    description: 'Enjoyed a 6-minute conversation about morning walk routines and the pleasant autumn weather.',
    severity: 'info',
  }
];
