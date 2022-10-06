import React from 'react'
import { Image } from 'react-bootstrap'
import style from "./style.module.css";
import clx from 'classnames';
import styleGlobal from '../../../global-style/style.module.css'
import { priceFormatted } from '../../../utilities';

const InfoProduct = ({ product }) => {


  return (
    <>
      <Image className={styleGlobal.cursor_pointer} height='50' src={product.image} alt="image-product" />
      <div className='d-flex flex-column'>
        <p className={styleGlobal.mr_3}>{product.title}</p>
        <p className={clx(style.price_product)}>{priceFormatted(product.price)}</p>
      </div>
    </>
  )
}

export default InfoProduct
