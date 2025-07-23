import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import IllitHeader from '../../components/IllitHeader'
import './ArtistHome.css'
import folder from '../../assets/img/IllitHomeimg/folder.png'
import illit from '../../assets/img/IllitHomeimg/illit.png'
import minju from '../../assets/img/IllitHomeimg/pixel_minju.png'
import minju2 from '../../assets/img/IllitHomeimg/pixel_minju2.png'
import textbox from '../../assets/img/IllitHomeimg/pixel_textbox.png'
import ProfileCard from '../../components/ProfileCard'
import ScheduleCalendar from '../../components/ScheduleCalendar'
import content from '../../assets/img/IllitHomeimg/bg-ArtistHome.png';


const ArtistHome = () => {
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 자동으로 바뀔 텍스트와 이미지 목록
  const dialogues = [
    { text: "뭐해?", img: minju},
    { text: "밥 먹었어?", img: minju2 },
    { text: "오늘 스케줄 어때?", img: minju },
  ];

  // 자동으로 일정 시간마다 currentIndex를 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
    }, 6000); // 6초마다 전환

    return () => clearInterval(interval); // 언마운트 시 인터벌 제거
  }, [dialogues.length]);


  return (
    <div className='container-Artist'>
      <div className="IllitHeader">
        <IllitHeader />
      </div>
     <div className="Artisttop">
      <p className="img"><img src={illit} alt="" /></p>
      <div className="right">
      <p className="textbox">
  <span className="text">오늘 스케줄 어때?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox1">
  <span className="text">밥 먹었어?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox2">
  <span className="text">뭐해?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox3">
  <span className="text">🤍🤍🤍</span>
  <img src={textbox} alt="말풍선" />
</p>
<p className="img2">
  <img src={dialogues[currentIndex].img} alt="캐릭터" />
</p>
      </div>
     </div>

     <div className="Artistbottom">
  <nav className="nav-container">
    {/* 배경 박스 */}
    <div className="nav-background first-layer" />
    <ul className="nav-row first">
      <li className="Artist"><Link to="/IllitHome"><img src={folder} alt="" />Artist</Link></li>
      <li className="Live"><Link to="/LiveHome"><img src={folder} alt="" />Live</Link></li>
      <li className="Store"><Link to="/StoreHome"><img src={folder} alt="" />Store</Link></li>
    </ul>

    {/* 두 번째 박스 */}

    <ul className="nav-row second">
      <li className="Fan"><Link to="/FanHome"><img src={folder} alt="" />Fan</Link></li>
      <li className="Notice"><Link to="/NoticeHome"><img src={folder} alt="" />Notice</Link></li>
      <li className="Media"><Link to="/MediaHome"><img src={folder} alt="" />Media</Link></li>
    </ul>
  </nav>
</div>


      <div className="ProfileCard">
        <ProfileCard />
      </div>
      <div className="ScheduleCalendar">
  <ScheduleCalendar />
</div>
      <div className="ArtistHomebg"><img src={content} alt="" /></div>
    </div>
  )
}

export default ArtistHome
