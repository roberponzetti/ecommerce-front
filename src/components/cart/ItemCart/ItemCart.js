import React from 'react'
import Counter from '../../counter/Counter'
import { BsTrash } from "react-icons/bs";
import InfoProduct from '../InfoProduct/InfoProduct';
import styleGlobal from '../../../global-style/style.module.css'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/state/cart';

const ItemCart = ({ product }) => {

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  }

  return (
    <div className="d-flex justify-content-between mt-4 w-100 align-items-center" >
      <InfoProduct product={product} />
      <div className='d-flex align-items-center'>
        <Counter quantity={product.quantity} idProduct={product.id} stock={product.stock} />
        <BsTrash onClick={handleDeleteProduct} className={styleGlobal.cursor_pointer} />
      </div>

    </div>
  )
}

export default ItemCart
