import { FC } from 'react';

import { CitiesList } from './ui/cities-list';

import { Outlet } from 'react-router-dom';

export const Main: FC = () => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <Outlet />
    </main>
  </div>
);
