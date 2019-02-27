import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div class="header">
      <a href="#default" class="logo">CompanyLogo</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">{props.name}</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;