import React from 'react'
import { useNavigate } from 'react-router-dom';

const SubscribeHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
          <header className='header-container'>
        <button className="back-button" onClick={()=> navigate('/MoreHome')}>«</button>
        <h2 className="title">구독권</h2>
    </header>
    </div>
  )
}

export default SubscribeHeader
