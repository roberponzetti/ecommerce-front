import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProducts: (state, payload) => {
      state.products = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadProducts } = productSlice.actions

export default productSlice.reducer