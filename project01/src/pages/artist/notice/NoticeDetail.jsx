import React from 'react'
import {Route} from 'react-router-dom'
import NoticeHeader2 from '../../../components/NoticeHeader2';
const NoticeDetail = () => {
  return (
    <div>
       <div className="NoticeHeader2">
        <NoticeHeader2/>
      </div>
      <div className="container NoticeDetail">
      공지사항 세부입니다
      </div>
    </div>
  )
}
<Route path="NoticeHeader2" element={<NoticeHeader2/>} />
export default NoticeDetail
