import { z } from 'zod';

export const logVitalsSchema = z.object({
  bloodPressureSystolic: z.number().min(60).max(260),
  bloodPressureDiastolic: z.number().min(40).max(160),
  bloodSugar: z.number().min(40).max(600),
  bloodSugarType: z.enum(['fasting', 'post_meal', 'random']).default('random'),
  pulse: z.number().min(30).max(220).optional(),
  recordedBy: z.string().min(2).max(100).default('Caregiver'),
  notes: z.string().max(500).optional(),
});

export type LogVitalsInput = z.infer<typeof logVitalsSchema>;
