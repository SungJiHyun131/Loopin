import React from 'react';
import './ArchiveB.css';

import thum1 from '../../assets/img/archive/thum1.png';
import thum2 from '../../assets/img/archive/thum2.png';
import thum3 from '../../assets/img/archive/thum3.png';
import thum4 from '../../assets/img/archive/thum4.png';
import thum5 from '../../assets/img/archive/thum5.png';
import thum6 from '../../assets/img/archive/thum6.png';

interface ArchiveItem {
  id: number;
  image: string;
  title: string;
}

const archiveData: ArchiveItem[] = [
  { id: 1, image: thum1, title: '전체 보기' },
  { id: 2, image: thum2, title: '최애 모먼트 💕' },
  { id: 3, image: thum4, title: '🐹 커여운 워니 모음집' },
  { id: 4, image: thum3, title: '아일릿 굿즈' },
  { id: 5, image: thum6, title: '배경화면 ZIP' },
  { id: 6, image: thum5, title: '💚 위시 애긔들 💚' }
];

const ArtistB: React.FC = () => {
  return (
    <div className="artist-b-container">
      <div className="archive-grid">
        {archiveData.map((item) => (
          <div key={item.id} className="archive-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistB;
