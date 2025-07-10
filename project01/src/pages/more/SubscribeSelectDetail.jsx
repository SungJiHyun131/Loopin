import React from 'react'
import SubscribeHeader3 from '../../components/SubscribeHeader3'
import {Link,Route} from 'react-router-dom'
const SubscribeSelectDetail = () => {
  return (
    <div>
         <div className="SubscribeHeader3">
        <SubscribeHeader3/>
      </div>
        <div className="container SubscribeSelectDetail">
        <Link to='/PaymentLoading'>결제하기버튼임</Link>  
        </div>
    </div>
  )
}

export default SubscribeSelectDetail