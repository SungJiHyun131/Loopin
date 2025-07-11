import React from 'react';
import wish from '../assets/img/nctwish.png';
import aespa from '../assets/img/aespa.png';
import illit from '../assets/img/illit.png';
import blackpink from '../assets/img/blackpink.png';
import seventeen from '../assets/img/seventeen.png';
import promise9 from '../assets/img/promise9.png';
import boynextdoor from '../assets/img/boynextdoor.png';
import shinee from '../assets/img/shinee.png';
import twice from '../assets/img/twice.png';
import ive from '../assets/img/ive.png';
import le from '../assets/img/le.png';
import riize from '../assets/img/riize.png';
import en from '../assets/img/en.png';
import txt from '../assets/img/txt.png';
import bm from '../assets/img/bm.png';
import ateez from '../assets/img/ateez.png';
import tws from '../assets/img/tws.png';
import kat from '../assets/img/kat.png';
import red from '../assets/img/red.png';
import h2h from '../assets/img/h2h.png';

import wishLogo from '../assets/img/nctwish-logo.png';
import aespaLogo from '../assets/img/aespa-logo.png';
import illitLogo from '../assets/img/illit-logo.png';
import blackpinkLogo from '../assets/img/blackpink-logo.png';
import seventeenLogo from '../assets/img/seventeen-logo.png';
import promise9Logo from '../assets/img/promise9-logo.png';
import boynextdoorLogo from '../assets/img/boynextdoor-logo.png';
import shineeLogo from '../assets/img/shinee-logo.png';
import twiceLogo from '../assets/img/twice-logo.png';
import iveLogo from '../assets/img/ive-logo.png';
import leLogo from '../assets/img/le-logo.png';
import riizeLogo from '../assets/img/riize-logo.png';
import enLogo from '../assets/img/en-logo.png';
import txtLogo from '../assets/img/txt-logo.png';
import bmLogo from '../assets/img/bm-logo.png';
import ateezLogo from '../assets/img/ateez-logo.png';
import twsLogo from '../assets/img/tws-logo.png';
import katLogo from '../assets/img/kat-logo.png';
import redLogo from '../assets/img/red-logo.png';
import h2hLogo from '../assets/img/h2h-logo.png';

import { Link } from 'react-router-dom';
import './ArtistCard.css';

const artistData = [
  { name: '아일릿', img: illit, logo: illitLogo, link: '/ArtistHome', isLink: true },
  { name: '엔시티 위시', img: wish, logo: wishLogo },
  { name: '에스파', img: aespa, logo: aespaLogo },
  { name: '블랙핑크', img: blackpink, logo: blackpinkLogo },
  { name: '세븐틴', img: seventeen, logo: seventeenLogo },
  { name: '프로미스나인', img: promise9, logo: promise9Logo },
  { name: '보이넥스트도어', img: boynextdoor, logo: boynextdoorLogo },
  { name: '샤이니', img:shinee, logo: shineeLogo },
  { name: '트와이스', img: twice, logo: twiceLogo },
  { name: '아이브', img: ive, logo: iveLogo },
  { name: '르세라핌', img: le, logo: leLogo },
  { name: '라이즈', img: riize, logo: riizeLogo },
  { name: '엔하이픈', img: en, logo: enLogo },
  { name: '투모로우바이투게더', img: txt, logo: txtLogo },
  { name: '베이비몬스터', img: bm, logo: bmLogo },
  { name: '에이티즈', img: ateez, logo: ateezLogo },
  { name: '투어스', img: tws, logo: twsLogo },
  { name: '캣츠아이', img: kat, logo:katLogo },
  { name: '레드벨벳', img: red, logo: redLogo },
  { name: '하츠투하츠', img: h2h, logo: h2hLogo },
];

const ArtistCard = () => {
  return (
    <div className="cardlist">
      <ul>
        {artistData.map((artist, index) => {
          const content = (
            <div className="artist-card">
              <div className="artist-inner">
                <img src={artist.img} alt={artist.name} className="artist-img" />
                <div className="artist-info">
                  <span className="artist-name">{artist.name}</span>
                  <img src={artist.logo} alt={`${artist.name} 로고`} className="artist-logo" />
                </div>
              </div>
            </div>
          );

          return (
            <li key={index}>
              {artist.isLink ? (
                <Link to={artist.link}>{content}</Link>
              ) : (
                <a href="#">{content}</a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArtistCard;
