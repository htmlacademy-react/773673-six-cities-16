import { FC } from 'react';

import { CitiesList } from './ui/cities-list';

import { Places } from './ui/places';

export const Main: FC = () => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <Places />
    </main>
  </div>
);
