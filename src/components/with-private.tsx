import { WithLoader } from '@/shared/hoc';
import { userSelector } from '@/store/user/selectors';
import { AuthorizationStatus } from '@/types/user';
import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

export const WithPrivate: FC<PropsWithChildren> = ({ children }) => {
  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown;

  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <WithLoader isLoading={isLoading}>{hasAccess ? children : null}</WithLoader>
  );
};
