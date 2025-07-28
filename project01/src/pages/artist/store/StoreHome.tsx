import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import storehd from '../../../assets/img/StoreImg/storehd.png';
import StoreHeader from '../../../components/StoreHeader';
import LikeButton from '../../../components/LikeButton';
import Footer2 from '../../../components/Footer2';
import storebg from '../../../assets/img/StoreImg/Detail/storebg.png';
import banner1 from '../../../assets/img/StoreImg/banner1.png';
import banner2 from '../../../assets/img/StoreImg/banner2.png';
import banner3 from '../../../assets/img/StoreImg/banner3.png';
import banner4 from '../../../assets/img/StoreImg/banner4.png';

import goods1 from '../../../assets/img/StoreImg/product1.png';
// ... (생략: goods2 ~ goods50까지 동일)

import './StoreHome.css';

const bigCategories = ["MERCH", "TOUR MERCH", "ALBUM", "MAGAZINE", "GLOBAL MEMBERSHIP", "JAPAN MEMBERSHIP"];

const smallCategories: Record<string, string[]> = {
  "MERCH": ["ALL", "bomb", "Official Merch", "I'LL LIKE YOU", "SUPER REAL ME"],
  "TOUR MERCH": ["ALL", "2025 ILLIT GLITTER DAY IN SEOUL"],
  "ALBUM": ["ALL", "bomb"],
  "MAGAZINE": ["ALL", "VOGUE"],
  "GLOBAL MEMBERSHIP": ["ALL", "MEMBERSHIP", "GIFT"],
  "JAPAN MEMBERSHIP": ["ALL", "MEMBERSHIP"],
};

interface Product {
  id: number;
  name: string;
  img: string;
  bigCategory: string;
  smallCategory: string;
  price: string;
  soldOut?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Invitation Set",
    img: goods1,
    bigCategory: "TOUR MERCH",
    smallCategory: "2025 ILLIT GLITTER DAY IN SEOUL",
    price: "14000",
  },
  // ... 생략 (모든 상품 동일하게 price는 숫자처럼 다루기 위해 문자열로 되어있으면 숫자로 변환해야 합니다)
];

const StoreHome: React.FC = () => {
  const location = useLocation();

  const [activeBigCategory, setActiveBigCategory] = useState<number>(0);
  const [activeSmallCategory, setActiveSmallCategory] = useState<string[]>(["ALL"]);

  const onBigCategoryClick = (index: number) => {
    setActiveBigCategory(index);
    setActiveSmallCategory(["ALL"]);
  };

  const handleSmallCategoryClick = (category: string) => {
    setActiveSmallCategory([category]);
  };

  const currentSmallCategories = smallCategories[bigCategories[activeBigCategory]] || [];

  const filteredProducts = products.filter((product) => {
    const matchBig = product.bigCategory === bigCategories[activeBigCategory];
    const selectedSmall = activeSmallCategory[0];
    const matchSmall = selectedSmall === "ALL"
      ? true
      : product.smallCategory === selectedSmall || product.smallCategory === "ALL";
    return matchBig && matchSmall;
  });

  return (
    <div>
      <div className="storebg"><img src={storebg} alt="store background" /></div>
      <div className="storehd"><img src={storehd} alt="store header" /></div>
      <div className="StoreHeader">
        <StoreHeader />
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
          {[banner1, banner2, banner3, banner4].map((banner, i) => (
            <SwiperSlide key={i}>
              <div className="banner">
                <img src={banner} alt={`banner${i + 1}`} />
                <div className={i % 2 === 0 ? "textBox" : "textBox2"}>
                  {/* 배너 텍스트를 조건문 혹은 배열로 관리 가능 */}
                  {i === 0 && <>
                    <h3>ILLIT OFFICIAL LIGHT STICK</h3>
                    <p>공식 상품을 만나보세요</p>
                  </>}
                  {i === 1 && <>
                    <h3>GLLIT MEMBERSHIP OPEN!</h3>
                    <p>ILLIT과 더 가까워지는 방법</p>
                  </>}
                  {i === 2 && <>
                    <h3>GLLIT WELCOME GIFT</h3>
                    <p>오직 루핀스토어에서만 만날 수 있어요!</p>
                  </>}
                  {i === 3 && <>
                    <h3>2025 ILLIT GLITTER DAY IN SEOUL</h3>
                    <p>공식 상품을 만나보세요!</p>
                  </>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="Products">
          <h3>Products</h3>

          <div className="Big">
            <ul>
              {bigCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeBigCategory === index ? "underline" : ""}
                  onClick={() => onBigCategoryClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="Small">
            <ul>
              {currentSmallCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeSmallCategory.includes(item) ? "active" : ""}
                  onClick={() => handleSmallCategoryClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="Goods">
            <ul className="product-list">
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <div className="goods">
                    <Link to='/StoreDetail'>
                      <div className="img-container">
                        <img src={product.img} alt={product.name} />
                        {product.soldOut && <div className="soldout-overlay">SOLD<br />OUT</div>}
                      </div>
                    </Link>
                    <div className="explain">
                      <p className="name">{product.name}</p>
                      <div className="tag">
                        <p className="blue">단독판매</p>
                        <p className="KR발송">KR 발송</p>
                      </div>
                      <div className="price">
                        <h3>₩{Number(product.price).toLocaleString()}</h3>
                        <LikeButton />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default StoreHome;
