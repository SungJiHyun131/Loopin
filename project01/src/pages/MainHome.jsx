import React,{useState} from 'react'
import ArtistCard from '../components/ArtistCard'
import './MainHome.css'
import SearchBar from '../components/SearchBar';
import heart from'../assets/img/heart.png'
import filter from'../assets/img/filter_icon.png'
const MainHome = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='container main'>
      <p className="txt1">심장 저격할 최애 찾기 <img src={heart} alt="" /></p>
       <SearchBar onChange={(e) => setQuery(e.target.value)} />
      <p className="filter"><img src={filter} alt="" /></p>
     <ArtistCard/>
    </div>
  )
}

export default MainHome
