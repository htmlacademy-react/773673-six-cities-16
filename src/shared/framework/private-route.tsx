import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthorizationStatus } from '@/types/user';

import { userSelector } from '@/store/user/selectors';

import { ROUTE_PATHS } from '@/consts/routes';
import { WithLoader } from '../hoc/hoc';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown;

  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <WithLoader isLoading={isLoading}>
      {hasAccess ? children : <Navigate to={ROUTE_PATHS.LOGIN} />}
    </WithLoader>
  );
};

export default PrivateRoute;
