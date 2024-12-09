import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../redux/store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  new: string;
}
