interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
}

export const setProducts = (products: Product[]) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export interface SetProductsAction {
  type: 'SET_PRODUCTS';
  payload: Product[];
}

export type ProductsActionTypes = SetProductsAction;
