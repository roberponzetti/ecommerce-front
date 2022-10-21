import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { openCartNavbar, selectCart } from "../../redux/state/cart";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import CartNavbar from "../cart/CartNavbar";
import clx from "classnames";
import style from "./style.module.css";
import globalStyle from "../../global-style/style.module.css"
import { priceFormatted, totalPrice } from "../../utilities";
import { logoutUser, selectAuth } from "../../redux/state/auth";
import { FaUser } from "react-icons/fa";

const NavbarItem = () => {
  const dispatch = useDispatch()
  const { cart, openCart } = useSelector(selectCart);
  const { user } = useSelector(selectAuth);

  const totalQuantity = cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  const handleBoxToggle = () => {
    dispatch(openCartNavbar(true))
  }

  const handleBoxLeaveToggle = () => {
    dispatch(openCartNavbar(false))
  }

  return (
    <Navbar variant="dark" className={style.navBar}>
      <Container>
        {openCart && <div className={style.overlay}></div>}
        <div className="d-flex justify-content-center align-items-center">
          <Link className={clx(style.brand, "d-flex align-items-center")} to="/">
            <AiOutlineHome className={globalStyle.mr_1} />
            Inicio
          </Link>
          {user ?
            <Link className={clx(style.outline, style.item_nav)} onClick={handleLogout}>
              <RiLogoutCircleLine className={globalStyle.mr_1} />
              Cerrar sesión
            </Link>
            :
            <Link className={clx(style.outline, style.item_nav)} to="/login">
              <BiLogInCircle className={globalStyle.mr_1} />
              Iniciar sesión
            </Link>
          }
        </div>
        <div className="d-flex align-items-center text-white ">
          <div className="me-5 d-flex align-items-center justify-content-start">
            {user &&
              <>
                <FaUser className='me-3' size={25} />
                <div>
                  <p className="text-white text-start m-0 p-0 fw-bold">¡HOLA!</p>
                  <p className="text-white m-0 p-0 font-weight-light">{user?.displayName ? user.displayName : user?.email}</p>
                </div>
              </>
            }
          </div>
          <Link className={clx(style.item_nav)} onMouseOver={handleBoxToggle} to="/cart">
            <AiOutlineShoppingCart className={globalStyle.mr_1} size={25} />
            <span className={clx(style.badge, "rounded-pill", "badge-notification")}>
              {totalQuantity}
            </span>
          </Link>
          <span>{priceFormatted(totalPrice(cart))}</span>
        </div>
        {openCart && <CartNavbar handleBoxLeaveToggle={handleBoxLeaveToggle} />}
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
