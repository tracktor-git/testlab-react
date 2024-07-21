import React from 'react';

import HowItWorksItem, { HowItWorksProps } from './HowItWorksItem';

import wating from '../../assets/images/icon-waiting.svg';
import truck from '../../assets/images/icon-truck.svg';
import secure from '../../assets/images/icon-secure.svg';
import moneyBag from '../../assets/images/icon-money-bag.svg';
import middle from '../../assets/images/middle.png';

import './HowItWorks.css';

type HowItWorksData = HowItWorksProps & { id: number };

const data: HowItWorksData[] = [
  {
    id: 1,
    icon: wating,
    title: 'Прочитай задание внимательно',
    text: 'Думаю у тебя не займет это больше двух-трех минут',
  },
  {
    id: 2,
    icon: truck,
    title: 'Изучи весь макет заранее',
    text: 'Подумай как это будет работать на разных разрешениях и при скролле',
  },
  {
    id: 3,
    icon: secure,
    title: 'Сделай хорошо',
    text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
  },
  {
    id: 4,
    icon: moneyBag,
    title: 'Получи предложение',
    text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="how-it-works">
    <div className="container">
      <div className="how-it-works-top">
        <div className="how-it-works-title">
          <h2>Как это работает</h2>
        </div>
        <div className="how-it-works-features">
          {
            data.map(({
              id, icon, text, title,
            }) => <HowItWorksItem key={id} icon={icon} title={title} text={text} />)
          }
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
