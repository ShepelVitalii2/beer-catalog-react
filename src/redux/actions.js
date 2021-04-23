import { createAction } from '@reduxjs/toolkit';
import {
  FILTERED_BY_ATTEN_L,
  FILTERED_BY_ATTEN_M,
  FILTERED_BY_ABV,
  FETCH_BEERS,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_ERROR,
  BEER_IN_STORAGE,
  ADD_BEER_IN_STORAGE,
  REMOVE_BEER_FROM_STORAGE,
} from './types';

export const filteredByAttenL = createAction(FILTERED_BY_ATTEN_L);
export const filteredByAttenM = createAction(FILTERED_BY_ATTEN_M);
export const filteredByABV = createAction(FILTERED_BY_ABV);

export const fetchBeersRequest = createAction(FETCH_BEERS);
export const fetchBeersSuccess = createAction(FETCH_BEERS_SUCCESS);
export const fetchBeersError = createAction(FETCH_BEERS_ERROR);

export const beerInStorage = createAction(BEER_IN_STORAGE);
export const addBeerInStorage = createAction(ADD_BEER_IN_STORAGE);
export const removeBeerFromStorage = createAction(REMOVE_BEER_FROM_STORAGE);
