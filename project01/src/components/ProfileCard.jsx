import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import img1 from '../assets/img/IllitHomeimg/minju.png'
import img2 from '../assets/img/IllitHomeimg/yoona.png'
import img3 from '../assets/img/IllitHomeimg/moka.png'
import img4 from '../assets/img/IllitHomeimg/wonhee.png'
import img5 from '../assets/img/IllitHomeimg/iloha.png'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <>
      <p className="subtitle">Profile</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img2} alt="윤아" /></div>
            <div className="txt">
              <p className="name">윤아 YUNAH</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 멤버로, 2004년 01월 15일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img1} alt="민주" /></div>
            <div className="txt">
              <p className="name">민주 MINJU</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 멤버로, 2004년 5월 11일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img3} alt="모카" /></div>
            <div className="txt">
              <p className="name">모카 MOKA</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 멤버로, 2004년 10월 08일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img4} alt="원희" /></div>
            <div className="txt">
              <p className="name">원희 WONHEE</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 멤버로, 2007년 06월 26일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img5} alt="원희" /></div>
            <div className="txt">
              <p className="name">이로하 IROHA</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 막내로, 2008년 02월 04일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default ProfileCard;


