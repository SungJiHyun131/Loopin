import React from 'react'
import {Route} from 'react-router-dom'
import ArtistHeader from '../../../components/ArtistHeader';
const ArtistProfile = () => {
  return (
    <div>
      <div className="ArtistHeader">
        <ArtistHeader/>
      </div>
      dddd
    </div>
  )
}
<Route path="ArtistHeader" element={<ArtistHeader/>} />
export default ArtistProfile
