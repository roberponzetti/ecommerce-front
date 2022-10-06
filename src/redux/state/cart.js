import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const findProduct = (state, id) => current(state).cart.find((product) => product.id === id);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      let productAddedQuantity;
      let currentProduct = findProduct(state, payload.id);

      if (currentProduct) {
        productAddedQuantity = {
          ...payload,
          quantity: currentProduct.quantity + 1
        }

        const resp = current(state).cart.map(product => {
          if (product.id === currentProduct.id) {
            return productAddedQuantity
          }
          return product
        })

        state.cart = resp
      }
      else {
        productAddedQuantity = {
          ...payload,
          quantity: 1
        }
        state.cart = [...state.cart, productAddedQuantity];
      }
    },

    addQuantity: (state, { payload }) => {
      let currentProduct = findProduct(state, payload.id);

      const resp = current(state).cart.map(product => {
        if (product.id === currentProduct.id) {
          return {
            ...currentProduct,
            quantity: currentProduct.quantity + payload.quantity
          }
        }
        return product
      })

      state.cart = resp;
    },

    subtractQuantity: (state, { payload }) => {
      let currentProduct = findProduct(state, payload.id);

      const resp = current(state).cart.map(product => {
        if (product.id === currentProduct.id) {
          return {
            ...currentProduct,
            quantity: currentProduct.quantity - payload.quantity
          }
        }
        return product
      })

      state.cart = resp;
    },
    deleteProduct: (state, { payload }) => {
      const resp = current(state).cart.filter((product) => product.id !== payload);
      state.cart = resp;
    },

    clearCart: () => {
      return initialState
    }
  },
});


export const { addProductToCart, addQuantity, subtractQuantity, deleteProduct, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart
