import { z } from 'zod';

export const analyzeScamSchema = z.object({
  text: z.string().max(3000, 'Message text too long').optional(),
  imageBase64: z.string().optional(),
  senderInfo: z.string().max(100).optional(),
}).refine(data => !!data.text || !!data.imageBase64, {
  message: 'Please provide either message text or a screenshot image to analyze',
});
