import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import img1 from '../assets/img/IllitHomeimg/wonhee.png'
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
            <div className="img"><img src={img1} alt="원희" /></div>
            <div className="txt">
              <p className="name">원희 WONHEE</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 막내로, 2007년 06월 26일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img1} alt="원희" /></div>
            <div className="txt">
              <p className="name">원희 WONHEE</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 막내로, 2007년 06월 26일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img1} alt="원희" /></div>
            <div className="txt">
              <p className="name">원희 WONHEE</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 막내로, 2007년 06월 26일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="img"><img src={img1} alt="원희" /></div>
            <div className="txt">
              <p className="name">원희 WONHEE</p>
              <p className="intro">걸그룹 아일릿(ILLIT)의 막내로, 2007년 06월 26일 생입니다.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default ProfileCard;


