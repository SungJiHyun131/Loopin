import React from 'react'
import { Route} from 'react-router-dom'
import StoreHeader from '../../../components/StoreHeader';
const StoreDetail = () => {
  return (
    <div>
      <div className="StoreHeader">
        <StoreHeader/>
      </div>
      굿즈상세요
    </div>
  )
}
<Route path="StoreHeader" element={<StoreHeader/>} />
export default StoreDetail
