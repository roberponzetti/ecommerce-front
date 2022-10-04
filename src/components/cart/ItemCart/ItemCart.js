import React from 'react'
import Counter from '../../counter/Counter'
import { BsTrash } from "react-icons/bs";
import InfoProduct from '../InfoProduct/InfoProduct';
import styleGlobal from '../../../global-style/style.module.css'

const ItemCart = ({ product }) => {

  return (
    <div className="d-flex justify-content-between mt-4 w-100 align-items-center" >
      <InfoProduct product={product} />
      <Counter countProduct={product} />
      <BsTrash className={styleGlobal.cursor_pointer} />
    </div>
  )
}

export default ItemCart
