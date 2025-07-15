import React from 'react'
import './Alarm.css'
import {Routes, Route } from 'react-router-dom';
import AlarmHeader from '../components/AlarmHeader';
import NotificationCard from '../components/NotificationCard';
import imgMj from'../assets/img/moreImg/minjupr.png';
import imgYn from'../assets/img/moreImg/yoonapr.png';
import imgWh from'../assets/img/moreImg/wonheepr.png';
import imgMk from'../assets/img/moreImg/mokapr.png';
import imgIh from'../assets/img/moreImg/ilohapr.png';

const todayNotifications = [
  { userImg: imgMj, name: '민주', message: '민주님이 게시물을 올렸습니다.', time: '3분 전' },
  { userImg: imgMj, name: '민주', message: '민주님이 댓글을 달았습니다.', time: '3분 전' },
  { userImg: imgIh, name: '이로하', message: '이로하님이 게시물을 올렸습니다.', time: '3분 전' },
  // 오늘 알림들...
];

const yesterdayNotifications = [
  { userImg: imgYn, name: '윤아', message: '윤아님이 게시물을 올렸습니다.', time: '1일' },
  { userImg: imgWh, name: '원희', message: '햄보르기니님이 게시물을 올렸습니다.', time: '1일' },
  // 어제 알림들...
];

const recentNotifications = [
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '2일 전' },
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '3일 전' },
  { userImg: imgWh, name: '원희', message: '원희님이 게시물을 올렸습니다.', time: '3일 전' },
  { userImg: imgMk, name: '모카', message: '모카님이 게시물을 올렸습니다.', time: '5일 전' },
  // 최근 30일 알림들...
];
const Alarm = () => {
  return (
    <div className='alarmhome'>
    <div className="AlarmHeader">
      <AlarmHeader/>
    </div>
    <div className='container Alarm'>
      <div className="inner">
      <p className="subtitle">Today</p>
          {todayNotifications.map((item, idx) => (
            <NotificationCard key={idx} {...item} />
          ))}
          
          <p className="subtitle">Yesterday</p>
          {yesterdayNotifications.map((item, idx) => (
            <NotificationCard key={idx} {...item} />
          ))}
          
          <p className="subtitle">최근 30일</p>
          {recentNotifications.map((item, idx) => (
            <NotificationCard key={idx} {...item} />
          ))}
      </div>
    </div>
  </div>
  )
}

export default Alarm
