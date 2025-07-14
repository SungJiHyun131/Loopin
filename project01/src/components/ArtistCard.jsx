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
  { name: 'ILLIT', img: illit, logo: illitLogo, link: '/ArtistHome', isLink: true },
  { name: 'NCT WISH', img: wish, logo: wishLogo },
  { name: 'AESPA', img: aespa, logo: aespaLogo },
  { name: 'BLACKPINK', img: blackpink, logo: blackpinkLogo },
  { name: 'SEVEN', img: seventeen, logo: seventeenLogo },
  { name: 'PROMISE9', img: promise9, logo: promise9Logo },
  { name: 'BOYNEXTDOOR', img: boynextdoor, logo: boynextdoorLogo },
  { name: 'SHINEE', img:shinee, logo: shineeLogo },
  { name: 'TWICE', img: twice, logo: twiceLogo },
  { name: 'IVE', img: ive, logo: iveLogo },
  { name: 'LESSERAPIM', img: le, logo: leLogo },
  { name: 'RIIZE', img: riize, logo: riizeLogo },
  { name: 'ENHYPHEN', img: en, logo: enLogo },
  { name: 'TxT', img: txt, logo: txtLogo },
  { name: 'BABY MONSTER', img: bm, logo: bmLogo },
  { name: 'ATEEZ', img: ateez, logo: ateezLogo },
  { name: 'TWS', img: tws, logo: twsLogo },
  { name: 'KATSEYE', img: kat, logo:katLogo },
  { name: 'RED VELVET', img: red, logo: redLogo },
  { name: 'HEARTS TO HEARTS', img: h2h, logo: h2hLogo },
];

const ArtistCard = () => {
  const sortedData = [...artistData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="cardlist">
      <ul>
        {sortedData.map((artist, index) => {
          const content = (
            <div className="artist-card">
              <img src={artist.img} alt={artist.name} className="artist-img" />
              <div className="artist-name-tag">{artist.name}</div>
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
