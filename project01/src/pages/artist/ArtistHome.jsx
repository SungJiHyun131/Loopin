import React from 'react'
import {Link, useLocation} from 'react-router-dom'


const ArtistHome = () => {
    const location =useLocation();
  return (
    <div>
      <h1>Illit</h1>
      <nav>
                <ul>
                <li><Link to="/IllitHome">Artist</Link></li>
                <li><Link to="/FanHome">Fan</Link></li>
                <li><Link to="/LiveHome">Live</Link></li>
                <li><Link to="/MediaHome">Media</Link></li>
                <li><Link to="/StoreHome">Store</Link></li>
                <li><Link to="/NoticeHome">Notice</Link></li>
                </ul>
            </nav>
    </div>
  )
}

export default ArtistHome
