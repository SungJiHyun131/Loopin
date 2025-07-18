import React, { useState } from 'react';
import heartOn from '../assets/img/Storeimg/icon_heart-on.png';  // 꽉 찬 하트 이미지 경로
import heartOff from '../assets/img/Storeimg/icon_heart-off.png';  // 빈 하트 이미지 경로
import './LikeButton.css'

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <img
      src={liked ? heartOn : heartOff}
      alt="like button"
      onClick={handleClick}
      style={{ width: '30px', cursor: 'pointer' }}
      className="like-icon"
    />
  );
};

export default LikeButton;