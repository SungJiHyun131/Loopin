import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'

const NoticeHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
     <header className='notice'>
           <button className="back-button" onClick={()=> navigate('/ArtistHome')}><img src={back} alt="" /></button>
           <h2 className="title">NOTICE</h2>
           <p className="more-button">more</p> 
         </header>
    </div>
  )
}

export default NoticeHeader
