import { userSelector } from '@/store/user/selectors';
import { AuthorizationStatus } from '@/types/user';
import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

export const WithPrivate: FC<PropsWithChildren> = ({ children }) => {
  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;

  return hasAccess ? children : null;
};
