import { Navigate, RouteObject } from 'react-router-dom';

import { BaseLayout } from '../../shared/ui/ui';

import Login from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { Favorites } from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { Places } from '@/pages/main/ui/places';

import { ROUTE_PATHS } from '@/consts/routes';
import PrivateRoute from '@/shared/framework/private-route';
import PublicRoute from '@/shared/framework/public-route';

import { cities } from '@/consts/cities';

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      {
        element: <Main />,
        path: ROUTE_PATHS.MAIN,
        children: [
          {
            index: true,
            element: <Navigate to={`/${cities[0].name}`} />,
          },
          ...cities.map((city) => ({
            path: `/${city.name}`,
            element: <Places city={city} />,
          })),
        ],
      },

      {
        path: ROUTE_PATHS.LOGIN,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.FAVORITES,
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTE_PATHS.OFFER,
        element: <Offer />,
      },
      {
        path: ROUTE_PATHS.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
];
