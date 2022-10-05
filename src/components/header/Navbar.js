import React from "react";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartNavbar from "../cart/CartNavbar";
import classNames from "classnames";
import style from "./style.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { selectCart } from "../../redux/state/cart";
import { useSelector } from "react-redux";

const NavbarItem = () => {

  const [hoverCart, setHoverCart] = useState(false);
  const { cart } = useSelector(selectCart);

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
          <Link className={style.brand} to="/">
            Home
          </Link>
          <Link className={classNames(style.outline, style.item_nav)} to="/login">
            login
          </Link>
        </div>
        <Link className={classNames(style.outline, style.item_nav)} onMouseOver={handleBoxToggle} to="/cart">
          <BsFillCartFill size={25} />

          <span className={classNames(style.badge, "rounded-pill", "badge-notification")}>
            {cart.length}
          </span>

        </Link>
        {hoverCart && <CartNavbar handleBoxLeaveToggle={handleBoxLeaveToggle} />}
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
