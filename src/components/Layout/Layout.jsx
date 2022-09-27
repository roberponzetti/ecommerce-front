import React from "react";
import { Outlet } from "react-router-dom";
import NavbarItem from "../header/NavbarItem";
import Footer from "../footer/Footer";
import style from "./style.module.css";

const Layout = () => {
  return (
    <div>
      <NavbarItem />
      <div className={style.container_home}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
