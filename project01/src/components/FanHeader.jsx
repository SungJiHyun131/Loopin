import React from 'react'
import { useNavigate } from 'react-router-dom';

const FanHeader = () => {
const navigate = useNavigate();
  return (
    <div>
       <header className='header-container'>
        <button className="back-button" onClick={()=> navigate(-1)}>«</button>
        <h2 className="title">FAN</h2>
        </header>
    </div>
  )
}

export default FanHeader
