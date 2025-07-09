import React from 'react'
import { useNavigate } from 'react-router-dom';

const MediaHeader = () => {
        const navigate = useNavigate();
  return (
    <div>
          <header className='header-container'>
        <button className="back-button" onClick={()=> navigate('/ArtistHome')}>«</button>
        <h2 className="title">Media</h2>
    </header>
    </div>
  )
}

export default MediaHeader
