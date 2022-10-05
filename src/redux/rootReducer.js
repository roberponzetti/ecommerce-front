import { productSlice } from "./state/product";
import { cartSlice } from './state/cart';

export const rootReducer = {
  products: productSlice.reducer,
  cart: cartSlice.reducer
};
