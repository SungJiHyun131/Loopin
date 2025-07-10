import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
import more from '../assets/img/header_more.png'

const MyArchiveHeader = () => {
    const navigate = useNavigate();
  return (
    <header className='more'>
        <button className="back-button" onClick={()=> navigate('/MoreHome')}><img src={back} alt="" /></button>
        <h2 className="title">내 아카이브</h2>
        <p className="more-button"><a href=""><img src={more} alt="" /></a></p> 
    </header>
  )
}

export default MyArchiveHeader
