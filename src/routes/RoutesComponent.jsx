import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/not-found/NotFound'
import {routes} from "../pages/routes"
import Layout from '../components/Layout/Layout'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent