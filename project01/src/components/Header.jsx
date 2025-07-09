import React from 'react'
import {Link, useLocation} from 'react-router-dom';
const Header = () => {
    const location = useLocation();
  return (
    <div>
        <header>
      <div className="header-top">
        <h1 className="logo">
          <Link to='/'>Home</Link>
        </h1>
        <div className="alarm">
          <Link to='/Alarm'>알람</Link>
        </div>
        <div className="dm">
          <Link to='/Dm'>디엠</Link>
        </div>
        <div className="more">
          <Link to='/MoreHome'>더보기</Link>
        </div>
      </div>
      </header>
    </div>
  )
}

export default Header
