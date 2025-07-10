import React from 'react'
import {Route} from 'react-router-dom'
import ArtistHeader2 from '../../../components/ArtistHeader2';
const ArtistProfile = () => {
  return (
    <div>
      <div className="ArtistHeader">
        <ArtistHeader2/>
      </div>
      <div className="container artistprofile">
        dddd
      </div>
    </div>
  )
}
<Route path="ArtistHeader2" element={<ArtistHeader2/>} />

export default ArtistProfile
