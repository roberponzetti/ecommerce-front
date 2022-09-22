import React from "react";
import { Carousel } from "../container/components/carousel";
import { ProductList } from "../container/components/product-list";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductList />
    </div>
  );
};

export default Home;
