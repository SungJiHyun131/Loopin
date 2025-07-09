import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const IllitHome = () => {
     const location =useLocation();
  return (
    <div>
      <Link to='/ArtistProfile'>원희</Link>
    </div>
  )
}

export default IllitHome
