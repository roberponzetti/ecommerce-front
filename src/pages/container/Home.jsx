import React from "react";
import { CarouselComponent } from "../container/components/carousel";
import { ProductList } from "../container/components/product-list";

const Home = () => {
  return (
    <React.Fragment>
      <CarouselComponent />
      <ProductList />
    </React.Fragment>
  );
};

export default Home;
