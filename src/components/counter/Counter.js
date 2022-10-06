import React from 'react'
import { useDispatch } from 'react-redux';
import { addQuantity, subtractQuantity } from '../../redux/state/cart';
import style from "./style.module.css";

const Counter = ({ quantity, idProduct, stock }) => {

  const dispatch = useDispatch();

  const handleAddQuantityProductToCart = () => {
    dispatch(addQuantity({ id: idProduct, quantity: 1 }));
  }

  const handleSubtractQuantityProductToCart = () => {
    dispatch(subtractQuantity({ id: idProduct, quantity: 1 }));
  }

  return (
    <div>
      <button disabled={quantity <= 1} onClick={handleSubtractQuantityProductToCart} className={style.button_substract}>-</button>
      <span >{quantity}</span>
      <button disabled={stock === quantity} onClick={handleAddQuantityProductToCart} className={style.button_add}>+</button>
    </div>
  )
}

export default Counter
