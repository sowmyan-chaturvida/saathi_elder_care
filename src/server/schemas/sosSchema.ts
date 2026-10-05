import { z } from 'zod';

export const triggerSosSchema = z.object({
  source: z.enum(['senior_button', 'fall_sensor', 'voice_trigger']).optional().default('senior_button'),
  coords: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
});

export const resolveSosSchema = z.object({
  resolvedBy: z.string().min(2, 'Resolver name required').max(100),
  note: z.string().max(500).optional(),
});
