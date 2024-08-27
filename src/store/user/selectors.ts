import { RootState } from '@/types/store';

export const userSelector = {
  authorizationStatus: (state: RootState) => state.user.authorizationStatus,
  info: (state: RootState) => state.user.info,
};
