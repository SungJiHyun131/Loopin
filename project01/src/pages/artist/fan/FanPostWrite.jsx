import React from 'react'
import {Route} from 'react-router-dom'
import FanHeader from '../../../components/FanHeader';
const FanPostWrite = () => {
  return (
    <div>
       <div className="FanHeader">
        <FanHeader/>
      </div>
    </div>
  )
}
<Route path="FanHeader" element={<FanHeader/>} />
export default FanPostWrite
