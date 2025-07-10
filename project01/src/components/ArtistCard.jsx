import React from 'react'
import wish from '../assets/img/nctwish.png'
import aespa from '../assets/img/aespa.png'
import illit from '../assets/img/illit.png'
import blackpink from '../assets/img/blackpink.png'
import seventeen from '../assets/img/seventeen.png'
import promise9 from '../assets/img/promise9.png'
import {Link, useLocation} from 'react-router-dom'
import './ArtistCard.css'


const ArtistCard = () => {
    const location =useLocation();
  return (
    <div className='cardlist'>
      <ul>
     <li><Link to='/ArtistHome'> <img src={illit} alt="" /></Link></li>
     <li><a href=""><img src={wish} alt="" /></a></li>
     <li><a href=""><img src={aespa} alt="" /></a></li>
     <li><a href=""><img src={blackpink} alt="" /></a></li>
     <li><a href=""><img src={seventeen} alt="" /></a></li>
     <li><a href=""><img src={promise9} alt="" /></a></li>
     </ul>
    </div>
  )
}

export default ArtistCard
