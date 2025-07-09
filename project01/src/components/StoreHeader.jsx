import React from 'react'
import { useNavigate } from 'react-router-dom';

const StoreHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
       <header className='header-container'>
        <button className="back-button" onClick={()=> navigate(-1)}>«</button>
        <h2 className="title">STORE</h2>
        <a href="">❤</a>
        </header>
    </div>
  )
}

export default StoreHeader
