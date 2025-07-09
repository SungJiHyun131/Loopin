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
      <p><Link to='/FanPostDetail'>성지현</Link></p>
      <Link to='/FanPostWrite'>염혜리</Link>
    </div>
  )
}
<Route path="FanHeader" element={<FanHeader/>} />
export default FanHome
