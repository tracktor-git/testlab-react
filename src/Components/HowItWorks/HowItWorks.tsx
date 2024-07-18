import React from 'react';

import wating from '../../assets/images/icon-waiting.svg';
import truck from '../../assets/images/icon-truck.svg';
import secure from '../../assets/images/icon-secure.svg';
import moneyBag from '../../assets/images/icon-money-bag.svg';
import middle from '../../assets/images/middle.png';

import './HowItWorks.css';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="how-it-works">
    <div className="container">
      <div className="how-it-works-top">
        <div className="how-it-works-title">
          <h2>Как это работает</h2>
        </div>
        <div className="how-it-works-features">
          <div className="how-it-works-item">
            <div className="how-it-works-icon"><img src={wating} alt="Icon" /></div>
            <div className="how-it-works-text">
              <p className="how-it-works-description">Прочитай задание внимательно</p>
              <p className="how-it-works-subtext">Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </div>
          <div className="how-it-works-item">
            <div className="how-it-works-icon"><img src={truck} alt="Icon" /></div>
            <div className="how-it-works-text">
              <p className="how-it-works-description">Изучи весь макет заранее</p>
              <p className="how-it-works-subtext">Подумай как это будет работать на разных разрешениях и при скролле</p>
            </div>
          </div>
          <div className="how-it-works-item">
            <div className="how-it-works-icon"><img src={secure} alt="Icon" /></div>
            <div className="how-it-works-text">
              <p className="how-it-works-description">Сделай хорошо</p>
              <p className="how-it-works-subtext">Чтобы мы могли тебе доверить подобные задачи в будущем</p>
            </div>
          </div>
          <div className="how-it-works-item">
            <div className="how-it-works-icon"><img src={moneyBag} alt="Icon" /></div>
            <div className="how-it-works-text">
              <p className="how-it-works-description">Получи предложение</p>
              <p className="how-it-works-subtext">Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works-bottom">
        <div className="how-it-works-bottom-left">
          <div className="title">Круто, ты дошел до третьего блока</div>
          <div className="subtext">63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</div>
          <div className="subtext">Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</div>
        </div>
        <div className="how-it-works-bottom-right">
          <img src={middle} alt="How it works" />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
