import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi'; // 아이콘 라이브러리

const SearchBar = ({ placeholder = '나의 아티스트를 검색하세요.', onChange }) => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;