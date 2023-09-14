import {IAddress} from './User';

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

interface EditProfileRequest {
  fullname: string;
  phoneNumber: string;
  email: string;
  address: IAddress;
}

interface ChangePasswordRequest {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

export type {
  LoginRequest,
  LoginResponse,
  EditProfileRequest,
  ChangePasswordRequest,
};
