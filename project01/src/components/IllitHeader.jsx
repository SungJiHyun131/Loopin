import React from 'react'
import { useNavigate } from 'react-router-dom';
const IllitHeader = () => {
     const navigate = useNavigate();
  return (
    <div>
       <header className='header-container'>
        <button className="back-button" onClick={()=> navigate('/')}>«</button>
        <h2 className="title">Illit</h2>
    </header>
    </div>
  )
}

export default IllitHeader
