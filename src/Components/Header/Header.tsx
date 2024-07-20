import React from 'react';

import HeaderNav from './HeaderNav';

import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header-top">

        <a href="./" className="logo">
          <img src={logo} alt="TestLab Logo" />
          <span>testLab</span>
        </a>

        <HeaderNav />
      </div>

      <div className="header-bottom">
        <div className="header-title">
          <h1>Говорят, никогда не поздно сменить профессию</h1>
        </div>
        <p className="header-text">Сделай круто тестовое задание и у тебя получится</p>
        <button type="button" className="button header-button button-default">Проще простого!</button>
      </div>

    </div>
  </header>
);

export default Header;
