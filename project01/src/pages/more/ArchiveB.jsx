import React, {useState} from 'react';
import './ArtistB.css';


import thum1 from '../../assets/img/archive/thum1.png';
import thum2 from '../../assets/img/archive/thum2.png';
import thum3 from '../../assets/img/archive/thum3.png';
import thum4 from '../../assets/img/archive/thum4.png';
import thum5 from '../../assets/img/archive/thum5.png';
import thum6 from '../../assets/img/archive/thum6.png';
import thum8 from '../../assets/img/archive/thum8.png';

const initialData = [
  { id: 1, image: thum1, title: '전체 보기' },
  { id: 2, image: thum2, title: '최애 모먼트 💕' },
  { id: 3, image: thum4, title: '🐹 커여운 워니 모음집' },
  { id: 4, image: thum3, title: '아일릿 굿즈' },
  { id: 5, image: thum6, title: '배경화면 ZIP' },
  { id: 6, image: thum5, title: '💚 위시 애긔들 💚' },
  { id: 7, image: thum8, title: '새 컬렉션 만들기' },
];



const ArtistB = () => {
  const [archiveData, setArchiveData] = useState(initialData);

  const handleAddCollection = () => {
    const newTitle = prompt('새 컬렉션 이름을 입력하세요');
    if (newTitle) {
      const newId = archiveData.length + 1;
      setArchiveData([
        ...archiveData.slice(0, archiveData.length - 1),
        {
          id: newId,
          image: thum8,
          title: newTitle,
        },
        archiveData[archiveData.length - 1],
      ]);
    }
  };

  return (
    <div className="artist-b-container">
      <div className="archive-grid">
        {archiveData.map((item) => (
          <div
            key={item.id}
            className="archive-card"
            onClick={item.id === 7 ? handleAddCollection : undefined}
            style={{ cursor: item.id === 7 ? 'pointer' : 'default' }}
          >
            <img src={item.image} alt={item.title} />
            {item.id === 7 && <span className="plus-icon">+</span>}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistB;
