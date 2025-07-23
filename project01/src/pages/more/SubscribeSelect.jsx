import React,{useState} from 'react';
import {Link,Route} from 'react-router-dom';
import SubscribeHeader2 from '../../components/SubscribeHeader2';
import SelectArtist from '../../components/SelectArtist';
import './SubscribeSelect.css';

import aespa from '../../assets/img/Subscribeimg/aespa.png';
import ATEEZ from '../../assets/img/Subscribeimg/ATEEZ.png';
import BABYMONSTER from '../../assets/img/Subscribeimg/BABY MONSTER.png';
import blackpink from '../../assets/img/Subscribeimg/blackpink.png';
import BOYNEXTDOOR from '../../assets/img/Subscribeimg/BOYNEXTDOOR.png';
import ENHYPHEN from '../../assets/img/Subscribeimg/ENHYPHEN.png';
import fromis from '../../assets/img/Subscribeimg/fromis.png';
import H2H from '../../assets/img/Subscribeimg/H2H.png';
import illit from '../../assets/img/Subscribeimg/illit.png';
import ive from '../../assets/img/Subscribeimg/ive.png';
import KATSEYE from '../../assets/img/Subscribeimg/KATSEYE.png';
import LESSERAPIM from '../../assets/img/Subscribeimg/LESSERAPIM.png';
import meovv from '../../assets/img/Subscribeimg/meovv.png';
import nct from '../../assets/img/Subscribeimg/nctwish.png';
import REDVELVET from '../../assets/img/Subscribeimg/REDVELVET.png';
import riize from '../../assets/img/Subscribeimg/riize.png';
import seventeen from '../../assets/img/Subscribeimg/seventeen.png';
import SHINEE from '../../assets/img/Subscribeimg/SHINEE.png';
import TWICE from '../../assets/img/Subscribeimg/TWICE.png';
import TWS from '../../assets/img/Subscribeimg/TWS.png';
import TXT from '../../assets/img/Subscribeimg/TXT.png';
import SearchBar from '../../components/SearchBar';

const idols = [
  { name: 'AESPA', image: aespa },
  { name: 'ATEEZ', image: ATEEZ },
  { name: 'BABY MONSTER', image: BABYMONSTER },
  { name: 'BLACKPINK', image: blackpink },
  { name: 'BOYNEXTDOOR', image: BOYNEXTDOOR },
  { name: 'ENHYPHEN', image: ENHYPHEN },
  { name: 'FROMIS_9', image: fromis },
  { name: 'H2H', image: H2H },
  { name: 'ILLIT', image: illit },
  { name: 'IVE', image: ive },
  { name: 'KATSEYE', image: KATSEYE },
  { name: 'LESSERAPIM', image: LESSERAPIM },
  { name: 'MEOVV', image: meovv },
  { name: 'NCT WISH', image: nct },
  { name: 'REDVELVET', image: REDVELVET },
  { name: 'RIIZE', image: riize },
  { name: 'SEVENTEEN', image: seventeen },
  { name: 'SHINEE', image: SHINEE },
  { name: 'TWICE', image: TWICE },
  { name: 'TWS', image: TWS },
  { name: 'TXT', image: TXT },
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

