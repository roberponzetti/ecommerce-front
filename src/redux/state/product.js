import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAction: (state, payload) => {
      console.log(payload);
      state.products = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { productAction } = productSlice.actions

export default productSlice.reducer