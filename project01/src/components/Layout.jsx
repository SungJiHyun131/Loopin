import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
    <Header/>
    <div className='container' style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
    <main style={{flex:1}}>
        <Outlet/>
    </main>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout
