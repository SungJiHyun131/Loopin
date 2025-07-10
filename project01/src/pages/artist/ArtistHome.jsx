import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import IllitHeader from '../../components/IllitHeader'
import './ArtistHome.css'
import folder from '../../assets/img/IllitHomeimg/folder.png'
import illit from '../../assets/img/IllitHomeimg/illit.png'
import ProfileCard from '../../components/ProfileCard'

const ArtistHome = () => {
  const location = useLocation()

  return (
    <div className='container'>
      <div className="IllitHeader">
        <IllitHeader />
      </div>
      <div className="top">
        <p className="img"><img src={illit} alt="" /></p>
        <nav>
          <ul className='first'>
            <li className='Artist'><Link to="/IllitHome"><img src={folder} alt="" />Artist</Link></li>
            <li className='Live'><Link to="/LiveHome"><img src={folder} alt="" />Live</Link></li>
            <li className='Store'><Link to="/StoreHome"><img src={folder} alt="" />Store</Link></li>
          </ul>
          <ul className='second'>
            <li className='Fan'><Link to="/FanHome"><img src={folder} alt="" />Fan</Link></li>
            <li className='Notice'><Link to="/NoticeHome"><img src={folder} alt="" />Notice</Link></li>
            <li className='Media'><Link to="/MediaHome"><img src={folder} alt="" />Media</Link></li>
          </ul>
        </nav>
      </div>
      <div className="ProfileCard">
        <ProfileCard />
      </div>
    </div>
  )
}

export default ArtistHome
