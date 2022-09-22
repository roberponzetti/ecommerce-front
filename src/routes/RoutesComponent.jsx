import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../components/not-found";
import { routes } from "../pages/routes";
import { Layout } from "../components/Layout";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, key) => (
            <Route
              index={route.isIndex}
              key={key}
              path={!route.isIndex ? route.path : false}
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
