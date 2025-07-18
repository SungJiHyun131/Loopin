import React from 'react';
import './Comment.css';

const Comment = ({ userImg, userName, isArtist, text, time, likeCount, isReply }) => {
  return (
    <div className={`comment-box ${isReply ? 'comment-reply' : ''}`}>
      <img src={userImg} alt="profile" className="comment-profile-img" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-user-name">{userName}</span>
          {isArtist && <span className="comment-artist-badge">✔️</span>}
          <span className="comment-time">{time}</span>
        </div>
        <p className="comment-text">{text}</p>
        <div className="comment-footer">
          <button className="comment-like-btn">❤️ {likeCount}</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

