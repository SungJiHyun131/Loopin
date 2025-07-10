import React, { useState } from 'react';
import './ToggleBtn.css'; // 스타일도 함께 import

const ToggleBtn = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="toggle-container">
      {items.map((item, idx) => (
        <button
          key={idx}
          className={`toggle-btn 
                      ${idx === 0 ? 'left' : ''} 
                      ${idx === items.length - 1 ? 'right' : ''} 
                      ${idx === activeIndex ? 'active' : ''}`}
          onClick={() => setActiveIndex(idx)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ToggleBtn;