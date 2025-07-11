import React from 'react';
import wish from '../assets/img/nctwish.png';
import aespa from '../assets/img/aespa.png';
import illit from '../assets/img/illit.png';
import blackpink from '../assets/img/blackpink.png';
import seventeen from '../assets/img/seventeen.png';
import promise9 from '../assets/img/promise9.png';

import wishLogo from '../assets/img/nctwish-logo.png';
import aespaLogo from '../assets/img/aespa-logo.png';
import illitLogo from '../assets/img/illit-logo.png';
import blackpinkLogo from '../assets/img/blackpink-logo.png';
import seventeenLogo from '../assets/img/seventeen-logo.png';
import promise9Logo from '../assets/img/promise9-logo.png';

import { Link } from 'react-router-dom';
import './ArtistCard.css';

const artistData = [
  { name: '아일릿', img: illit, logo: illitLogo, link: '/ArtistHome', isLink: true },
  { name: 'NCT WISH', img: wish, logo: wishLogo },
  { name: '에스파', img: aespa, logo: aespaLogo },
  { name: '블랙핑크', img: blackpink, logo: blackpinkLogo },
  { name: '세븐틴', img: seventeen, logo: seventeenLogo },
  { name: '프로미스나인', img: promise9, logo: promise9Logo },
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
