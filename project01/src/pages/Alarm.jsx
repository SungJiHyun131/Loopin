import React from 'react'
import {Routes, Route } from 'react-router-dom';
import AlarmHeader from '../components/AlarmHeader';
const Alarm = () => {
  return (
    <div>
    <div className="AlarmHeader">
      <AlarmHeader/>
    </div>
    <div className='container'>
      <div className="inner">
        <h1>알림페이지입니다.</h1>
      </div>
    </div>
  </div>
  )
}

<Route path="AlarmHeader" element={<AlarmHeader/>} />
export default Alarm
