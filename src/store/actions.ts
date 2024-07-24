import { City } from '@/types/city';
import { Offer } from '@/types/offer';
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<City>('city/change');
export const changeOffers = createAction<Offer[]>('offers/change');
