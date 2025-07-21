import React,{useState} from 'react'
import ArtistCard from '../components/ArtistCard'
import './MainHome.css'
import SearchBar from '../components/SearchBar';
// import filter from'../assets/img/filter_icon.png';
import ChatbotButton from './ChatbotButton';
import ChatbotModal from '../components/ChatbotModal';
import wingleft from '../assets/img/wingleft.png'
import wingright from '../assets/img/wingright.png'

const MainHome = () => {
  const [query, setQuery] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className='container main'>
     
       <SearchBar onChange={(e) => setQuery(e.target.value)} />
       {/* <p className="filter"><img src={filter} alt="" /></p> */}
       <div className="mainTop">
        <p className="wingleft"><img src={wingleft} alt="" /></p>
        
        <div className="maintxt">
       <p className="txt1">
        나의 아티스트를 선택해주세요
       </p>
       <p className="txt2">
        Please select your artist
       </p>
       </div>
       <p className="wingright"><img src={wingright} alt="" /></p>
       
       </div>
     <ArtistCard/>

      <ChatbotButton onClick={() => setChatOpen(true)} />
      {chatOpen && <ChatbotModal onClose={() => setChatOpen(false)} />}
    </div>
  )
}

export default MainHome
