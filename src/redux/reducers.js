import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersError,
  filteredByAttenM,
  filteredByAttenL,
  filteredByABV,
} from './actions';
// import fetchBeers from '../components/APIservice';

const filteredBy = createReducer([], {
  [filteredByAttenL]: (state, { payload }) => {
    return console.log(state, payload);
  },
  [filteredByAttenM]: (state, { payload }) => {
    return console.log(state, payload);
  },
  [filteredByABV]: (state, { payload }) => {
    return console.log(state, payload);
  },
});

const beers = createReducer([], {
  [fetchBeersRequest]: () => null,
  [fetchBeersSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchBeersError]: (_, { payload }) => payload,
});

export default combineReducers({
  filteredBy,
  beers,
  error,
});

//   if (e.target.checked) {
//     console.log(e);
//     return state.filter(beer => beer.attenuation_level < 75);
//   }
