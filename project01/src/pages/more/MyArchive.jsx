import React from 'react'
import {Route} from 'react-router-dom'
import MyArchiveHeader from '../../components/MyArchiveHeader'

const MyArchive = () => {
  return (
    <div className="MyArchiveHeader">
        <MyArchiveHeader/>
      </div>
  )
}
<Route path="MediaHeader" element={<MyArchiveHeader/>}/>
export default MyArchive
