import React from 'react'
import { Image } from 'react-bootstrap'
import style from "./style.module.css";
import clx from 'classnames';
import styleGlobal from '../../../global-style/style.module.css'
import { priceFormatted } from '../../../utilities';
import { truncate } from '../../../utilities/strings';

const InfoProduct = ({ product }) => {

  const hasStock = product.quantity > product.stock

  return (
    <>
      <Image className={clx(styleGlobal.cursor_pointer, styleGlobal.mr_5)} height='50' src={product.image} alt="image-product" />
      <div className='d-flex flex-column'>
        <p className={clx(styleGlobal.mr_3, style.title)}>{truncate(product.title, 25)}</p>
        <p className={clx(style.price_product)}>{priceFormatted(product.price)}</p>
        <p className={clx(style.stock, { [style.error]: hasStock, [style.success]: !hasStock })}>({product.stock} disponibles )</p>
      </div>
    </>
  )
}

export default InfoProduct
