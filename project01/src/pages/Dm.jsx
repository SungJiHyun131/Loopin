import React from 'react'
import DmHeader from '../components/DmHeader'
import {Routes, Route } from 'react-router-dom';

const Dm = () => {
  return (
    <div>
       <div className="DmHeader">
        <DmHeader/>
      </div>
      <div className="container">
      <h1>DM페이지 입니다</h1>
      </div>
    </div>
  )
}










<Route path="DmHeader" element={<DmHeader/>} />

export default Dm
