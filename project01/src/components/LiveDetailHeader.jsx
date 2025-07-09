import React from 'react'
import { useNavigate } from 'react-router-dom';
const LiveDetailHeader = () => {
     const navigate = useNavigate();
  return (
    <div>
       <header className='header-container'>
        <button className="back-button" onClick={()=> navigate('/LiveHome')}>X</button>
        <h2 className="title">LIVE</h2>
        <a href="">➕</a>
        </header>
    </div>
  )
}

export default LiveDetailHeader
