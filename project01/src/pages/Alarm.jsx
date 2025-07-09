import React from 'react'
import {Routes, Route } from 'react-router-dom';
import AlarmHeader from '../components/AlarmHeader';
const Alarm = () => {
  return (
    <div>
      <div className="AlarmHeader">
        <AlarmHeader/>
      </div>
      <h1>알림페이지입니다.</h1>
    </div>
  )
}

<Route path="AlarmHeader" element={<AlarmHeader/>} />
export default Alarm
