import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsDataService } from "../firebase";
import { loadProducts } from "../redux/state/product";

export const useProduct = () => {
  const dispatch = useDispatch();

  const getProducts = useCallback(async () => {
    //Me traigo del Firebase la data de los productos, en este caso esta desacoplado la lógica
    //de obtención de los datos del coponente. RouteComponent no le interesa si viene de Firebase o de un endpoint x
    const data = await getProductsDataService();
    //dispatch, es un Hook de Redux, que despacha la acción pasada cómo argumento. (loadProducts es un action creator)
    //con la data que se le pase hacia el Reducer, en este caso seria el reducer "product"
    dispatch(loadProducts(data));
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [dispatch, getProducts]);
};
