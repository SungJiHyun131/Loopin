import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import post1 from '../../../assets/img/IllitHomeimg/postimg/post1.png';
import post2 from '../../../assets/img/IllitHomeimg/postimg/post2.png';
import post3 from '../../../assets/img/IllitHomeimg/postimg/post3.png';
import postmj1 from '../../../assets/img/IllitHomeimg/postimg/postmj1.png';
import postmj2 from '../../../assets/img/IllitHomeimg/postimg/postmj2.png';
import postmk1 from '../../../assets/img/IllitHomeimg/postimg/postmk1.png';
import postmk2 from '../../../assets/img/IllitHomeimg/postimg/postmk2.png';
import postmk3 from '../../../assets/img/IllitHomeimg/postimg/postmk3.png';
import postmk4 from '../../../assets/img/IllitHomeimg/postimg/postmk4.png';
import postih1 from '../../../assets/img/IllitHomeimg/postimg/postih1.png';
import postih2 from '../../../assets/img/IllitHomeimg/postimg/postih2.png';
import postih3 from '../../../assets/img/IllitHomeimg/postimg/postih3.png';
import postih4 from '../../../assets/img/IllitHomeimg/postimg/postih4.png';
import postyn1 from '../../../assets/img/IllitHomeimg/postimg/postyn1.png';
import postyn2 from '../../../assets/img/IllitHomeimg/postimg/postyn2.png';
import postyn3 from '../../../assets/img/IllitHomeimg/postimg/postyn3.png';
import pr1 from '../../../assets/img/IllitHomeimg/postimg/pr1.png';
import pr2 from '../../../assets/img/IllitHomeimg/postimg/pr2.png';
import pr3 from '../../../assets/img/IllitHomeimg/postimg/pr3.png';
import pr4 from '../../../assets/img/IllitHomeimg/postimg/pr4.png';
import pr5 from '../../../assets/img/IllitHomeimg/postimg/pr5.png';
import pr6 from '../../../assets/img/IllitHomeimg/postimg/pr6.png';
import pr7 from '../../../assets/img/IllitHomeimg/postimg/pr7.png';
import pr from '../../../assets/img/IllitHomeimg/postimg/profile.png';
import mypr from '../../../assets/img/IllitHomeimg/postimg/mypr.png';
import bgtop from '../../../assets/img/bg-top.png';
import FanHeader2 from '../../../components/FanHeader2';
import './FanPostView.css'
import heart from '../../../assets/img/IllitHomeimg/postimg/heart.png'
import comment from '../../../assets/img/IllitHomeimg/postimg/comment.png'
import mark from '../../../assets/img/IllitHomeimg/postimg/mark.png'
import more from '../../../assets/img/IllitHomeimg/postimg/more.png'
import send from '../../../assets/img/Fanimg/send.png'
import Comment from '../../../components/Comment';

const dummyPosts = [  {
    user: {
      name: '아일릿쫀득단지 💜',
      profileImg: pr,
      time: '10분 전',
    },
    text: `원희야 오늘도 무대에서 너무 빛났어 ✨
너의 웃음 하나에 하루 피로가 싹 풀리는 기분이야.
항상 응원하고 있어, 무리하지 말고 건강 꼭 챙겨!
앞으로도 쭉 함께할게 💖`,
    images: [post1, post2, post3],  // import한 이미지 변수 넣기
    likes: 16,
    comments: 4,
  },
  {
    user: {
      name: '고막요정러버',
      profileImg: pr1,
      time: '16분 전',
    },
    text: `모카 노래 들으면 모든 게 리셋되는 기분이야🔄
너 목소리는 힐링 그 자체… 약간 반칙 아님? 😭
덕분에 오늘도 버텼다 고마워 진짜♥️`,
    images: [postmk1, postmk2, postmk3,postmk4],  // import한 이미지 변수 넣기
    likes: 10,
    comments: 4,
  },
    {
    user: {
      name: '민쥬러버덕 💜',
      profileImg: pr2,
      time: '24분 전',
    },
    text: `이 편지를 읽고 있다면... 넌 진짜 최고야!
비쥬얼, 춤, 라이브 뭐 하나 빠지는 게 없는 울 민주ㅠ
너 덕분에 심장아 나대지마 상태`,
    images: [postmj1, postmj2],  // import한 이미지 변수 넣기
    likes: 16,
    comments: 24,
  },
   
    {
    user: {
      name: '이로로하돌돌이',
      profileImg: pr3,
      time: '30분 전',
    },
    text: `로로로하야 넌 존재 자체가 뽀짝뽀짝 러블리함 그 자체🍭
요즘 로하한테 푹 빠져서 정신 못 차리는 중😵‍💫
이 세상 텐션 아냐 너… 널 보면 그`,
    images: [postih1, postih2, postih3,postih4],  // import한 이미지 변수 넣기
    likes: 5,
    comments: 8,
  },
    {
    user: {
      name: '밤하늘윤아',
      profileImg: pr4,
      time: '1시간 전',
    },
    text: `윤아야 넌 무대 위에서 별이야 진짜🌟
한 번 빠지면 헤어나올 수 없는 윤아 매직
오늘도 너 덕분에 내 하루는 완벽했어💯`,
    images: [postyn1, postyn2, postyn3],  // import한 이미지 변수 넣기
    likes: 3,
    comments: 8,
  },];

const FanPostView = () => {
    const [comments, setComments] = useState([
        {
          id: 1,
          userImg: pr,
          userName: '햄보르기니',
          isArtist: true,
          text: '@아일릿쫀득단지 꺄악!! 이런 따뜻한 말 해줘서 너무 고마워 건강도 체력도 책임질게!! 우리 오래오래 함께해 🍑',
          time: '3분 전',
          likeCount:1,
          isReply: false,
        },
        {
          id: 2,
          userImg: pr6,
          userName: '햇살비비',
          isArtist: false,
          text: '으악 원희 댓글 실화냐고😭 진짜 이렇게 팬들 챙기는 거... 사랑받을 수밖에 없다구요💓 평생 덕질 예약입니다💗',
          time: '1분 전',
          likeCount: 2,
          isReply: false,
        },
      ]);
      const [inputValue, setInputValue] = useState('');
      const handleAddComment = () => {
        if (!inputValue.trim()) return;
        const newComment = {
          id: comments.length + 1,
          userImg: mypr,
          userName: '루핀즈',
          isArtist: false,
          text: inputValue,
          time: '방금 전',
          likeCount: 0,
          isReply: false,
        };
        setComments([newComment, ...comments]);
        setInputValue('');
      };
    
  const { id } = useParams();
  const post = dummyPosts[id];

  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  return (
    <div className="Postcontainer">
     <div className="fanpostbg">
            <img src={bgtop} alt="" />
          </div>
    <div className="FanHeader2">
    <FanHeader2 />
  </div>
  <div className="fan-post-view">
  {/* 헤더 */}
  <div className="post-header">
    <div className="left-group">
      <img src={post.user.profileImg} alt="profile" className="profile-img" />
      <div className="user-info">
        <div className="username">{post.user.name}</div>
        <div className="time">{post.user.time}</div>
      </div>
    </div>
     <div className="morebtn"><img src={more} alt="" /></div>
  </div>

  {/* 본문 */}
  <div className="post-text">
    <p>{post.text}</p>
  </div>

  {/* 이미지 */}
  <div className="post-images">
    {post.images.map((img, idx) => (
      <img key={idx} src={img} alt={`image${idx}`} />
    ))}
  </div>

  {/* 좋아요 & 댓글 카운트 */}
  <div className="post-footer">
    <div className="footer-left">
      <span><img src={heart} alt="" /> {post.likes}</span>
      <span><img src={comment} alt="" /> {post.comments}</span>
    </div>
     <div className="footer-right"><img src={mark} alt="" /></div>
  </div>

  {/* 댓글 영역 (가상 데이터 예시) */}
  <div className="comment-list">
  <div className="comment-list">
        {comments.map((c) => (
          <Comment key={c.id} {...c} />
        ))}
      </div>
    {/* 댓글 반복 */}
  </div>

  {/* 댓글 입력창 */}
  <div className="comment-input">
    <input type="text" placeholder="댓글을 입력하세요."   value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
     <button onClick={handleAddComment}>
          <img src={send} alt="보내기" />
        </button>
  </div>
</div>
    </div>
  );
};

export default FanPostView;