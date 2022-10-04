import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import style from "./style.module.css";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container_home}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
