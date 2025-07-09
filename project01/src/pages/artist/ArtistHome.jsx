import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import IllitHeader from '../../components/IllitHeader';

const ArtistHome = () => {
    const location =useLocation();
  return (
    <div>
      <div className="IllitHeader">
        <IllitHeader/>
      </div>
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
<Route path="IllitHeader" element={<IllitHeader/>} />
export default ArtistHome
