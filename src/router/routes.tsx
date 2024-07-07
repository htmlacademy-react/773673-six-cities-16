import PrivateRoute from '../components/private-route';

import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Main from '../pages/main';
import NotFound from '../pages/not-found';

import { offerIdLoader } from '../pages/order/loader';
import Offer from '../pages/order';

import offers from '../mocks/offers';
import { LoaderFunction, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
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
    loader: offerIdLoader as LoaderFunction,
    element: <Offer />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
