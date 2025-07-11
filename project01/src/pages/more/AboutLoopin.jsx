import React from 'react'
import AboutLoopinHeader from '../../components/AboutLoopinHeader'
import './AboutLoopin.css'
import logo from '../../assets/img/logo.png'


const AboutLoopin = () => {
  return (
    <div>
      <div className='AboutLoopinHeader'>
        <AboutLoopinHeader/>
      </div>
      <div className="container About">
        <p className="about"><img src={logo} alt="" /></p>
        <p className="about2">📀 너와 나, 좋아하는 감정이<br />
          🔁 끊김 없이 이어지는 세계 —  <br />
          우리가 바라보고, 듣고, 느끼는 모든 순간이<br />  
          하나의 감정 루프로 연결되는 곳, Loopin.<br />
          <br />
          🎧 하루의 시작도, 끝도,<br />  
          그 사람을 향한 마음으로 채워지고,<br />  
          💌 그 마음은 여기에서 더 깊어져요.<br />
          <br />
          💘 지금, 감정이 이어지는 이 공간에<br />  
          Loopin으로 함께 들어와요.</p>
      </div>
    </div>
  )
}

export default AboutLoopin
