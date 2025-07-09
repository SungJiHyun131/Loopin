import React from 'react'
import {Route} from 'react-router-dom'
import NoticeHeader from '../../../components/NoticeHeader';
const NoticeDetail = () => {
  return (
    <div>
       <div className="NoticeHeader">
        <NoticeHeader/>
      </div>
      ㅗㅗㅗ구라임
    </div>
  )
}
<Route path="NoticeHeader" element={<NoticeHeader/>} />
export default NoticeDetail
