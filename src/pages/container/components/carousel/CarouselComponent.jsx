import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../../redux/state/product";
import { responsive } from "./config.carousel";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";

import style from "./style.module.css";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
  const { products } = useSelector(selectProduct);
  const navigate = useNavigate();

  const filteredProducts = products
    .filter((product) => product.stock > 0)
    .slice(0, 9);

  const handleToDetailProduct = (id) => {
    navigate("detail/" + id);
  }

  return (
    <div className={style.margin}>
      <Carousel
        itemClass={style.center_items}
        autoPlaySpeed={2500}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
      >
        {filteredProducts.map((product, index) => (
          <CarouselItem
            key={index}
            product={product}
            handleToDetailProduct={handleToDetailProduct} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
