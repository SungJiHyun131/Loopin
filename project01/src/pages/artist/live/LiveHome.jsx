import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import LiveHeader from '../../../components/LiveHeader';
const LiveHome = () => {
    const location =useLocation();
  return (
    <div>
      <div className="LiveHeader">
        <LiveHeader/>
      </div>
      <div className="container LiveHome">
      <Link to="/LiveDetail">라이브 들어오세요</Link>
      </div>
    </div>
  )
}
<Route path="LiveHeader" element={<LiveHeader/>} />
export default LiveHome
