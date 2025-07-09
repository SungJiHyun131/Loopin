import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Notice = () => {
  const location =useLocation();
  return (
    <div>
      <Link to='/NoticeDetail'>공지사항입니다.</Link>
    </div>
  )
}

export default Notice
