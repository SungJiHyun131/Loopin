// ArchiveD.jsx
import React from 'react';
import './ArchiveD.css';
import replyLine from '../../assets/img/archive/replyline.png';
import badge1 from '../../assets/img/archive/badge1.png';
import badge2 from '../../assets/img/archive/badge2.png';
import badge3 from '../../assets/img/archive/badge3.png';
import badge4 from '../../assets/img/archive/badge4.png';
import badge5 from '../../assets/img/archive/badge5.png';
import badge6 from '../../assets/img/archive/badge6.png';

const replies = [
  {
    username: '루핀즈 ',
    date: '07.01. 13:19',
    text: '맞아요... 진짜로'
  },
  {
    username: '루핀즈',
    date: '06.29. 11:49',
    text: '완전 기다려짐 🙏'
  },
  {
    username: '루핀즈',
    date: '06.28. 11:49',
    text: '역시 멘탈 잡을 땐 민쥬!!!'
  },
  {
    username: '루핀즈',
    date: '06.28. 11:56',
    text: '제니는 빛과 소금...'
  },
  {
    username: '루핀즈',
    date: '06.28. 10:28',
    text: '완전 공감!!'
  },
  {
    username: '루핀즈',
    date: '06.28. 10:25',
    text: '너무 너무 소중해!!!! 💜💜'
  }
];

const comments = [
  {
    username: 'illit♡온슬',
    text: '로하 오늘 직캠 보고 너무 감탄했어요... 표정 연기 대박',
    replies: [replies[0]],
    badge: badge1
  },
  {
    username: 'Aillune',
    text: '일넥곡들 모두 좋은 아침❤️ 후속곡 jeilyous 넘 기대',
    replies: [replies[1]],
    badge: badge2
  },
  {
    username: 'Rohaetic',
    text: '오늘 일박하다가 진짜 멘탈 무너질 뻔했는데, 쉬는 시간에 영상보고 살았어요.',
    replies: [replies[2]],
    badge: badge3
  },
  {
    username: 'Jennithic',
    text: '💖 JENNIE DAY 📸 제니야, 세상에 태어나줘서 고마워',
    replies: [replies[3]],
    badge: badge4
  },
  {
    username: '위시플',
    text: '리무 무대 위에서 진짜 눈빛이 달라요... 말할 땐 귀염인데...',
    replies: [replies[4]],
    badge: badge5
  },
  {
    username: '오로라',
    text: '한 명 한 명 다 너무 소중해요. 앞으로 우리가 지켜줄게',
    replies: [replies[5]],
    badge: badge6
  }
];

const ArchiveReply = ({ reply }) => {
  return (
    <div className="archived-reply">
         <p className="archived-reply-line-img">
          <img src={replyLine} alt="reply-line" />
        </p>
      <div className="archived-reply-content">
        <div className="archived-reply-header">
          <div className="archived-reply-header-inner">
            <span className="archived-reply-username">{reply.username}</span>
            <span className="archived-reply-date">{reply.date}</span>
          </div>
        </div>
        <p className="archived-reply-text">{reply.text}</p>
      </div>
    </div>
  );
};

const ArchiveCommentCard = ({ comment }) => {
  return (
    <div className="archived-comment-card">
      <div className="archived-comment-header">
      <img src={comment.badge} alt="badge" className="archived-badge-icon" />
      <div className="archived-comment-textbox">
        <span className="archived-comment-username">{comment.username}</span>
        <p className="archived-comment-text">{comment.text}</p>
      </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="archived-replies">
          {comment.replies.map((reply, idx) => (
            <ArchiveReply key={idx} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const ArchiveD = () => {
  return (
    <div className="archive-d-wrapper">
      {comments.map((comment, idx) => (
        <ArchiveCommentCard key={idx} comment={comment} />
      ))}
    </div>
  );
};

export default ArchiveD;
