import { NameSpace } from '@/consts/namespace';
import { RootState } from '@/types/store';

type UserSlice = Pick<RootState, NameSpace.User>;

export const userSelector = {
  authorizationStatus: (state: UserSlice) => state.user.authorizationStatus,
  info: (state: UserSlice) => state.user.info,
};
