import { RouteObject, LoaderFunction } from 'react-router-dom';

import { BaseLayout } from '../../shared/ui';
import { PrivateRoute } from '../../shared/framework';

import Login from '../../pages/login';
import Main from '../../pages/main';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';
import { offerDataLoader } from '../../pages/offer/loader';

import offers from '../../entities/offer/api/mock';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Main offersCount={200} offersList={offers} />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/favorites',
        element: (
          <PrivateRoute>
            <Favorites offersList={offers} />
          </PrivateRoute>
        ),
      },
      {
        path: '/offer/:id',
        loader: offerDataLoader as LoaderFunction,
        element: <Offer />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
