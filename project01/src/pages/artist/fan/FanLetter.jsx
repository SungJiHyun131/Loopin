import React, { useState } from 'react'
import FanLetterHeader from '../../../components/FanLetterHeader';
import bgtop from '../../../assets/img/bg-top.png';
import './FanLetter.css';
import clip from '../../../assets/img/Fanimg/clip.png'
import photo from '../../../assets/img/Fanimg/photo.png'

const FanLetter = () => {
  const [text, setText] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  return (
    <div>
      <div className="fanletterbg">
        <img src={bgtop} alt="" />
      </div>

      <div className="FanLetterHeader">
        <FanLetterHeader isActive={text.length > 0} />
      </div>

      <div className="FanLetterContent">
        <textarea
          placeholder="루핀에 남겨보세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="fanletter-toolbar">
          <div className="fanicons">
    <button className="fan-icon-btn"><img src={photo} alt="" /></button>
    <button className="fan-icon-btn"><img src={clip} alt="" /></button></div>

    <div className="secret-toggle">
    <span style={{ color: isSecret ? '#d8b4f8' : '#999' }}>비밀 레터</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isSecret}
          onChange={() => setIsSecret(!isSecret)}
        />
        <span className="fan-slider"></span>
      </label>
    </div>
  </div>
      </div>
    </div>
  )
}

export default FanLetter
