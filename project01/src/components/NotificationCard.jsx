import React from 'react';
import './NotificationCard.css'; // (스타일 분리 시)

const NotificationCard = ({ userImg, name, message, time }) => {
  return (
    <div className="notification-card">
      <img src={userImg} alt={name} className="profile-img" />
      <div className="notification-content">
        <div className="notification-title">ILLIT</div>
        <div className="notification-message">
          {message} <span className="notification-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;