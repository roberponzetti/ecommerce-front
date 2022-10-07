import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../../redux/state/product";
import { responsive } from "./config.carousel";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import clx from "classnames";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const STOCK_LIMITADO = "Stock limitado";
const STOCK_DISPONIBLE = "Stock disponible";

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
        autoPlaySpeed={3000}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
      >
        {filteredProducts.map((product, index) => (
          <div key={index}
            onClick={() => handleToDetailProduct(product.id)}
            className={style.cursor_pointer}
          >
            <div className="image-container-carousel position-relative">
              <img
                className={clx("w-75 h-75", style.image_carousel)}
                src={product.image}
                alt={product.image}
              />
              <p className={clx(style.text_banner, "mt-3 text-center")} >
                {product.stock <= 5 ? STOCK_LIMITADO : STOCK_DISPONIBLE}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
