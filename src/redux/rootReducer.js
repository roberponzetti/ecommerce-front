import { productSlice } from "./state/product";
import { productByIdSlice } from "./state/product";
import { cartSlice } from './state/product';

export const rootReducer = {
  products: productSlice.reducer,
  selectedProduct: productByIdSlice.reducer,
  cart: cartSlice.reducer
};