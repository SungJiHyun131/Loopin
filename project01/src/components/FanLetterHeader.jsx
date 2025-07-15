import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
import check from '../assets/img/check.png'

const FanLetterHeader = () => {
   const navigate = useNavigate();
    return (
      <div>
           <header className='more'>
                 <button className="back-button" onClick={()=> navigate(-1)}><img src={back} alt="" /></button>
                 <h2 className="title">레터작성 <span>illit</span></h2>
                <p className="more-button"><a href=""><img src={check} alt="" /></a></p> 
               </header>
      </div>
    )
}

export default FanLetterHeader
