import { UserInfo } from '@/types/user';

import { client } from './client';

const checkAuth = async () => {
  try {
    const response = await client.get<UserInfo>('/login');
    return response.data;
  } catch (error) {
    throw new Error('Failed to check auth', { cause: error });
  }
};

type LoginRequest = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginRequest) => {
  try {
    const response = await client.post<UserInfo>('/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to login', { cause: error });
  }
};

const logout = async () => {
  try {
    await client.delete('/logout');
  } catch (error) {
    throw new Error('Failed to logout', { cause: error });
  }
};

export const userApi = {
  checkAuth,
  login,
  logout,
};
