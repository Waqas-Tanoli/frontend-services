import { z } from 'zod';

import { USER_ROLE } from '@/src/shared/types/User';

export const signupSchema = z.object({
  role: z.literal(USER_ROLE.TENANT).optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
});

export type SignupData = z.infer<typeof signupSchema>;
