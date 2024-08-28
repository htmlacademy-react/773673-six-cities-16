import { AppApi } from '@/api/api';
import { tokenStorage } from '@/storage/token';
import { AppDispatch, RootState } from '@/types/store';
import { UserInfo } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

type LoginData = {
  email: string;
  password: string;
};

export const login = createAsyncThunk<
  UserInfo,
  LoginData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/loggedIn', async ({ email, password }, { extra: api }) => {
  const loginResponse = await api.user.login({ email, password });
  const token = loginResponse.token;
  tokenStorage.set(token);
  return loginResponse;
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/loggedOut', async (_arg, { extra: api }) => {
  await api.user.logout();
  tokenStorage.reset();
});

export const checkAuthorized = createAsyncThunk<
  UserInfo,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/checkedAuth', (_arg, { extra: api }) => api.user.checkAuth());
