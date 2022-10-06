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

    showMore: (state, { payload }) => {
      if (state.count + 3 <= state.products.length) {
        state.count = state.count + 3
      } else {
        state.count = payload.length
      }
    },


  },
});

export const { loadProducts, loadProductById, showMore } = productSlice.actions;

export const selectProduct = (state) => state.products;
