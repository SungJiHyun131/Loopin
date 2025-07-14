import React from 'react';
import PostCard from '../../../components/PostCard';
import post1 from '../../../assets/img/IllitHomeimg/postimg/post1.png';
import post2 from '../../../assets/img/IllitHomeimg/postimg/post2.png';
import post3 from '../../../assets/img/IllitHomeimg/postimg/post3.png';

const FanPostDetail = () => {
  const dummyPost = {
    user: {
      name: '아일릿쫀득단지 💜',
      profileImg: '/images/profile1.jpg',
      time: '10분 전',
    },
    text: `원희야 오늘도 무대에서 너무 빛났어 ✨
너의 웃음 하나에 하루 피로가 싹 풀리는 기분이야.
항상 응원하고 있어, 무리하지 말고 🥹`,
    images: [post1, post2, post3],  // import한 이미지 변수 넣기
    likes: 16,
    comments: 4,
  };

  return (
    <div className="fan-post-detail-container">
      <PostCard {...dummyPost} />
    </div>
  );
};

export default FanPostDetail;