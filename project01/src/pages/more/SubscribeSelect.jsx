import React,{useState} from 'react';
import {Link,Route} from 'react-router-dom';
import SubscribeHeader2 from '../../components/SubscribeHeader2';
import SelectArtist from '../../components/SelectArtist';
import './SubscribeSelect.css';
import illit from '../../assets/img/Subscribeimg/illit.png';
import aespa from '../../assets/img/Subscribeimg/aespa.png';
import nct from '../../assets/img/Subscribeimg/nctwish.png';
import seventeen from '../../assets/img/Subscribeimg/seventeen.png';
import fromis from '../../assets/img/Subscribeimg/fromis.png';
import blackpink from '../../assets/img/Subscribeimg/blackpink.png';
import ive from '../../assets/img/Subscribeimg/ive.png';
import meovv from '../../assets/img/Subscribeimg/meovv.png';
import riize from '../../assets/img/Subscribeimg/riize.png';
import SearchBar from '../../components/SearchBar';

const idols = [
  { name: 'ILLIT', image: illit },
  { name: 'AESPA', image: aespa },
  { name: 'NCT WISH', image: nct },
  { name: 'SEVENTEEN', image: seventeen },
  { name: 'FROMIS_9', image: fromis },
  { name: 'BLACKPINK', image: blackpink },
  { name: 'IVE', image: ive },
  { name: 'MEOVV', image: meovv },
  { name: 'RIIZE', image: riize },
];

const SubscribeSelect = () => {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');
  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  return (
    <div className='bgSub'>
      <div className="SubscribeHeader2">
        <SubscribeHeader2 />
      </div>
      <div className="container SubscribeSelect">
        <div className="top">
          <h3>관심있는 아티스트를 구독하세요</h3>
          <p>구독한 아티스트는 구독 갱신일 기준 3일 전까지 해지할 수 있어요</p>
        </div>
        <SearchBar onChange={(e) => setQuery(e.target.value)} />
        <div className="SelectArtist-grid">
          {idols.map((idol, idx) => (
            <SelectArtist
              key={idx}
              image={idol.image}
              name={idol.name}
              isSelected={selected.includes(idol.name)}
              onClick={() => toggleSelect(idol.name)}
            />
          ))}
        </div>

        {selected.length > 0 && (
          <div className="complete-btn">
            <Link to="/SubscribeSelectDetail">선택완료 ({selected.length})</Link>
          </div>
        )}
      </div>
    </div>
  );
};


export default SubscribeSelect

