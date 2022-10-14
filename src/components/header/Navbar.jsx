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

const NavbarItem = () => {
  const dispatch = useDispatch()
  const { cart, openCart } = useSelector(selectCart);

  const totalQuantity = cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);

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
            Home
          </Link>
          <Link className={clx(style.outline, style.item_nav)} to="/login">
            <BiLogInCircle className={globalStyle.mr_1} />
            login
          </Link>
        </div>
        <div className="d-flex align-items-center text-white fw-bold">
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
