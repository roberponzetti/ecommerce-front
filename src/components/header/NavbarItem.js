import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NavbarItem = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-4">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <Link className={style.brand} to="/">
            Home
          </Link>
          <Link className={`${style.outline} ${style.item_nav}`} to="/login">
            login
          </Link>
        </div>

        <Link className={`${style.outline} ${style.item_nav}`} to="/cart">
          Carrito
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
