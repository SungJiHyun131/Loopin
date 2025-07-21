import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import StoreHeader from '../../../components/StoreHeader';
import LikeButton from '../../../components/LikeButton';

import banner1 from '../../../assets/img/Storeimg/banner1.png'
import banner2 from '../../../assets/img/Storeimg/banner2.png'
import banner3 from '../../../assets/img/Storeimg/banner3.png'
import banner4 from '../../../assets/img/Storeimg/banner4.png'

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


import goods17 from '../../../assets/img/Storeimg/productM1.png'
import goods18 from '../../../assets/img/Storeimg/productM2.png'
import goods19 from '../../../assets/img/Storeimg/productM3.png'
import goods20 from '../../../assets/img/Storeimg/productM4.png'
import goods21 from '../../../assets/img/Storeimg/productM5.png'
import goods22 from '../../../assets/img/Storeimg/productM6.png'
import goods23 from '../../../assets/img/Storeimg/productM7.png'
import goods24 from '../../../assets/img/Storeimg/productM8.png'
import goods25 from '../../../assets/img/Storeimg/productM9.png'
import goods26 from '../../../assets/img/Storeimg/productM10.png'
import goods27 from '../../../assets/img/Storeimg/productM11.png'
import goods28 from '../../../assets/img/Storeimg/productM12.png'
import goods29 from '../../../assets/img/Storeimg/productM13.png'
import goods30 from '../../../assets/img/Storeimg/productM14.png'



import './StoreHome.css';

const bigCategories = ["MERCH", "TOUR MERCH", "ALBUM", "MAGAZINE", "GLOBAL MEMBERSHIP", "JAPAN MEMBERSHIP"];
const smallCategories = ["ALL", "bomb", "1st Anniversary", "Official Merch", "I’LL LIKE YOU", "SUPER REAL ME"];

const products = [
  {
    id: 1,
    name: "Invitation Set",
    img: goods1,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "14,000",
  }, 
  {
    id: 2,
    name: "Image Picket",
    img: goods2,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "10,000",
  },
  {
    id: 3,
    name: "Lucky Draw",
    img: goods3,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "9,000",
  },
  {
    id: 4,
    name: "ID Card Set",
    img: goods4,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "7,000",
  },
  {
    id: 5,
    name: "Keyring",
    img: goods5, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "20,000",
  },
  {
    id: 6,
    name: "Mini Photo Holder",
    img: goods6,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "13,000",
  },
  {
    id: 7,
    name: "Sticker Set",
    img: goods7, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "15,000",
  },
  {
    id: 8,
    name: "DIY Beads Keyring Set",
    img: goods8,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "59,400",
  },
  {
    id: 9,
    name: "Tumbler",
    img: goods9, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "35,000",
  },
  {
    id: 10,
    name: "Cubic Crop T-Shirt",
    img: goods10,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "59,000",
  },
  {
    id: 11,
    name: "S/S T-shirt",
    img: goods11, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "59,400",
  },
  {
    id: 12,
    name: "String Bag",
    img: goods12,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "52,000",
  },
  {
    id: 13,
    name: "Ball Cap",
    img: goods13, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "42,000",
  },
  {
    id: 14,
    name: "Slogan",
    img: goods14,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "20,000",
  },
  {
    id: 15,
    name: "Shopper Bag",
    img: goods15, 
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "6,000",
  },
  {
    id: 16,
    name: "Trading Card",
    img: goods16,
    bigCategory: "TOUR MERCH",
    smallCategory: "ALL",
    price: "8,000",
  },


  {
    id: 17,
    name: "Hair Scrunchie",
    img: goods17,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 18,
    name: "S/S T-Shirt",
    img: goods18,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
    {
    id: 19,
    name: "Hair Scrunchie",
    img: goods19,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 20,
    name: "S/S T-Shirt",
    img: goods20,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
    {
    id: 21,
    name: "Hair Scrunchie",
    img: goods21,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 22,
    name: "S/S T-Shirt",
    img: goods22,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
  {
    id: 23,
    name: "Hair Scrunchie",
    img: goods23,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 24,
    name: "S/S T-Shirt",
    img: goods24,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
      {
    id: 25,
    name: "Hair Scrunchie",
    img: goods25,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 26,
    name: "S/S T-Shirt",
    img: goods26,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
  {
    id: 27,
    name: "Hair Scrunchie",
    img: goods27,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 28,
    name: "S/S T-Shirt",
    img: goods28,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
    {
    id: 29,
    name: "Hair Scrunchie",
    img: goods29,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "19,000",
  },
  {
    id: 30,
    name: "S/S T-Shirt",
    img: goods30,
    bigCategory: "MERCH",
    smallCategory: "ALL",
    price: "45,000",
  },
]; 

const StoreHome = () => {
  const location = useLocation();
 
const [activeBigCategory, setActiveBigCategory] = useState(0); // MERCH
const [activeSmallCategory, setActiveSmallCategory] = useState(0); // ALL

 const filteredProducts = products.filter((product) => {
  const matchBig = product.bigCategory === bigCategories[activeBigCategory];
  const matchSmall = smallCategories[activeSmallCategory] === "ALL"
    ? true
    : product.smallCategory === smallCategories[activeSmallCategory];
  return matchBig && matchSmall;
});

  return (
    <div>
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
              {bigCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeBigCategory === index ? "underline" : ""}
                  onClick={() => setActiveBigCategory(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="Small">
            <ul>
              {smallCategories.map((item, index) => (
                <li
                  key={index}
                  className={activeSmallCategory === index ? "active" : ""}
                  onClick={() => setActiveSmallCategory(index)}
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
                    <img src={product.img} alt={product.name} />
                    </Link>
                    <div className="explain">
                      <p className="name">{product.name}</p>
                      <div className="tag">
                        <p className="blue">단독판매</p>
                        <p className="KR발송">KR발송</p>
                      </div>
                      <div className="price">
                        <h3>₩{product.price.toLocaleString()}</h3>
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
    </div>
  );
}

export default StoreHome;
