import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import inventarioSlice from './inventarioSlice';

const store = configureStore({
  reducer: {
    inventory: inventarioSlice,
    counter: counterSlice,
  },
});

export default store;
