import React, { useState } from 'react';
import './PostCard.css';

const PostCard = ({ user, text, images, likes, comments }) => {
  const [showFullText, setShowFullText] = useState(false);

  const renderImages = () => {
    if (images.length === 1) {
      return <img src={images[0]} alt="" className="single-img" />;
    } else if (images.length === 2) {
      return (
        <div className="two-imgs">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      );
    } else if (images.length === 3) {
      return (
        <div className="three-imgs">
          <img src={images[0]} alt="" className="img-left" />
          <div className="img-right">
            <img src={images[1]} alt="" className="img-top" />
            <img src={images[2]} alt="" className="img-bottom" />
          </div>
        </div>
      );
    } else if (images.length === 4) {
      return (
        <div className="four-imgs">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={user.profileImg} alt="profile" className="profile-img" />
        <div className="user-info">
          <div className="username">{user.name}</div>
          <div className="time">{user.time}</div>
        </div>
      </div>

      <div className="post-text">
        <p className={showFullText ? 'full-text' : 'clamp-text'}>{text}</p>
        {!showFullText && (
          <button onClick={() => setShowFullText(true)} className="more-btn">
            더 보기
          </button>
        )}
      </div>

      <div className="post-images">{renderImages()}</div>

      <div className="post-footer">
        <div className="footer-left">
          <span>❤️ {likes}</span>
          <span>💬 {comments}</span>
        </div>
        <div className="footer-right">📤</div>
      </div>
    </div>
  );
};

export default PostCard;