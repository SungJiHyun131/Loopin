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
      <Link to='/StoreDetail'>스토어상세 ㄱㄱ</Link>
    </div>
  )
}
<Route path="StoreHeader" element={<StoreHeader/>} />
export default StoreHome
