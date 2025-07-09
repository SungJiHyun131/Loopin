import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyArchiveHeader = () => {
    const navigate = useNavigate();
  return (
    <header className='header-container'>
        <button className="back-button" onClick={()=> navigate(-1)}>«</button>
        <h2 className="title">내 아카이브</h2>
        <a href="">➕</a>
    </header>
  )
}

export default MyArchiveHeader
