import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const FanHome = () => {
      const location =useLocation();
  return (
    <div>
      <p><Link to='/FanPostDetail'>성지현</Link></p>
      <Link to='/FanPostWrite'>염혜리</Link>
    </div>
  )
}

export default FanHome
