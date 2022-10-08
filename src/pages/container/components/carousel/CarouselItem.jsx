import React from 'react';
import clx from "classnames";
import style from './style.module.css';

const STOCK_LIMITADO = "Stock limitado";
const STOCK_DISPONIBLE = "Stock disponible";

const CarouselItem = ({ handleToDetailProduct, product }) => {
  return (
    <div
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
  )
}

export default CarouselItem
