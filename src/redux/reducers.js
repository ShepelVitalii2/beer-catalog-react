import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersError,
  filteredByAttenM,
  filteredByAttenL,
  filteredByABV,
  addBeerInStorage,
  removeBeerFromStorage,
} from './actions';

enableMapSet();

const initialState = {
  allBeers: [],
  filteredBeers: [],
  beerInBasket: [],
};

const beers = createReducer(initialState, builder => {
  builder
    .addCase(fetchBeersRequest, (state, _) => {
      return { ...state };
    })
    .addCase(fetchBeersSuccess, (_, action) => {
      return {
        allBeers: action.payload,
        filteredBeers: action.payload,
        beerInBasket: [],
      };
    })
    .addCase(filteredByAttenL, (state, action) => {
      console.log(action);
      return {
        ...state,
        filteredBeers: action.payload,
      };
    })
    .addCase(filteredByAttenM, (state, action) => {
      return {
        ...state,
        filteredBeers: action.payload,
      };
    })
    .addCase(filteredByABV, (state, action) => {
      return {
        ...state,
        filteredBeers: action.payload,
      };
    })
    .addCase(addBeerInStorage, (state, action) => {
      return {
        ...state,
        beerInBasket: action.payload,
      };
    })
    .addCase(removeBeerFromStorage, (state, action) => {
      return {
        ...state,
        beerInBasket: action.payload,
      };
    });
});

const error = createReducer(null, {
  [fetchBeersError]: (_, { payload }) => payload,
});

export default combineReducers({
  beers,
  error,
});
