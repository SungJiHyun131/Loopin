import React from 'react';
import './NewMv.css'
import VideoList from '../components/VideoList';
import Thum1 from '../assets/img/IllitHomeimg/mediaimg/Thum1.png';
import Thum2 from '../assets/img/IllitHomeimg/mediaimg/Thum2.png';

const NewVideos = [
  {
    id: 1,
    title: "‘빌려온 고양이 ( Do the Dance )’ 녹음 비하인드 | [BEHIND-IT]",
    date: "2025.07.07",
    thumbnail: Thum1,
    duration: "28:34",
    link: "https://youtu.be/5mx2Dgdy82g?si=Jpt9VWl3Bh3bM2dd",
  },
  // ...더 추가
];
const HistoryVideos = [
  {
    id: 1,
    title: "‘빌려온 고양이 ( Do the Dance )’  Official MV",
    date: "2025.06.16",
    thumbnail: Thum2,
    duration: "03:22",
    link: "https://youtu.be/negtrQu5mTA?si=bq97TuXK5ajVETJm",
  },
  // ...더 추가

];
const NewMv = () => {
    return (
      <div className='container-newMv'>
        <p className="subtitle">New Released</p>
        <VideoList videos={HistoryVideos} />
      </div>
    );
  };

export default NewMv