import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArtistHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
       <header className='header-container'>
        <button className="back-button" onClick={()=> navigate(-1)}>«</button>
        <h2 className="title">ARTIST</h2>
    </header>
    </div>
  )
}

export default ArtistHeader
