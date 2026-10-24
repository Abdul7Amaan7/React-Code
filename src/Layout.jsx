import React from 'react'
import Header from './pages/component/Header'
import Footer from './pages/component/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>


  )
}

export default Layout