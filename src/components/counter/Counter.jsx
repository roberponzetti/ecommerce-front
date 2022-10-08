import React from 'react'
import style from "./style.module.css";
import clsx from 'classnames';

const Counter = ({ handleAddQuantity, currentAmount, product, handleSubtractQuantity }) => {

  return (
    <div>
      <button disabled={product?.quantity <= 1}
        onClick={handleSubtractQuantity}
        className={style.button_substract}>
        -
      </button>
      <span >{currentAmount}</span>
      <button
        disabled={product?.quantity === product?.stock}
        onClick={handleAddQuantity}
        className={clsx(style.button_add, { [style.error]: product?.quantity === product?.stock })}>
        +
      </button>
    </div>
  )
}

export default Counter
