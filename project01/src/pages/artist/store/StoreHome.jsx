import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import StoreHeader from '../../../components/StoreHeader';
const StoreHome = () => {
    const location =useLocation();
  return (
    <div>
       <div className="StoreHeader">
        <StoreHeader/>
      </div>
      <div className="container StoreHome">
        <Link to='/StoreDetail'>스토어상세 ㄱㄱ</Link>
      </div>
    </div>
  )
}
<Route path="StoreHeader" element={<StoreHeader/>} />
export default StoreHome
