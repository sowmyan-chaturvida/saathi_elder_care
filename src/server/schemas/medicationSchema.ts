import { z } from 'zod';

export const takeMedicationSchema = z.object({
  notes: z.string().max(200).optional(),
});

export const createMedicationSchema = z.object({
  name: z.string().min(2, 'Medication name required').max(100),
  dosage: z.string().min(1, 'Dosage required').max(50),
  timeSlot: z.enum(['morning', 'afternoon', 'evening', 'night']),
  scheduledTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM|am|pm)?$/, 'Invalid time format'),
  mealRelation: z.enum(['before_food', 'after_food', 'with_food', 'anytime']),
  instructionsHindi: z.string().min(1).max(200),
  instructionsEnglish: z.string().min(1).max(200),
  notes: z.string().max(300).optional(),
  colorTag: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color').optional().default('#0D9488'),
});

export type CreateMedicationInput = z.infer<typeof createMedicationSchema>;
