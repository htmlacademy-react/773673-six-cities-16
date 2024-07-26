import { City } from '@/types/city';
import { Offer } from '@/types/offer';
import { createAction } from '@reduxjs/toolkit';

export const cityChanged = createAction<City>('city/changed');
export const offersLoaded = createAction<Offer[]>('offers/loaded');
