import React from 'react';
import Accordion, { AccordionData } from './Accordion';

import './Faq.css';

const Faq: React.FC = () => {
  const [accordionData, setAccordionData] = React.useState<AccordionData[]>([]);

  /* Сымитируем, будто данные приходят откуда-то с API */
  React.useEffect(() => {
    fetch('./data/accordion.json')
      .then((data) => data.json())
      .then((data) => setAccordionData(data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-title">
          <h2>Вопросы и ответы</h2>
        </div>
        <div className="accordion-wrapper">
          {
            accordionData.map(({ id, body, header }) => (
              <Accordion key={id} header={header} body={body} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Faq;
