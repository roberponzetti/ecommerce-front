import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../components/not-found";
import { routes } from "../pages/routes";
import { Layout } from "../components/Layout";
import { useDispatch } from "react-redux";
import { loadProducts } from "../redux/state/product";
import { getProductsDataService } from "../firebase";

const RoutesComponent = () => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, key) => (
            <Route
              index={route.isIndex}
              key={key}
              {...(!route.isIndex ? { path: route.path } : {})}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
