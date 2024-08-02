import { ROUTE_PATHS } from '@/consts/routes';
import { Navigate } from 'react-router-dom';

type PublicRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PublicRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess ? <Navigate to={ROUTE_PATHS.MAIN} /> : children;
}

export default PrivateRoute;
