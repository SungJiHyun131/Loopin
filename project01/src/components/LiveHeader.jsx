import React from 'react'
import { useNavigate } from 'react-router-dom';
const LiveHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
        <header className='header-container'>
        <button className="back-button" onClick={()=> navigate('/ArtistHome')}>«</button>
        <h2 className="title">LIVE</h2>
        </header>
    </div>
  )
}

export default LiveHeader
