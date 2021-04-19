import { configureStore } from '@reduxjs/toolkit';

import startPageReducers from './reducers';

const store = configureStore({
  reducer: {
    startPage: startPageReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
