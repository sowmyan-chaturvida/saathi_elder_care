import { z } from 'zod';

export const analyzeScamSchema = z.object({
  text: z.string().min(5, 'Please provide the message text to analyze').max(2000, 'Message text too long'),
  senderInfo: z.string().max(100).optional(),
});
