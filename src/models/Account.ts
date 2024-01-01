import {z} from 'zod';
interface LoginRequest {
  identifier: string;
  password: string;
}

interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    email: string;
    provider: string;
    confirmed: Boolean;
    blocked: Boolean;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    phoneNumber: string;
    fullname: string;
    userRole: 'Admin' | 'Member';
  };
}

const LoginRequestSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});

const LoginResponseSchema = z.object({
  jwt: z.string(),
  user: z.object({
    id: z.number(),
    email: z.string().email(), // Assuming email format validation
    provider: z.string(),
    confirmed: z.boolean(),
    blocked: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    username: z.string(),
    phoneNumber: z.string(),
    fullname: z.string(),
    userRole: z.enum(['Admin', 'Member']), // Restrict to specific values
  }),
});

export type {
  LoginRequest,
  LoginResponse,
  LoginRequestSchema,
  LoginResponseSchema,
};
