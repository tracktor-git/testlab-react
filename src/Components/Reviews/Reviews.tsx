import React from 'react';

import { useSwipeable } from 'react-swipeable';
import { useMatchMedia } from '../../hooks';

import Slide, { SlideProps } from './Slide';

import './Reviews.css';

interface SlideType extends SlideProps {
  id: number;
}

// const isBetween = (n: number, start: number, end: number): boolean => (n >= start && n < end);

const Reviews: React.FC = () => {
  const [slides, setSlides] = React.useState<SlideType[]>([]);
  const [offset, setOffset] = React.useState(0);
  const [slidesPerPage, setSlidesPerPage] = React.useState(3);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  React.useEffect(() => {
    fetch('./data/reviews.json')
      .then((data) => data.json())
      .then((data) => setSlides(data))
      .catch((error) => console.warn('e ->', error));
  }, []);

  /* Устанавливаем количество слайдов на странице в зависимости от размера экрана */
  React.useEffect(() => {
    if (isMobile) setSlidesPerPage(1);
    if (isTablet) setSlidesPerPage(2);
    if (isDesktop) setSlidesPerPage(3);
  }, [isMobile, isTablet, isDesktop]);

  /* Возвращаем на первый слайд когда меняется размер экрана */
  React.useEffect(() => setOffset(0), [slidesPerPage]);

  const increase = () => offset < slides.length - slidesPerPage && setOffset((prev) => prev + 1);
  const decrease = () => offset > 0 && setOffset((prev) => prev - 1);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: decrease,
    onSwipedRight: increase,
    trackMouse: true,
  });

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-title">
          <h2>Отзывы</h2>
        </div>

        <div className="reviews-slider" {...swipeHandlers}>
          {slides.slice(offset, offset + slidesPerPage).map((slide) => (
            <Slide
              key={slide.id}
              city={slide.city}
              text={slide.text}
              name={slide.name}
              avatar={slide.avatar}
            />
          ))}

          <button
            type="button"
            className="slider-button prev"
            aria-label="Go to previous"
            onClick={decrease}
            disabled={offset === 0}
          >
            <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="clip736_1034">
                  <rect id="fi-sr-angle-left" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip736_1034)">
                <path id="Vector" d="M23.83 2.27C24.08 2.02 24.21 1.68 24.21 1.33C24.21 0.98 24.06 0.65 23.82 0.4C23.57 0.15 23.24 0.01 22.89 0.01C22.54 0.01 22.2 0.14 21.95 0.39L11.05 11.28C9.8 12.53 9.1 14.23 9.1 16C9.1 17.76 9.8 19.46 11.05 20.71L21.95 31.6C22.2 31.85 22.54 31.98 22.89 31.98C23.24 31.98 23.57 31.84 23.82 31.59C24.06 31.34 24.21 31.01 24.21 30.66C24.21 30.31 24.08 29.97 23.83 29.72L12.94 18.82C12.19 18.07 11.77 17.06 11.77 16C11.77 14.93 12.19 13.92 12.94 13.17L23.83 2.27Z" fill="#C2C8CD" fillOpacity="1.000000" fillRule="nonzero" />
              </g>
            </svg>
          </button>
          <button
            type="button"
            className="slider-button next"
            aria-label="Go to next"
            onClick={increase}
            disabled={offset === slides.length - slidesPerPage}
          >
            <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="clip736_1035">
                  <rect id="fi-sr-angle-left" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip736_1035)">
                <path id="Vector" d="M23.83 2.27C24.08 2.02 24.21 1.68 24.21 1.33C24.21 0.98 24.06 0.65 23.82 0.4C23.57 0.15 23.24 0.01 22.89 0.01C22.54 0.01 22.2 0.14 21.95 0.39L11.05 11.28C9.8 12.53 9.1 14.23 9.1 16C9.1 17.76 9.8 19.46 11.05 20.71L21.95 31.6C22.2 31.85 22.54 31.98 22.89 31.98C23.24 31.98 23.57 31.84 23.82 31.59C24.06 31.34 24.21 31.01 24.21 30.66C24.21 30.31 24.08 29.97 23.83 29.72L12.94 18.82C12.19 18.07 11.77 17.06 11.77 16C11.77 14.93 12.19 13.92 12.94 13.17L23.83 2.27Z" fill="#C2C8CD" fillOpacity="1.000000" fillRule="nonzero" />
              </g>
            </svg>
          </button>

        </div>

        <div className="slider-bullets">
          {slides.length > 0 && Array(slides.length - slidesPerPage + 1)
            .fill(null)
            .map((_, index) => (
              <button
                type="button"
                aria-label="bullet"
                className={index === offset ? 'bullet active' : 'bullet'}
                onClick={() => setOffset(index)}
                key={Math.random()}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
