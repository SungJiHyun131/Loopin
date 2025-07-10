import React from 'react'
import {Route} from 'react-router-dom'
import FanHeader2 from '../../../components/FanHeader2';
const FanPostDetail = () => {
  return (
    <div>
        <div className="FanHeader">
        <FanHeader2/>
      </div>
    </div>
  )
}
<Route path="FanHeader2" element={<FanHeader2/>} />
export default FanPostDetail
