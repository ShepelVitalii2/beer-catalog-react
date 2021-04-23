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
    .addCase(filteredByAttenL, (state, _) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(
          beer => beer.attenuation_level > 75,
        ),
      };
    })
    .addCase(filteredByAttenM, (state, _) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(
          beer => beer.attenuation_level < 75,
        ),
      };
    })
    .addCase(filteredByABV, (state, _) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(beer => beer.abv > 5),
      };
    })
    .addCase(addBeerInStorage, (state, action) => {
      return {
        ...state,
        beerInBasket: state.allBeers
          .filter(beer => beer.id === +action.payload)
          .concat(state.beerInBasket),
      };
    })
    .addCase(removeBeerFromStorage, (state, action) => {
      return {
        ...state,
        beerInBasket: state.beerInBasket.filter(
          beer => beer.id !== +action.payload,
        ),
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
