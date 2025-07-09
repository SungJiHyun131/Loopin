import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const StoreHome = () => {
    const location =useLocation();
  return (
    <div>
      <Link to='/StoreDetail'>스토어상세 ㄱㄱ</Link>
    </div>
  )
}

export default StoreHome
