import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  price: number;
  new: boolean;
}

interface State {
  products: Product[];
}

const initialState: State = {
  products: [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      originalPrice: 100,
      discountedPrice: 80,
      discount: 20,
      imageUrl: 'https://example.com/image1.jpg',
      price: 80,
      new: true,
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      originalPrice: 150,
      discountedPrice: 120,
      discount: 30,
      imageUrl: 'https://example.com/image2.jpg',
      price: 120,
      new: false,
    },
  ],
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
