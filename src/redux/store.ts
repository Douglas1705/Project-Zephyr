import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/reducer';
import cartReducer from '../redux/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
