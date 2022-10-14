import { createSlice } from "@reduxjs/toolkit";
import { swalAlert } from "../../utilities/alert";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "../../utilities/localStorage";

const KEY = "CART";

const initialState = {
  cart: getLocalStorage(KEY) ? getLocalStorage(KEY) : [],
  openCart: false,

};

const findProduct = (state, id) => state.cart.find((product) => product.id === id);


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity: (state, { payload }) => {
      let currentProduct = findProduct(state, payload.id);

      if (payload.product.stock === 0) {
        swalAlert("danger", "Producto sin stock");
        return state;
      };
      if (payload.quantity + currentProduct?.quantity > payload.product.stock) {
        currentProduct.quantity = payload.product.stock
        swalAlert("danger", "Producto sin stock");
        return state;
      }
      if (currentProduct) {
        currentProduct.quantity = currentProduct.quantity + payload.quantity;
      }
      else {
        state.cart.push({
          ...payload.product,
          quantity: payload.quantity
        })
      }

      swalAlert("success", "Producto agregado al carrito");
      setLocalStorage(KEY, state.cart);

    },

    subtractQuantity: (state, { payload }) => {
      let currentProduct = findProduct(state, payload.id);
      if (currentProduct) currentProduct.quantity = currentProduct.quantity - payload.quantity
      setLocalStorage(KEY, state.cart);
    },

    deleteProduct: (state, { payload }) => {
      const arrayWithoutProduct = state.cart.filter((product) => product.id !== payload);
      setLocalStorage(KEY, arrayWithoutProduct);
      state.cart = arrayWithoutProduct;
    },

    clearCart: (state) => {
      clearLocalStorage();
      state.cart = []
    },

    openCartNavbar: (state, { payload }) => {
      console.log(payload)
      state.openCart = payload;
    },
  },
});


export const { addProductToCart, addQuantity, subtractQuantity, deleteProduct, clearCart, openCartNavbar } = cartSlice.actions;
export const selectCart = (state) => state.cart
