import {z} from 'zod';
interface RegisterRequest {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  userRole: UserRole;
  fullname: string;
  adress?: {
    rt?: string;
    rw?: string;
    city?: string;
    province?: string;
    zipcode?: string;
    adressDetail?: string;
    coordinates?: {
      longitude: string;
      latitude: string;
    };
  };
}

interface RegisterResponse {
  jwt: string;
  user: {
    id: number;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    phoneNumber: string;
    fullname: string;
    userRole: UserRole;
  };
}

type UserRole = 'Admin' | 'Member'; // Example type, adjust as needed

// Define the Zod schema for RegisterRequest
const RegisterRequestSchema = z.object({
  username: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(), // Assuming email format validation
  password: z.string(),
  userRole: z.enum(['Admin', 'Member']), // Restrict to specific values
  fullname: z.string(),
  address: z
    .object({
      rt: z.string(),
      rw: z.string(),
      city: z.string(),
      province: z.string(),
      zipcode: z.string(),
      addressDetail: z.string(),
      coordinates: z.object({
        longitude: z.string(),
        latitude: z.string(),
      }),
    })
    .optional(),
});

// Define the Zod schema for RegisterResponse
const RegisterResponseSchema = z.object({
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

export type {RegisterRequest, RegisterResponse};

export {RegisterRequestSchema, RegisterResponseSchema};
