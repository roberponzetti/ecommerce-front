import React from 'react'
import Counter from '../../counter/Counter'
import { BsTrash } from "react-icons/bs";
import InfoProduct from '../InfoProduct/InfoProduct';
import styleGlobal from '../../../global-style/style.module.css'
import { useDispatch } from 'react-redux';
import { addQuantity, deleteProduct, subtractQuantity } from '../../../redux/state/cart';

const ItemCart = ({ product }) => {

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  }

  const handleAddQuantityProductToCart = () => {
    dispatch(addQuantity({ id: product.id, quantity: 1, product }));
  }

  const handleSubtractQuantityProductToCart = () => {
    dispatch(subtractQuantity({ id: product.id, quantity: 1, product }));
  }

  return (
    <div className="d-flex justify-content-between mt-4 w-100 align-items-center flex-column flex-lg-row" >
      <InfoProduct product={product} />
      <div className='d-flex align-items-center justify-content-center mt-4 mt-md-0'>
        <Counter
          handleAddQuantity={handleAddQuantityProductToCart}
          handleSubtractQuantity={handleSubtractQuantityProductToCart}
          product={product}
          currentAmount={product.quantity}
        />
        <BsTrash onClick={handleDeleteProduct} className={styleGlobal.cursor_pointer} />
      </div>

    </div>
  )
}

export default ItemCart
