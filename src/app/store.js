import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import routesSlice from '../features/routes/routesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    routes :routesSlice
  },
});
