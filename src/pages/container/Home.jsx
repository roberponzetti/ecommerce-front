import React from "react";
import { useSelector } from "react-redux";
import { CarouselItem } from "../container/components/carousel";
import { ProductList } from "../container/components/product-list";

const Home = () => {
  // Nos traemos los productos cómo también el, pasandole
  // la función que creamos en el slice de producto
  // UseSelector escucha el state inicial de redux, cuando el estado de redux cambia
  // automaticamente vuelve actualizar el componnete que consume el estado
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <CarouselItem products={products} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
