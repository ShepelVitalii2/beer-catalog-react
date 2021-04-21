import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersError,
  filteredByAttenM,
  filteredByAttenL,
  filteredByABV,
  beerInStorage,
} from './actions';

const initialState = {
  allBeers: [],
  filteredBeers: [],
};

const beers = createReducer(initialState, builder => {
  builder
    .addCase(fetchBeersRequest, (state, action) => {
      return { ...state };
    })
    .addCase(fetchBeersSuccess, (state, action) => {
      return {
        ...state,
        allBeers: action.payload,
      };
    })
    .addCase(filteredByAttenL, (state, action) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(
          beer => beer.attenuation_level > 75,
        ),
      };
    })
    .addCase(filteredByAttenM, (state, action) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(
          beer => beer.attenuation_level < 75,
        ),
      };
    })
    .addCase(filteredByABV, (state, action) => {
      return {
        ...state,
        filteredBeers: state.allBeers.filter(beer => beer.abv > 5),
      };
    });

  // builder.addCase(filteredByAttenL, (state, action) => {
  //   console.log(state);
  //   return state.filter(beer => beer.attenuation_level > 75);
  // });
  // builder.addCase(filteredByAttenM, (state, action) => {
  //   return state.filter(beer => beer.attenuation_level < 75);
  // });
});

// const filteredBy = createReducer(initialState.allBeers, builder => {
//   builder
//     .addCase(fetchBeersRequest, (state, action) => {
//       return [...state];
//     })
//     .addCase(fetchBeersSuccess, (state, action) => {
//       return [state, ...action.payload];
//     });
// });
// {
//   [fetchBeersRequest]: () => null,
//   [fetchBeersSuccess]: (_, { payload }) => payload,

//   [filteredByAttenL]: (state, payload) => {
//     console.log(state);

//     return state.filter(beer => beer.attenuation_level > 75);
//   },
//   [filteredByAttenM]: (state, _) => {
//     return state.filter(beer => beer.attenuation_level < 75);
//   },
//   [filteredByABV]: (state, _) => {
//     return state.filter(beer => beer.abv > 5);
//   },
// });

// const beersInBasket = createReducer([], {
//   [beerInStorage]: (state, payload) => {
//     return [...state, ...payload.filter(beer => beer.id === +e.target.id)];
//   },
// });

const error = createReducer(null, {
  [fetchBeersError]: (_, { payload }) => payload,
});

export default combineReducers({
  // filteredBy,
  beers,
  error,
  // beersInBasket,
});

//   if (e.target.checked) {
//     console.log(e);
//     return state.filter(beer => beer.attenuation_level < 75);
//   }
