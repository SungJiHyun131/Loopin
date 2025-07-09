import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const MediaHome = () => {
    const location =useLocation();
  return (
    <div>
      <Link to ='/MediaDetail'>미디어 상세 ㄱㄱ</Link>
    </div>
  )
}

export default MediaHome
