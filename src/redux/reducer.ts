// src/redux/reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
}

interface State {
  products: Product[];
}

const initialState: State = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
