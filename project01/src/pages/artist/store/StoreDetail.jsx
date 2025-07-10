import React from 'react'
import { Route} from 'react-router-dom'
import StoreHeader2 from '../../../components/StoreHeader2';
const StoreDetail = () => {
  return (
    <div>
      <div className="StoreHeader">
        <StoreHeader2/>
      </div>
      <div className="container StoreHeader">
      굿즈상세요
      </div>
    </div>
  )
}
<Route path="StoreHeader2" element={<StoreHeader2/>} />
export default StoreDetail
