import React from 'react'
import ItemCart from './ItemCart/ItemCart';
import style from "./style.module.css";
import globalStyle from "../../global-style/style.module.css";
import { BsXLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const CartNavbar = ({ handleBoxLeaveToggle }) => {

  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
    handleBoxLeaveToggle();
  }

  return (
    <div className={style.show_cart} onMouseLeave={handleBoxLeaveToggle}>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className="my-5">Cart</h2>
        <BsXLg className={globalStyle.cursor_pointer} onClick={handleBoxLeaveToggle} />
      </div>

      {[1, 2, 3].map((item, index) => (
        <ItemCart product={item} key={index} />
      ))}
      <hr />
      <div className='d-flex m-5 justify-content-center '>
        <h5 className={style.title_total}>Total: <span className={style.total_price}>$ 5,500</span></h5>
      </div>
      <button onClick={handleGoToCart} className={style.button_cart}>Ir al carrito</button>
    </div>
  )
}

export default CartNavbar
