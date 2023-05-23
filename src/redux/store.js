import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './detail/detailsSlice';
import citiesSlice from './city/citiesSlice';

const store = configureStore({
  reducer: {
    details: detailsSlice,
    cities: citiesSlice,
  },
});

export default store;
