import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import mockOffers from './mocks/offers';
import { OfferRespone } from './types/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offersCount: number = 312;
const offersList: OfferRespone[] = mockOffers;

root.render(
  <React.StrictMode>
    <App offersCount={offersCount} offersList={offersList} />
  </React.StrictMode>,
);
