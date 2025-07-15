import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import ArtistHeader from '../../../components/ArtistHeader';
import NewMv from '../../../components/NewMv';
import Albums from '../../../components/Albums';
import Post from '../../../components/illitPostcard';
import './IllitHome.css'

const IllitHome = () => {
     const location =useLocation();
  return (
    <div>
      <div className="ArtistHeader">
        <ArtistHeader/>
      </div>
      <div className="container IllitHome">
        <div className="NewMv">
          <NewMv/>
        </div>
        <div className="Albums">
          <Albums/>
        </div>
        <div className="Posts">
          <Post/>
       
        </div>
      </div>
    </div>
  )
}

export default IllitHome
