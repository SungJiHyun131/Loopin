import React,{useState} from 'react'
import ArtistCard from '../components/ArtistCard'
import './MainHome.css'
import SearchBar from '../components/SearchBar';
import filter from'../assets/img/filter_icon.png'
const MainHome = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='container main'>
     
       <SearchBar onChange={(e) => setQuery(e.target.value)} />
       {/* <p className="filter"><img src={filter} alt="" /></p> */}
       <p className="txt1">
        나의 아티스트를 선택해주세요
       </p>
       <p className="txt2">
        Please select your artist
       </p>
     
     <ArtistCard/>
    </div>
  )
}

export default MainHome
