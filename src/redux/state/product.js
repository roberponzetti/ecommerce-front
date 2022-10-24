import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
  count: 8,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, { payload }) => {
      state.products = payload
    },
    loadProductById: (state, { payload }) => {
      state.selectedProduct = payload;
    },

    showMore: (state) => {
      if (state.count + 5 <= state.products.length) {
        state.count = state.count + 5
      } else {
        state.count = state.products.length
      }
    },

  },
});

export const { loadProducts, loadProductById, showMore } = productSlice.actions;

export const selectProduct = (state) => state.products;
