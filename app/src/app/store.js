import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fruitSlice from '../features/fruits/fruitSlice'

export const store = configureStore({
  reducer: {
      fruits: fruitSlice,
  },
});
