import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '@/types/store';
import { UserInfo, AuthorizationStatus } from '@/types/user';
import { AppApi } from '@/api';
import { tokenStorage } from '@/storage/token';

type AuthorizationState = {
  authorizationStatus: AuthorizationStatus;
  info: UserInfo | null;
};

const initialState: AuthorizationState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  info: null,
};

export const userSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<UserInfo>) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.info = action.payload;
    },
    loggedOut: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.info = null;
    },
  },
});

export const userSelector = {
  authorizationStatus: (state: RootState) => state.user.authorizationStatus,
  info: (state: RootState) => state.user.info,
};

const { loggedIn, loggedOut } = userSlice.actions;

type LoginData = {
  email: string;
  password: string;
};

export const login = createAsyncThunk<
  void,
  LoginData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const loginResponse = await api.login({ email, password });
    const token = loginResponse.token;
    tokenStorage.set(token);
    dispatch(loggedIn(loginResponse));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/login', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.logout();
    tokenStorage.reset();
    dispatch(loggedOut());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
});

export const checkAuthorized = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('user/checkedAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const checkAuthResponse = await api.checkAuth();
    dispatch(loggedIn(checkAuthResponse));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch(loggedOut());
  }
});

export default userSlice.reducer;
