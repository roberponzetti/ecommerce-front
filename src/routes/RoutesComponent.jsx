import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../components/not-found";
import { routes } from "../pages/routes";
import { Layout } from "../components/Layout";
import { useProduct } from "../hooks/useProduct";

const RoutesComponent = () => {
  useProduct();
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
