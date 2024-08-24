import { RouteObject } from 'react-router-dom';

import { BaseLayout } from '../../shared/ui';

import Login from '../../pages/login';
import { Main } from '../../pages/main';
import { Favorites } from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

import { ROUTE_PATHS } from '@/consts/routes';
import PrivateRoute from '@/shared/framework/private-route';
import { offers } from '@/mocks/offers';
import PublicRoute from '@/shared/framework/public-route';

export const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.Main,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTE_PATHS.Login,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: ROUTE_PATHS.Favorites,
        element: (
          <PrivateRoute>
            <Favorites offersList={offers} />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTE_PATHS.Offer,
        element: <Offer />,
      },
      {
        path: ROUTE_PATHS.NotFound,
        element: <NotFound />,
      },
    ],
  },
];
