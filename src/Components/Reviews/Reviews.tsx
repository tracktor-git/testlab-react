import React from 'react';

import { useSwipeable } from 'react-swipeable';
import { toast } from 'react-toastify';
import { useMatchMedia, useAppDispatch, useAppSelector } from '../../hooks';
import { setReviews } from '../../redux/slices/reviewsSlice';

import Slide from './Slide';
import SlideNavButtons from './SlideNavButtons';
import SliderPagination from './SliderPagination';
import Spinner from '../Common/Spinner/Spinner';

import './Reviews.css';

const Reviews: React.FC = () => {
  const [offset, setOffset] = React.useState(0);
  const [slidesPerPage, setSlidesPerPage] = React.useState(3);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const isMounted = React.useRef(false);

  /* Предотвращение дублирования данных в React.StrictMode */
  React.useEffect(() => {
    isMounted.current = !isMounted.current;
  }, []);

  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  /* Имитируем загрузку отзывов с сервера */
  React.useEffect(() => {
    if (isMounted.current) {
      setIsLoading(true);

      fetch('./data/reviews.json')
        .then((data) => data.json())
        .then((data) => dispatch(setReviews(data)))
        .catch((error) => {
          toast.error('Не удалось загрузить отзывы...');
          console.error(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [dispatch]);

  /* Устанавливаем количество слайдов на странице в зависимости от размера экрана */
  React.useEffect(() => {
    if (isMobile) setSlidesPerPage(1);
    if (isTablet) setSlidesPerPage(2);
    if (isDesktop) setSlidesPerPage(3);
  }, [isMobile, isTablet, isDesktop]);

  /* Возвращаем на первый слайд когда меняется размер экрана */
  React.useEffect(() => setOffset(0), [slidesPerPage]);

  const increase = () => offset < reviews.length - slidesPerPage && setOffset((prev) => prev + 1);
  const decrease = () => offset > 0 && setOffset((prev) => prev - 1);

  /* Добавляем возможность переключения слайдов свайпом */
  const swipeHandlers = useSwipeable({
    onSwipedLeft: increase,
    onSwipedRight: decrease,
    trackMouse: true,
  });

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-title">
          <h2>Отзывы</h2>
        </div>

        {isLoading && <Spinner />}
        {(!isLoading && reviews.length < 1) && <div className="data-empty">Нет отзывов...</div>}

        <div className="reviews-slider" {...swipeHandlers}>
          {reviews.slice(offset, offset + slidesPerPage).map((slide) => (
            <Slide
              key={slide.id}
              city={slide.city}
              text={slide.text}
              name={slide.name}
              avatar={slide.avatar}
            />
          ))}

          <SlideNavButtons
            handleNext={increase}
            handlePrev={decrease}
            isNextDisabled={offset === reviews.length - slidesPerPage}
            isPrevDisabled={offset === 0}
            isShown={reviews.length !== 0}
          />
        </div>

        <SliderPagination
          length={reviews.length - slidesPerPage + 1}
          offset={offset}
          handleClick={setOffset}
        />
      </div>
    </section>
  );
};

export default Reviews;
