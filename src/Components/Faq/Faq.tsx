import React from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setFaq } from '../../redux/slices/faqSlice';

import Accordion from './Accordion';
import './Faq.css';

const Faq: React.FC = () => {
  const faqData = useAppSelector((state) => state.faq);
  const dispatch = useAppDispatch();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = !isMounted.current;
  }, []);

  /* Сымитируем, будто данные приходят откуда-то с API */
  React.useEffect(() => {
    if (isMounted.current) {
      fetch('./data/accordion.json')
        .then((data) => data.json())
        .then((data) => dispatch(setFaq(data)))
        .catch((error) => {
          toast.error('Не удалось загрузить вопросы и ответы...');
          console.warn(error.message);
        });
    }
  }, [dispatch]);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-title">
          <h2>Вопросы и ответы</h2>
        </div>
        <div className="accordion-wrapper">
          {
            faqData.map(({ id, body, header }) => (
              <Accordion key={id} header={header} body={body} />
            ))
          }

          {faqData.length < 1 && <div className="data-empty">Нет данных...</div>}
        </div>
      </div>
    </section>
  );
};

export default Faq;
