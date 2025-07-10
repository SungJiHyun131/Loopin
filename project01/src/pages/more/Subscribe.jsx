import React from 'react'
import {Link,Route} from 'react-router-dom'
import SubscribeHeader from '../../components/SubscribeHeader'
import './Subscribe.css';
import ticket1 from '../../assets/img/SubscribeImg/Subscription1.png'
import ticket2 from '../../assets/img/SubscribeImg/Subscription2.png'
import down from '../../assets/img/SubscribeImg/down.png'

const Subscribe = () => {
  
  return (
    <div>
       <div className="SubscribeHeader">
        <SubscribeHeader/>
      </div>
    <div className="container sub">
      <ul>
        <li><p><img src={ticket1} alt="" /></p> <Link to='/SubscribeSelect'>구독권1</Link></li>
        <li><p><img src={ticket2} alt="" /></p></li>
        <li className='btn'>이용안내<a href=""><img src={down} alt="" /></a></li>
        <li className='btn'>결제 유의사항<a href=""><img src={down} alt="" /></a></li>
        <li className='btn'>해지 · 환불 안내<a href=""><img src={down} alt="" /></a></li>
      </ul>
    </div>
    </div>
  )
}
<Route path="SubscribeHeader" element={<SubscribeHeader/>}/>
export default Subscribe
