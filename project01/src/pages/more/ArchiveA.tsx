import React from 'react';
import './ArchiveA.css';
import { Link } from 'react-router-dom';

// 이미지 import
import img1 from '../../assets/img/archive/1.png';
import img2 from '../../assets/img/archive/2.png';
import img3 from '../../assets/img/archive/3.png';
import img4 from '../../assets/img/archive/4.png';
import img13 from '../../assets/img/archive/5.png';
import img6 from '../../assets/img/archive/6.png';
import img7 from '../../assets/img/archive/7.png';
import img8 from '../../assets/img/archive/8.png';
import img9 from '../../assets/img/archive/9.png';
import img10 from '../../assets/img/archive/10.png';
import img11 from '../../assets/img/archive/11.png';
import img12 from '../../assets/img/archive/12.png';
import img5 from '../../assets/img/archive/13.png';
import img14 from '../../assets/img/archive/14.png';
import img15 from '../../assets/img/archive/15.png';
import img16 from '../../assets/img/archive/16.png';
import img17 from '../../assets/img/archive/17.png';
import img18 from '../../assets/img/archive/18.png';

import icon1 from '../../assets/img/archive/icon1.png';
import icon2 from '../../assets/img/archive/icon2.png';

interface ArchiveItem {
  img: string;
  icon?: string;
  link?: string;
}

const ArtistA: React.FC = () => {
  const items: ArchiveItem[] = [
    { img: img1, icon: icon1 },
    { img: img2, icon: icon2 },
    { img: img3 }, // 아이콘 없음
    { img: img4 },
    { img: img5, icon: icon1 },
    { img: img6, icon: icon1 },
    { img: img7 },
    { img: img8, icon: icon1 },
    { img: img9, icon: icon2 },
    { img: img10 },
    { img: img11, icon: icon1 },
    { img: img12, icon: icon1 },
    { img: img13 },
    { img: img14 },
    { img: img15, icon: icon1 },
    { img: img16 },
    { img: img17, icon: icon1 },
    { img: img18 },
  ];

  return (
    <div className="archive-gridA">
      {items.map((item, index) => {
        const content = (
          <div className="archive-item" key={index}>
            <img src={item.img} alt={`archive-${index}`} className="archive-img" />
            {item.icon && (
              <img src={item.icon} alt="icon" className="archive-icon" />
            )}
          </div>
        );

        return item.link ? (
          <Link to={item.link} key={index}>
            {content}
          </Link>
        ) : (
          <React.Fragment key={index}>{content}</React.Fragment>
        );
      })}
    </div>
  );
};

export default ArtistA;
