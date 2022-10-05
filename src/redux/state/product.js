import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {}
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, { payload }) => {
      state.products = payload;
    },
    loadProductById: (state, { payload }) => {
      state.selectedProduct = payload;
    }
  },
});

export const { loadProducts, loadProductById } = productSlice.actions;

export const selectProduct = (state) => state.products;
