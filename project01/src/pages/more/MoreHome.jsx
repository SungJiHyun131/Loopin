import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import MoreHeader from '../../components/MoreHeader';
import './MoreHome.css';
import icon1 from '../../assets/img/icon_bookmark.png'


const MoreHome = () => {
    const location =useLocation();
  return (
    <div>
    <div className="MoreHeader">
      <MoreHeader/>
    </div>
    <div className='container'>
        <ul>
          <li>내 계정</li>
          <li><Link to='/MyArchive'> <img src={icon1} alt="" />내 아카이브</Link></li>
          <li><Link to='/Subscribe'>구독권 관리</Link></li>
          <li>도움말</li>
          <li>언어변경</li>
          <li><Link to='/AboutLoopin'>루핀에 관하여</Link></li>
          <li>로그아웃</li>
          <li>푸터</li>
        </ul>
    </div>
    </div>
  )
}
<Route path="MoreHeader" element={<MoreHeader/>} />
export default MoreHome
