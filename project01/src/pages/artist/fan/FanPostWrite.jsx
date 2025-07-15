import React from 'react'
import PostList from '../../../components/PostList';
import secret1 from '../../../assets/img/IllitHomeimg/postimg/secret1.png'
import secret2 from '../../../assets/img/IllitHomeimg/postimg/secret2.png'
import secret3 from '../../../assets/img/IllitHomeimg/postimg/secret3.png'
import secret4 from '../../../assets/img/IllitHomeimg/postimg/secret4.png'
import secret5 from '../../../assets/img/IllitHomeimg/postimg/secret5.png'
import secret6 from '../../../assets/img/IllitHomeimg/postimg/secret6.png'
import secret7 from '../../../assets/img/IllitHomeimg/postimg/secret7.png'
import secret8 from '../../../assets/img/IllitHomeimg/postimg/secret8.png'
import secret9 from '../../../assets/img/IllitHomeimg/postimg/secret9.png'
import secret10 from '../../../assets/img/IllitHomeimg/postimg/secret10.png'
import secret11 from '../../../assets/img/IllitHomeimg/postimg/secret11.png'
import secret12 from '../../../assets/img/IllitHomeimg/postimg/secret12.png'
import secret13 from '../../../assets/img/IllitHomeimg/postimg/secret13.png'
import secret14 from '../../../assets/img/IllitHomeimg/postimg/secret14.png'
import spr1 from '../../../assets/img/IllitHomeimg/postimg/spr1.png'
import spr2 from '../../../assets/img/IllitHomeimg/postimg/spr2.png'
import spr3 from '../../../assets/img/IllitHomeimg/postimg/spr3.png'
import spr4 from '../../../assets/img/IllitHomeimg/postimg/spr4.png'
import spr5 from '../../../assets/img/IllitHomeimg/postimg/spr5.png'
import './FanPostWrite.css'
const FanPostWrite = () => {
   const dummyPosts = [
      {
      user: {
        name: '원희빙의중 💦💨',
        profileImg: spr1,
        time: '10분 전',
      },
      text: `원희야 나 요즘 나도 모르게 너처럼 말해…
너무 많이 보다보니까 너 말투 따라하고 있더라
친구가 너 왜 갑자기 그렇게 말해? 
이래서, 어… 원희가 이렇게 말하거든… 했지 뭐😳`,
      images: [secret1],  // import한 이미지 변수 넣기
      likes: 1,
      comments: 4,
    },
      {
      user: {
        name: '유나밖엔몰라 🍒🤍',
        profileImg: spr2,
        time: '10분 전',
      },
      text: `유나 덕질하다 친구 잃을 뻔…
하루 종일 유나 얘기만 했더니 친구가 한마디 함
너 약간… 무서워… ㅎ… `,
      images: [secret2,secret3],  // import한 이미지 변수 넣기
      likes: 16,
      comments: 6,
    },
      {
      user: {
        name: '민주아찔러버 🌺',
        profileImg: spr3,
        time: '10분 전',
      },
      text: `민주 무대 보고 진짜 심장이 아찔했음
나 요즘 사람한테 심장 뛰는 거 민주 말고 없어
무대 위에선 진짜 다른 사람 같아…`,
      images: [secret11,secret12,secret13,secret14],  // import한 이미지 변수 넣기
      likes: 15,
      comments: 2,
    },
      {
      user: {
        name: '모카감성과몰입 💟',
        profileImg:spr4,
        time: '20분 전',
      },
      text: `모카 라이브 영상만 열 번 돌려봤다
세상에 이렇게 감성 찢는 보컬 또 없음
혼자 불 끄고 이어폰 꽂고 들으면... `,
      images: [ secret4,secret5,secret6,secret7],  // import한 이미지 변수 넣기
      likes: 3,
      comments: 4,
    },
      {
      user: {
        name: '로하바라기 🎀',
        profileImg: spr5,
        time: '10분 전',
      },
      text: `로하는 내 힐링이자 위로 그 자체지치고 속상한 날엔 꼭 나나 영상 봄보고 있으면 이유 없이 ‘괜찮아질 것 같...`,
      images: [secret8, secret9, secret10,],  // import한 이미지 변수 넣기
      likes: 6,
      comments: 6,
    },

  ]
  return (
    <div className='container FanPostWrite'>
<div className="fan-post-write-container">
      <PostList posts={dummyPosts} />
    </div>
    </div>
  )
}

export default FanPostWrite
