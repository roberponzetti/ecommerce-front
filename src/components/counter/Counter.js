import React from 'react'
import style from "./style.module.css";

const Counter = ({ countProduct }) => {

  return (
    <div>
      <button className={style.button_add}>+</button>
      <span >{countProduct}</span>
      <button className={style.button_substract}>-</button>
    </div>
  )
}

export default Counter
