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
      <Link to='/ArtistProfile'>원희</Link>
    </div>
  )
}
<Route path="ArtistHeader" element={<ArtistHeader/>} />
export default IllitHome
