import React from 'react'
import { Route} from 'react-router-dom'
import StoreHeader2 from '../../../components/StoreHeader2';
import './StoreDetail.css';

import img1 from '../../../assets/img/Storeimg/Detail/img1.png'
import heart from '../../../assets/img/Storeimg/Detail/icon_heart.png'
import share from '../../../assets/img/Storeimg/Detail/icon_share.png'
import warning from '../../../assets/img/Storeimg/Detail/icon_warning.png'

import img2 from '../../../assets/img/Storeimg/Detail/img2.png'
import title from '../../../assets/img/Storeimg/Detail/GlitterDay.png'

import Detail1 from '../../../assets/img/Storeimg/Detail/Detail1.png'
import Detail2 from '../../../assets/img/Storeimg/Detail/Detail2.png'
import ex1 from '../../../assets/img/Storeimg/Detail/ex1.png'
import ex2 from '../../../assets/img/Storeimg/Detail/ex2.png'
import front from '../../../assets/img/Storeimg/Detail/front.png'
import back from '../../../assets/img/Storeimg/Detail/back.png'

const StoreDetail = () => {
  return (
    <div>
      <div className="StoreHeader">
        <StoreHeader2/>
      </div>
      <div className="container StoreDetail">
        <div className="TopBox">
          <img src={img1} alt="" className='img1'/>
          <div className="ProductInfo">
            <div className="top">
              <p className="name">KEYRING</p>
              <div className="icon">
                <img src={heart} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
            <div className="tag">
              <p className="blue">단독판매</p>
              <p className="KR발송">KR발송</p>
            </div>
            <h3 className="price">₩20,000</h3>
          </div>
          <div className="Warn1">
            <p className='tit'><img src={warning} alt="" /> 판매공지</p>
            <p className='txt'>최대 구매 수량은 3개 입니다.</p>
          </div>
        </div>
        <div className="MiddleBox">
          <p className='title'><img src={title} alt=""/></p>
          <p className='img2'><img src={img2} alt=""/></p>
          <div className="textBox">
            <p className="bold">2025 ILLIT GLITTER DAY IN SEOUL<br />콘셉트를 담은 키링입니다.</p>
            <p className="light">This is a Keyring<br />feauring the 2025 ILIIT GILLTER DAY IN SEOUL concept</p>
          </div>
          <p className="Detail1"><img src={Detail1} alt=""/></p>
          <div className="textBox">
            <p className="bold">메탈소재의 키링으로,<br />볼륨감과 무게감이 있는 구름 모양의 메인참에<br />GLITTER DAY 로고가 각인되어 있습니다.</p>
            <p className="light">The metal keyring features a voluminous,<br />heavy cloud-shaped main charm<br /> with the GLITTER DAY logo engraved on it.</p>
          </div>
          <p className="Detail2"><img src={Detail2} alt="" /></p>
          <div className="textBox">
            <p className="bold">팬미팅 콘셉트에 맞춘 하늘색 컬러의 별모양 서브 참은<br />아일릿 로고가 각인된 미니참과 함께 연결되어 있습니다.</p>
            <p className="light">The star-shaped sub-charm in light blue matches<br />the fanmeeting’s concept, and is connected<br />to the mini charm engraved with the ILLIT logo.</p>
          </div>
          <div className="ex">
            <img src={ex1} alt="" className='ex1'/>
            <img src={ex2} alt="" className='ex2'/>
          </div>
          <div className="textBox">
            <p className="bold">가방에 달거나 오브제로도 활용해 보세요.</p>
            <p className="light">Try using it as a bag charm or decorative object.</p>
          </div>
          <div className="final">
            <div className="front">
              <img src={front} alt="" />
              <p>front</p>
            </div>
            <div className="back">
              <img src={back} alt="" />
              <p>back</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}
<Route path="StoreHeader2" element={<StoreHeader2/>} />
export default StoreDetail
