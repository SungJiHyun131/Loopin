import React from 'react'
import { useNavigate } from 'react-router-dom';

const AlarmHeader = () => {
    const navigate = useNavigate();
    return (
      <header className='header-container'>
          <button className="back-button" onClick={()=> navigate(-1)}>«</button>
          <h2 className="title">알림</h2>
      </header>
    )
}

export default AlarmHeader