import React from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard';

import bombImage from '../assets/img/illitHomeimg/artistimg/thum1.png';
import illyouImage from '../assets/img/illitHomeimg/artistimg/thum2.png';
import superRealMeImage from '../assets/img/illitHomeimg/artistimg/thum3.png';

const albumData = [
  {
    title: 'bomb',
    date: '2025.06.16',
    image: bombImage,
  },
  {
    title: "I'll Like You",
    date: '2024.10.21',
    image: illyouImage,
  },
  {
    title: 'Super real me',
    date: '2024.03.25',
    image: superRealMeImage,
  },
  {
    title: 'Super real me',
    date: '2024.03.25',
    image: superRealMeImage,
  },
];



const Albums = () => {
    return (
    <div className="album-container">
      <p className="subtitle">Albums</p>
      <div className="album-list">
        {albumData.map((album, idx) => (
          <AlbumCard
            key={idx}
            title={album.title}
            date={album.date}
            image={album.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Albums