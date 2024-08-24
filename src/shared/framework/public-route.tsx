import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Location, Navigate, useLocation } from 'react-router-dom';

import { AuthorizationStatus } from '@/types/user';

import { userSelector } from '@/store/user';

import { ROUTE_PATHS } from '@/consts/routes';

type FromState = {
  from?: Location;
};

const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const hasAccess = authorizationStatus !== AuthorizationStatus.Auth;

  const from = location.state?.from || { pathname: ROUTE_PATHS.MAIN };

  return hasAccess ? children : <Navigate to={from} />;
};

export default PublicRoute;
