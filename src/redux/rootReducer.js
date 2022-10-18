import { productSlice } from "./state/product";
import { cartSlice } from './state/cart';
import { authSlice } from "./state/auth";

export const rootReducer = {
  products: productSlice.reducer,
  cart: cartSlice.reducer,
  auth: authSlice.reducer
};
