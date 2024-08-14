import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userSelector } from '@/store/user';
import { AuthorizationStatus } from '@/types/user';

import { ROUTE_PATHS } from '@/consts/routes';
import { WithLoader } from '../hoc';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown;

  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <WithLoader isLoading={isLoading}>
      {hasAccess ? children : <Navigate to={ROUTE_PATHS.Login} />}
    </WithLoader>
  );
};

export default PrivateRoute;
