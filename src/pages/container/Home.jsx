import React from "react";
import { CarouselComponent } from "../container/components/carousel";
import { ProductList } from "../container/components/product-list";

const Home = () => {
  return (
    <React.Fragment>
      <CarouselComponent />
      <h1 className="mt-5">Productos</h1>
      <ProductList />
    </React.Fragment>
  );
};

export default Home;
