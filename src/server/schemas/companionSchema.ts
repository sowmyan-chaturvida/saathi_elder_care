import { z } from 'zod';

export const converseSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty').max(1000, 'Message too long'),
  conversationHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string().max(1000),
    })
  ).optional().default([]),
  language: z.enum(['english']).optional().default('english'),
});

export type ConverseInput = z.infer<typeof converseSchema>;
