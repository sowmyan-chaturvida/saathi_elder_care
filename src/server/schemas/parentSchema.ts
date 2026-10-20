import { z } from 'zod';

export const createParentSchema = z.object({
  name: z.string().min(2, 'Full name is required').max(100),
  preferredName: z.string().min(1, 'Preferred name is required').max(50),
  relation: z.enum(['Father', 'Mother', 'Grandfather', 'Grandmother', 'In-Law', 'Other']).default('Father'),
  age: z.number().int().min(40, 'Age must be 40 or older').max(120),
  city: z.string().min(2, 'City is required').max(100),
  locality: z.string().min(2, 'Locality is required').max(100),
  conditions: z.array(z.string()).default([]),
  allergies: z.array(z.string()).default([]),
  primaryDoctorName: z.string().max(100).optional(),
  primaryDoctorClinic: z.string().max(100).optional(),
  primaryDoctorPhone: z.string().max(25).optional(),
  emergencyContactName: z.string().min(2, 'Emergency contact name required'),
  emergencyContactRelation: z.string().min(2, 'Emergency contact relation required'),
  emergencyContactPhone: z.string().min(10, 'Valid phone number required'),
});

export type CreateParentInput = z.infer<typeof createParentSchema>;
