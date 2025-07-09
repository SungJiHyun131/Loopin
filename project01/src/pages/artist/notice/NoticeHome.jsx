import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import NoticeHeader from '../../../components/NoticeHeader';
const Notice = () => {
  const location =useLocation();
  return (
    <div>
       <div className="NoticeHeader">
        <NoticeHeader/>
      </div>
      <Link to='/NoticeDetail'>공지사항입니다.</Link>
    </div>
  )
}
<Route path="NoticeHeader" element={<NoticeHeader/>} />
export default Notice
