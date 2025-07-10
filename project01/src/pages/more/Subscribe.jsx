import React from 'react'
import {Link,Route} from 'react-router-dom'
import SubscribeHeader from '../../components/SubscribeHeader'

const Subscribe = () => {
  
  return (
    <div>
       <div className="SubscribeHeader">
        <SubscribeHeader/>
      </div>
      <div className="container SubscribeHome">
      <Link to='/SubscribeSelect'>구독권1</Link>
      </div>
    </div>
  )
}
<Route path="SubscribeHeader" element={<SubscribeHeader/>}/>
export default Subscribe
