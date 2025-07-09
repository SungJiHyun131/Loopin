import React from 'react'
import {Route} from 'react-router-dom'
import LiveDetailHeader from '../../../components/LiveDetailHeader'
const LiveDetail = () => {
  return (
    <div>
      <div className="LiveDetailHeader">
        <LiveDetailHeader/>
      </div>
      라이브입니다.
    </div>
  )
}
<Route path="LiveDetailHeader" element={<LiveDetailHeader/>} />
export default LiveDetail
