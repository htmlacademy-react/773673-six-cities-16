import { ROUTE_PATHS } from '@/consts/routes';
import { userSelector } from '@/store/user';
import { AuthorizationStatus } from '@/types/user';
import { useSelector } from 'react-redux';
import { Location, Navigate, useLocation } from 'react-router-dom';

type FromState = {
  from?: Location;
};

type PublicRouteProps = {
  children: JSX.Element;
};

function PublicRoute({ children }: PublicRouteProps): JSX.Element {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  const hasAccess = authorizationStatus !== AuthorizationStatus.Auth;

  const from = location.state?.from || { pathname: ROUTE_PATHS.Main };

  return hasAccess ? children : <Navigate to={from} />;
}

export default PublicRoute;
