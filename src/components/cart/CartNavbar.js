import React, { Fragment } from 'react'
import ItemCart from './ItemCart/ItemCart';
import style from "./style.module.css";
import globalStyle from "../../global-style/style.module.css";
import { BsXLg } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, selectCart } from '../../redux/state/cart';
import { priceFormatted, totalPrice } from '../../utilities';


const CartNavbar = ({ handleBoxLeaveToggle }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart } = useSelector(selectCart);

  const handleGoToCart = () => {
    navigate("/cart");
    handleBoxLeaveToggle();
  }

  const handlerClearCart = () => {
    dispatch(clearCart());
    handleBoxLeaveToggle();
  }

  return (
    <div className={style.show_cart} onMouseLeave={handleBoxLeaveToggle}>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className="my-5">Cart</h2>
        <BsXLg className={globalStyle.cursor_pointer} onClick={handleBoxLeaveToggle} />
      </div>
      {
        cart.length > 0
          ?
          <Fragment>
            {cart.map((item, index) => (
              <ItemCart product={item} key={index} />
            ))}
            <hr />
            <div className='d-flex m-5 justify-content-center '>
              <h5 className={style.title_total}>Total: <span className={style.total_price}>{priceFormatted(totalPrice(cart))}</span></h5>
            </div>
            <button onClick={handleGoToCart} className={style.button_cart}>Ir al carrito</button>
            <button onClick={handlerClearCart} className='mt-3'>Vaciar carrito</button>
          </Fragment>
          :
          <div className='d-flex justify-content-center align-items-center h-50'>
            <p className={style.empty_cart}>Carrito Vacío</p>
          </div>
      }

    </div>
  )
}

export default CartNavbar
