import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import StoreHeader from '../../../components/StoreHeader';
import banner from '../../../assets/img/StoreImg/Store.png'


const StoreHome = () => {
    const location =useLocation();
  return (
    <div>
       <div className="StoreHeader">
        <StoreHeader/>
      </div>
      <div className="container StoreHome">
        <div className="banner">
          <img src={banner} alt="" />
          <h3>2025 ILLIT GLITTER <br />DAY IN SEOUL</h3>
          <p>공식 상품을 만나보세요</p>
        </div>
        <div className="Products">
          <h3>Products</h3>
          <div className="Big">
            <ul>
            <li>MERCH</li>
            <li>TOUR MERCH</li>
            <li>ALBUM</li>
            <li>MAGAZINE</li>
            <li>GLOBAL MEMBERSHIP</li>
            <li>JAPAN MEMBERSHIP</li>
          </ul>
          </div> 
          <div className="Small">
            <ul>
              <li>ALL</li>
              <li>bomb</li>
              <li>1st Anniversary</li>
              <li>Official Merch</li>
              <li>I’LL LIKE YOU</li>
              <li>SUPER REAL ME</li>
            </ul>
          </div> 
          <div className="Goods">
            <ul>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
        <Link to='/StoreDetail'>스토어상세 ㄱㄱ</Link>
      </div>
    </div>
  )
}
<Route path="StoreHeader" element={<StoreHeader/>} />
export default StoreHome
