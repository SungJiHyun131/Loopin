import React from 'react'
import DmHeader from '../components/DmHeader'
import {Routes, Route } from 'react-router-dom';
import "./Dm.css"

import search from "../assets/img/DMImg/icon_search.png"
import P1 from "../assets/img/DMImg/모카.png"
import P2 from "../assets/img/DMImg/민주.png"
import P3 from "../assets/img/DMImg/정원.png"
import P4 from "../assets/img/DMImg/닝닝.png"
import P5 from "../assets/img/DMImg/제니.png"
import P6 from "../assets/img/DMImg/태산.png"
import P7 from "../assets/img/DMImg/승관.png"
import P8 from "../assets/img/DMImg/더보기.png"


const Dm = () => {
  
  return (
    <div className='bgdm'> 
       <div className="DmHeader">
        <DmHeader/>
      </div>
      <div className="container">
      <div className="message">
        <h3>메세지</h3>
        <ul>
          <li>
            <img src={P1} alt="" />
            <div className="right">
              <div className="top">
                <p className="name">모카</p>
                <p className="date">2025.07.08</p>
              </div>
              <p className="content">오늘 하루 어땠어? 난 너 생각하면서 노래 연습했어💛
                우리 무대에서 꼭 다시 만나자!!</p>
            </div>
          </li>
          <li>
            <img src={P2} alt="" />
            <div className="right">
              <div className="top">
                <p className="name">민주</p>
                <p className="date">2025.07.08</p>
              </div>
              <p className="content">오늘 연습 끗~</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="recommend">
        <h3>추천</h3>
        <ul>
          <li>
            <img src={P3} alt="" />
            <p>정원</p>
          </li>
          <li>
            <img src={P4} alt="" />
            <p>닝닝</p>
          </li>
          <li>
            <img src={P5} alt="" />
            <p>제니</p>
          </li>
          <li>
            <img src={P6} alt="" />
            <p>태산</p>
          </li>
          <li>
            <img src={P7} alt="" />
            <p>승관</p>
          </li>
          <li>
            <img src={P8} alt="" />
            <p>더보기</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}






<Route path="DmHeader" element={<DmHeader/>} />

export default Dm
