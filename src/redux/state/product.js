import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  selectedProduct: {}
};
/**
 Al despachar la acción con la información pasada, desde el componente RouteComponent
 llega hasta este reducer, ya que redux detecta a que reducer debe actualizar con los "Types"
 autocreados por redux Toolkit con el nombre que se le pone a "name" en el slice y el nombre de la
 acción.
 */
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //loadProducts es el acción creator
    loadProducts: (state, { payload }) => {
      // state: es el estado incial de la aplicación, payload: viene la data que se le pasa
      // desde el componente, en este caso vendría el array de productos que se le envío desde
      // el componente route. Por convencion se llaman state y payload.

      state.products = payload;
    }
  },
});

export const productByIdSlice = createSlice({
  name: "productById",
  initialState,
  reducers: {
    loadProductById: (state, { payload }) => {
      state.selectedProduct = payload;
      console.log("SSP:", state.selectedProduct);
    }
  },
});

// En esta linea se exportan todos los actions creators que se crearon dentro del objeto "reducers"
// para luego ser usados en los dispatch de los componentes para realizar alguna acción
export const { loadProducts } = productSlice.actions;
export const { loadProductById } = productByIdSlice.actions;

// con esta función lo que hacemos es obtener la propiedad productos del estado
// para luego, pasar esta función al useSelector en el componente que queramos para obtener la data
export const selectProduct = (state) => state.products;
export const selectProductById = (state) => state.selectedProduct;

// Se exporta el reducer para colocarlo en el Store para que funcione correctamente
