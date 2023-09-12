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

export type {LoginRequest, LoginResponse};
