import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header.jsx/Header'
import Footer from './Components/Footer/Footer'

export default function Root() {
  return (
    <div>
    <Header></Header> 
    <Outlet></Outlet>
    <Footer></Footer>


    </div>
  )
}
