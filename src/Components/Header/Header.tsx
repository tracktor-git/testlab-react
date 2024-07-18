import React from 'react';

import logo from '../../assets/images/logo.svg';
import './Header.css';

import Button from '../Common/Button/Button';

const Header: React.FC = () => {
  const [isNavOpened, setIsNavOpened] = React.useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsNavOpened(false);

    const target = event.target as HTMLAnchorElement;
    const id = target.href.split('#')[1];
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (target.tagName === 'UL') {
      setIsNavOpened(false);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setIsNavOpened(false);
    }
  };

  const burgerClassName = isNavOpened ? 'burger-menu-button open' : 'burger-menu-button';

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a href="/" className="logo">
            <img src={logo} alt="TestLab Logo" />
            <span>testLab</span>
          </a>
          <button type="button" className={burgerClassName} aria-label="Mobile nav button" />
          <nav className="nav">
            <div role="button" tabIndex={0} onClick={handleNavClick} onKeyUp={handleKeyUp}>
              <ul className="nav-list">
                <li className="nav-item"><a href="#how-it-works" onClick={handleLinkClick}>Как это работает</a></li>
                <li className="nav-item"><a href="#reviews" onClick={handleLinkClick}>3-й блок</a></li>
                <li className="nav-item"><a href="#faq" onClick={handleLinkClick}>Вопросы и ответы</a></li>
                <li className="nav-item"><a href="#form" onClick={handleLinkClick}>Форма</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header-bottom">
          <div className="header-title">
            <h1>Говорят, никогда не поздно сменить профессию</h1>
          </div>
          <p className="header-text">Сделай круто тестовое задание и у тебя получится</p>
          <Button label="Проще простого!" type="button" severity="default" className="header-button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
