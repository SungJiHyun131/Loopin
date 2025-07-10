import React from 'react';
import {Routes, Route } from 'react-router-dom';
import MainHome from './pages/MainHome';
import ArtistHome from './pages/artist/ArtistHome';
import Dm from './pages/Dm';
import Alarm from './pages/Alarm';
import MoreHome from './pages/more/MoreHome';
import MyArchive from './pages/more/MyArchive';
import Subscribe from './pages/more/Subscribe';
import AboutLoopin from './pages/more/AboutLoopin';
import Layout from './components/Layout';
import NoticeHome from './pages/artist/notice/NoticeHome';
import NoticeDetail from './pages/artist/notice/NoticeDetail';
import StoreHome from './pages/artist/store/StoreHome';
import StoreDetail from './pages/artist/store/StoreDetail';
import MediaHome from './pages/artist/media/MediaHome';
import MediaA from './pages/artist/media/MediaA';
import MediaB from './pages/artist/media/MediaB';
import IllitHome from './pages/artist/illit/IllitHome';
import FanHome from './pages/artist/fan/FanHome';
import FanPostDetail from './pages/artist/fan/FanPostDetail';
import FanPostWrite from './pages/artist/fan/FanPostWrite';
import LiveHome from './pages/artist/live/LiveHome';
import LiveDetail from './pages/artist/live/LiveDetail';
import ArtistProfile from './pages/artist/illit/ArtistProfile';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
  <Route index element={<MainHome/>} /></Route>
  <Route path="ArtistHome" element={<ArtistHome/>} />
  <Route path="Dm" element={<Dm/>} />
  <Route path="Alarm" element={<Alarm/>} />
  <Route path="MoreHome" element={<MoreHome/>} />
 
  <Route path="MyArchive" element={<MyArchive/>} />
  <Route path="Subscribe" element={<Subscribe/>} />
  <Route path="AboutLoopin" element={<AboutLoopin/>} />
  <Route path="NoticeHome" element={<NoticeHome/>} />
  <Route path="NoticeDetail" element={<NoticeDetail/>} />
  <Route path="StoreHome" element={<StoreHome/>} />
  <Route path="StoreDetail" element={<StoreDetail/>} />

  <Route path="MediaHome" element={<MediaHome/>} >
  <Route index element={<MediaA/>} />
  <Route path="MediaA" element={<MediaA/>} />
  <Route path="MediaB" element={<MediaB/>} />
  </Route>

  <Route path="IllitHome" element={<IllitHome/>} />
  <Route path="FanHome" element={<FanHome/>} />
  <Route path="LiveHome" element={<LiveHome/>} />
  <Route path="LiveDetail" element={<LiveDetail/>} />
  <Route path="ArtistProfile" element={<ArtistProfile/>} />
  <Route path="FanPostDetail" element={<FanPostDetail/>} />
  <Route path="FanPostWrite" element={<FanPostWrite/>} />

</Routes>

  );
}

export default App;
