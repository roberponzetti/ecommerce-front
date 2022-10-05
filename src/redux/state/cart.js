import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    /*     {
          category: "camisetas",
          gender: "mujer",
          image: "https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v5997766564000424471/products/AFA_FH8571.png&height=300&width=300",
          largeDescription: "camiseta afa copa america 2021",
          price: 16000,
          shortDescription: "camiseta afa mujer",
          stock: 5,
          title: "camiseta argentina 2022"
        } */
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
      console.log("Cart:", state.cart);
    }
  },
});


export const { addProductToCart } = cartSlice.actions;
export const selectCart = (state) => state.cart
