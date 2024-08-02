import { ROUTE_PATHS } from '@/consts/routes';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={ROUTE_PATHS.LOGIN} />;
}

export default PrivateRoute;
