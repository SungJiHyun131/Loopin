import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import StoreHeader from '../../../components/StoreHeader';
import banner1 from '../../../assets/img/Storeimg/banner1.png'
import banner2 from '../../../assets/img/Storeimg/banner2.png'
import banner3 from '../../../assets/img/Storeimg/banner3.png'
import banner4 from '../../../assets/img/Storeimg/banner4.png'

import LikeButton from '../../../components/LikeButton';

import goods1 from '../../../assets/img/Storeimg/product1.png'
import goods2 from '../../../assets/img/Storeimg/product2.png'
import goods3 from '../../../assets/img/Storeimg/product3.png'
import goods4 from '../../../assets/img/Storeimg/product4.png'
import goods5 from '../../../assets/img/Storeimg/product5.png'
import goods6 from '../../../assets/img/Storeimg/product6.png'
import goods7 from '../../../assets/img/Storeimg/product7.png'
import goods8 from '../../../assets/img/Storeimg/product8.png'
import goods9 from '../../../assets/img/Storeimg/product9.png'
import goods10 from '../../../assets/img/Storeimg/product10.png'
import goods11 from '../../../assets/img/Storeimg/product11.png'
import goods12 from '../../../assets/img/Storeimg/product12.png'
import goods13 from '../../../assets/img/Storeimg/product13.png'
import goods14 from '../../../assets/img/Storeimg/product14.png'
import goods15 from '../../../assets/img/Storeimg/product15.png'
import goods16 from '../../../assets/img/Storeimg/product16.png'

import './StoreHome.css';

const StoreHome = () => {



    const location =useLocation();
  return (
    <div>
       <div className="StoreHeader">
        <StoreHeader/>
      </div>
      <div className="container StoreHome">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="banner">
          <img src={banner1} alt="" />
              <div className="textBox">
                <h3>ILLIT OFFICIAL LIGHT STICK</h3>
                <p>공식 상품을 만나보세요</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src={banner2} alt="" />
            <div className="textBox2">
              <h3>GLLIT MEMBERSHIP OPEN!</h3>
              <p>ILLIT과 더 가까워지는 방법</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src={banner3} alt="" />
            <div className="textBox">
              <h3>GLLIT WELCOME GIFT</h3>
              <p>오직 루핀스토어에서만 만날 수 있어요!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src={banner4} alt="" />
            <div className="textBox2">
              <h3>2025 ILLIT GLITTER DAY IN SEOUL</h3>
              <p>공식 상품을 만나보세요!</p>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>

        <div className="Products">
          <h3>Products</h3>
          <div className="Big">
            <ul>
            <li>MERCH</li>
            <li>TOUR MERCH</li>
            <li>ALBUM</li>
            <li>MAGAZINE</li>
            <li>GLOBAL MEMBERSHIP</li>
            <li>JAPAN MEMBERSHIP</li>
          </ul>
          </div> 
          <div className="Small">
            <ul>
              <li>ALL</li>
              <li>bomb</li>
              <li>1st Anniversary</li>
              <li>Official Merch</li>
              <li>I’LL LIKE YOU</li>
              <li>SUPER REAL ME</li>
            </ul>
          </div> 

          <div className="Goods">
            <ul>
              <li>
                <div className="goods">
                  <img src={goods1} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods2} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods3} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods4} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods5} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods6} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods7} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods8} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods9} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods10} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods11} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods12} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods13} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods14} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="goods">
                  <img src={goods15} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="goods">
                  <img src={goods16} alt="" />
                  <div className="explain">
                    <p className="name">Invitation Set</p>
                    <div className="tag">
                      <p className="blue">단독판매</p>
                      <p className="KR발송">KR발송</p>
                    </div>
                    <div className="price">
                      <h3>₩14,000</h3>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Link to='/StoreDetail'>스토어상세 ㄱㄱ</Link>
      </div>
    </div>
  )
}
<Route path="StoreHeader" element={<StoreHeader/>} />
export default StoreHome
