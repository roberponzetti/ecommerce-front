import React from 'react'
import ItemCart from './ItemCart/ItemCart';
import style from "./style.module.css";

const CartNavbar = ({ handleBoxLeaveToggle }) => {
  return (
    <div className={style.show_cart} onMouseLeave={handleBoxLeaveToggle}>
      <h3 className="my-5">Cart</h3>
      {[1, 2, 3].map((item, index) => (
        <ItemCart product={item} key={index} />
      ))}
      <hr />
      <div className='d-flex m-5 justify-content-center '>
        <h5 className={style.title_total}>Total: <span className={style.total_price}>$ 5,500</span></h5>
      </div>
      <button className={style.button_cart}>Ir al carrito</button>
    </div>
  )
}

export default CartNavbar
