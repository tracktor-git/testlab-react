import React from 'react';

const HeaderNav: React.FC = () => {
  const [isNavOpened, setIsNavOpened] = React.useState(false);

  const bodyRef = React.useRef(document.body);

  React.useEffect(() => {
    if (isNavOpened) {
      bodyRef.current.classList.add('nav-open');
    } else {
      bodyRef.current.classList.remove('nav-open');
    }
  }, [isNavOpened]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsNavOpened(false);

    const target = event.target as HTMLAnchorElement;
    const id = target.href.split('#')[1];
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;

    if (target.tagName === 'DIV') {
      setIsNavOpened(false);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setIsNavOpened(false);
    }
  };

  return (
    <div className="nav-wrapper">
      <nav className={isNavOpened ? 'nav nav-open' : 'nav'}>
        <div role="button" tabIndex={0} onClick={handleNavClick} onKeyUp={handleKeyUp}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#how-it-works" onClick={handleLinkClick}>Как это работает</a></li>
            <li className="nav-item"><a href="#reviews" onClick={handleLinkClick}>3-й блок</a></li>
            <li className="nav-item"><a href="#faq" onClick={handleLinkClick}>Вопросы и ответы</a></li>
            <li className="nav-item"><a href="#form" onClick={handleLinkClick}>Форма</a></li>
          </ul>
        </div>
      </nav>

      <button
        type="button"
        className="burger-menu-button"
        aria-label="Mobile nav button"
        onClick={() => setIsNavOpened(!isNavOpened)}
      />
    </div>
  );
};

export default HeaderNav;
