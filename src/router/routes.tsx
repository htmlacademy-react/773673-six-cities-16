import PrivateRoute from '../components/private-route';

import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Main from '../pages/main';
import NotFound from '../pages/not-found';

import Offer from '../pages/offer';
import { offerDataLoader } from '../pages/offer/loader';

import offers from '../mocks/offer';
import { LoaderFunction, RouteObject } from 'react-router-dom';
import BaseLayout from '../layouts/base';

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
