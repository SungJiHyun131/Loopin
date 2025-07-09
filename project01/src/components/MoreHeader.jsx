import React from 'react'
import { useNavigate } from 'react-router-dom';

const MoreHeader = () => {
    const navigate = useNavigate();
  return (
    <header className='header-container'>
        <button className="back-button" onClick={()=> navigate(-1)}>«</button>
        <h2 className="title">더보기</h2>
    </header>
  )
}

export default MoreHeader