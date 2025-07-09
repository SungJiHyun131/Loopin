import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import MoreHeader from '../../components/MoreHeader';

const MoreHome = () => {
    const location =useLocation();
  return (
    <div className='home-container'>
      <div className="MoreHeader">
        <MoreHeader/>
      </div>
        <ul>
          <li>내 계정</li>
          <li><Link to='/MyArchive'>내 아카이브</Link></li>
          <li><Link to='/Subscribe'>구독권 관리</Link></li>
          <li>도움말</li>
          <li>언어변경</li>
          <li><Link to='/AboutLoopin'>루핀에 관하여</Link></li>
          <li>로그아웃</li>
          <li>푸터</li>
        </ul>
    </div>
  )
}

export default MoreHome
