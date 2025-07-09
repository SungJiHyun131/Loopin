import React from 'react'
import {Link, Outlet, Route} from 'react-router-dom'
import MediaHeader from '../../../components/MediaHeader'
import './Media.css'

const MediaHome = () => {
  return (
    <div>
      <div className="MediaHeader">
        <MediaHeader/>
      </div>
      <div className="cate">
      <Link to ='MediaA' className='home'>홈</Link>
      <Link to ='MediaB' className='all'>전체</Link>
      </div>
      <Outlet/>
      </div>

    
  )
}
<Route path="MediaHeader" element={<MediaHeader/>}/>
export default MediaHome
