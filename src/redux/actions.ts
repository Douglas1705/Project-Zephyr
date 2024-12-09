import { AppThunk, Product } from '../types/types';
import { setProducts, setLoading } from './reducer';

export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await fetch('http://localhost:3001/products');
  const data: Product[] = await response.json();
  dispatch(setProducts(data));
  dispatch(setLoading(false));
};
