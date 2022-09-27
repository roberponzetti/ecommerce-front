import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../../redux/state/product";
import { responsive } from "./config.carousel";

import "react-multi-carousel/lib/styles.css";
import style from "./style.module.css";

const STOCK_LIMITADO = "Stock limitado";
const STOCK_DISPONIBLE = "Stock disponible";

const CarouselComponent = () => {
  const { products } = useSelector(selectProduct);

  const filteredProducts = products
    .filter((product) => product.stock > 0)
    .slice(0, 9);

  return (
    <div className="mt-5">
      <Carousel
        itemClass={style.center_items}
        autoPlaySpeed={5000}
        autoPlay={true}
        responsive={responsive}
      >
        {filteredProducts.map((product, index) => (
          <div key={index}>
            {index === 0 ? (
              <>
                <img
                  className="w-75 h-75"
                  src={
                    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/woman-sports-wear-fashion-sale-shop-store-ad-design-template-8843cd2ac8f9fcd7d9911d3afd7a3e10_screen.jpg?ts=1598422483"
                  }
                  alt="banner-product"
                />
              </>
            ) : (
              <>
                <img
                  className="w-75 h-75"
                  src={product.image}
                  alt={product.image}
                />
                <h6 className="mt-3 text-center">
                  {product.stock <= 5 ? STOCK_LIMITADO : STOCK_DISPONIBLE}
                </h6>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
