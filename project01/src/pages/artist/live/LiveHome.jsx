import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const LiveHome = () => {
    const location =useLocation();
  return (
    <div>
      <Link to="/LiveDetail">라이브 들어오세요</Link>
    </div>
  )
}

export default LiveHome
