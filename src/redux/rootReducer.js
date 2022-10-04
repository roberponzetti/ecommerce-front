import { combineReducers } from 'redux'
import { productSlice } from "./state/product";
import { productByIdSlice } from "./state/product";

export const rootReducer = combineReducers({
  products: productSlice.reducer,
  selectedProduct: productByIdSlice.reducer
});