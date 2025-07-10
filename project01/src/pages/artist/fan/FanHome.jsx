import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import FanHeader from '../../../components/FanHeader';
const FanHome = () => {
      const location =useLocation();
  return (
    <div>
        <div className="FanHeader">
        <FanHeader/>
      </div>
      <div className="container FanHome">
      <p><Link to='/FanPostDetail'>팬레터</Link></p>
      <Link to='/FanPostWrite'>비밀레터</Link>
      </div>
    </div>
  )
}
<Route path="FanHeader" element={<FanHeader/>} />
export default FanHome
