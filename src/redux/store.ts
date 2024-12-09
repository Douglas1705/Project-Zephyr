import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/reducer';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
