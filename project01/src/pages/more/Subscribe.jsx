import React from 'react'
import {Route} from 'react-router-dom'
import SubscribeHeader from '../../components/SubscribeHeader'

const Subscribe = () => {
  return (
    <div>
       <div className="SubscribeHeader">
        <SubscribeHeader/>
      </div>
      구독권사세용
    </div>
  )
}
<Route path="SubscribeHeader" element={<SubscribeHeader/>}/>
export default Subscribe
