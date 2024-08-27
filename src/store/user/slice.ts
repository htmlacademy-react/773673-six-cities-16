import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo, AuthorizationStatus } from '@/types/user';
import { checkAuthorized, login, logout } from './async-actions';

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
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.info = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.info = null;
    });
    builder.addCase(checkAuthorized.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.info = action.payload;
    });
  },
});

export default userSlice.reducer;
