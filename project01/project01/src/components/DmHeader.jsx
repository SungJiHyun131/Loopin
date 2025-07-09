import React from 'react'
import { useNavigate } from 'react-router-dom';

const DmHeader = () => {
    const navigate = useNavigate();
    return (
      <header className='header-container'>
          <button className="back-button" onClick={()=> navigate(-1)}>«</button>
          <h2 className="title">DM</h2>
      </header>
    )
}

export default DmHeader