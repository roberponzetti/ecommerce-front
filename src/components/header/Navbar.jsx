import React from "react";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { selectCart } from "../../redux/state/cart";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import CartNavbar from "../cart/CartNavbar";
import clx from "classnames";
import style from "./style.module.css";
import globalStyle from "../../global-style/style.module.css"
import { priceFormatted, totalPrice } from "../../utilities";

const NavbarItem = () => {

  const [hoverCart, setHoverCart] = useState(false);
  const { cart } = useSelector(selectCart);

  const totalQuantity = cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);

  console.log(totalQuantity);

  const handleBoxToggle = () => {
    setHoverCart(true)
  }

  const handleBoxLeaveToggle = () => {
    setHoverCart(false)
  }

  return (
    <Navbar variant="dark" className={style.navBar}>
      <Container>
        {hoverCart && <div className={style.overlay}></div>}
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
        {hoverCart && <CartNavbar handleBoxLeaveToggle={handleBoxLeaveToggle} />}
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
