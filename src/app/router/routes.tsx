import { RouteObject, LoaderFunction } from 'react-router-dom';

import { BaseLayout } from '../../shared/ui';
import { PrivateRoute } from '../../shared/framework';

import Login from '../../pages/login';
import Main from '../../pages/main';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';
import { offerDataLoader } from '../../pages/offer/loader';

import { ROUTE_PATHS } from '../../shared/consts/routes';
import { offers } from '../../entities/offer/api/mock';

export const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.MAIN,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_PATHS.FAVORITES,
        element: (
          <PrivateRoute>
            <Favorites offersList={offers} />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTE_PATHS.OFFER,
        loader: offerDataLoader as LoaderFunction,
        element: <Offer />,
      },
      {
        path: ROUTE_PATHS.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
];
