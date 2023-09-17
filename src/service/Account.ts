import {UseMutationResult} from 'react-query';
import {LoginRequest, LoginResponse} from '../models/Account';
import http from './http';
import {useMutation} from '@tanstack/react-query';
import {saveTokenToStorage} from '../helpers/storage';

const UseLoginRequest = (): UseMutationResult<
  LoginResponse,
  Error,
  LoginRequest
> => {
  const loginMutation = useMutation<LoginResponse, Error, LoginRequest>(
    async (creds: LoginRequest) => {
      const response = await http.post('/api/auth/local', creds);
      return response.data;
    },
    {
      onSuccess: data => {
        saveTokenToStorage('TOKEN', data.jwt);
        saveTokenToStorage('USER', JSON.stringify(data.user));
      },
      onError(error) {
        console.error('USER.ts', error.message);
      },
    },
  );

  return loginMutation;
};

export const AccountService = {
  UseLoginRequest,
};
