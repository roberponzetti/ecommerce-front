import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarItem from '../header/NavbarItem'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
      <NavbarItem />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout