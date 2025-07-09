import React from 'react'
import wish from '../assets/img/image 1112.png'
import aespa from '../assets/img/image 1113.png'
import illit from '../assets/img/image 1114.png'
import riize from '../assets/img/image 1115.png'
import enhypen from '../assets/img/image 1116.png'
import {Link, useLocation} from 'react-router-dom'


const ArtistCard = () => {
    const location =useLocation();
  return (
    <div>
       <img src={wish} alt="" />
      <img src={aespa} alt="" />
     <Link to='/ArtistHome'> <img src={illit} alt="" /></Link>
      <img src={riize} alt="" />
      <img src={enhypen} alt="" />
    </div>
  )
}

export default ArtistCard
