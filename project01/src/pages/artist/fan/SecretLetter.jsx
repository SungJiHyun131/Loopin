import React from 'react'
import FanLetterHeader from '../../../components/FanLetterHeader';
import bgtop from '../../../assets/img/bg-top.png'
import './FanLetter.css'

const SecretLetter = () => {
  return (
    <div>
      <div className="fanletterbg"><img src={bgtop} alt="" /></div>
       <div className="FanLetterHeader">
          <FanLetterHeader />
        </div>
    </div>
  )
}

export default SecretLetter
