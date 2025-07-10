import React from 'react'
import {Link,Route} from 'react-router-dom'
import SubscribeHeader2 from '../../components/SubscribeHeader2'

const SubscribeSelect = () => {
  return (
    <div>
    <div className="SubscribeHeader2">
        <SubscribeHeader2/>
      </div>
     <div className="container SubscribeSelect">
        <Link to='/SubscribeSelectDetail'>선택완료버튼임</Link>
        </div>
    </div>
  )
}

export default SubscribeSelect