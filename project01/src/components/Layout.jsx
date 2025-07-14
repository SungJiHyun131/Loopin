import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom';
import './Layout.css'

const Layout = () => {
  return (
    <div className='mainhome'>
    <Header/>
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
    <main style={{flex:1}}>
        <Outlet/>
    </main>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout
