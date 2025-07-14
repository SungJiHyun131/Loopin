import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import ArtistHeader from '../../../components/ArtistHeader';

const IllitHome = () => {
     const location =useLocation();
  return (
    <div>
      <div className="ArtistHeader">
        <ArtistHeader/>
      </div>
      <div className="container IllitHome">
        <div className="New"></div>
        <div className="Albums"></div>
        <div className="Posts">
        <Link to='/ArtistProfile'>원희</Link>
        </div>
      </div>
    </div>
  )
}

export default IllitHome
