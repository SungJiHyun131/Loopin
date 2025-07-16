import React from 'react';
import './illitPostcard.css';
import PostCard2 from './PostCard2';
import post1 from '../assets/img/IllitHomeimg/artistimg/post1.png';
import post2 from '../assets/img/IllitHomeimg/artistimg/post2.png';
import post3 from '../assets/img/IllitHomeimg/artistimg/post3.png';


const illitPostcard = () => {
    const dummyPost = {
        user: {
          name: '햄보르기니',
          profileImg: '/images/profile1.jpg',
          time: '10분 전',
        },
        text: `🍓🎀🍓🎀
딸기 메이크업⸒⸒
요즘 내가 완전 빠진 메이크업..! 🍓`,
        images: [post1, post2, post3],  // import한 이미지 변수 넣기
        likes: 16,
        comments: 4,

      }
      const dummyPost2 = {
        user: {
          name: '햄보르기니',
          profileImg: '/images/profile1.jpg',
          time: '10분 전',
        },
        text: `원희야 오늘도 무대에서 너무 빛났어 ✨
    너의 웃음 하나에 하루 피로가 싹 풀리는 기분이야.
    항상 응원하고 있어, 무리하지 말고 건강 꼭 챙겨!
    앞으로도 쭉 함께할게 💖`,
        images: [post1, post2, post3],  // import한 이미지 변수 넣기
        likes: 16,
        comments: 4,

      }
    
      return (
        <div className="container-FanPostDetail">
        <div className="fan-post-detail-container">
        <p className="subtitle">Posts</p>
          <PostCard2 {...dummyPost} />
          <PostCard2 {...dummyPost2} />
        </div>
        </div>
      )
}

export default illitPostcard