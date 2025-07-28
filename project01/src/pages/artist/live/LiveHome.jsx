import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import LiveHeader from '../../../components/LiveHeader';
import headerbg from '../../../assets/img/IllitHomeimg/Live/bg-header.png';
import Live from '../../../assets/img/IllitHomeimg/Live/bg-live.png';
import './LiveHome.css';
import LiveArtistList from '../../../components/LiveArtistList';
import OnLive from '../../../components/OnLive';
import LivePick from '../../../components/LivePick';
import ReplaySection from '../../../components/ReplaySection';

const LiveHome = () => {
    const location =useLocation();
  return (
    <div className='LiveHome'>
      <div className="LiveHeader">
        <LiveHeader/>
          <div className="Liveheaderbg"><img src={headerbg} alt="" /></div>
      </div>
      <div className="container LiveHome">
      <LiveArtistList/>
      <OnLive/>
      <LivePick/>
      <ReplaySection/>
      {/* <Link to="/LiveDetail">라이브 들어오세요</Link> */}
      </div>
     <div className="Livebg"><img src={Live} alt="" /></div>
    </div>
  )
}
<Route path="LiveHeader" element={<LiveHeader/>} />
export default LiveHome
