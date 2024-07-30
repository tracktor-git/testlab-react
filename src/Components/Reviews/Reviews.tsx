import React from 'react';

import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setReviews } from '../../redux/slices/reviewsSlice';

import Slide from './Slide';
import Spinner from '../Common/Spinner/Spinner';

import 'swiper/css';
import 'swiper/css/pagination';
import './Reviews.css';

const Reviews: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const isMounted = React.useRef(false);

  const slides = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  /* Имитируем загрузку отзывов с сервера */
  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    setIsLoading(true);

    fetch('./data/reviews.json')
      .then((data) => data.json())
      .then((data) => dispatch(setReviews(data)))
      .catch((error) => {
        toast.error('Не удалось загрузить отзывы...');
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  const breakpointsOptions = {
    461: { slidesPerView: 1 },
    787: { slidesPerView: 2 },
    1201: { slidesPerView: 3 },
  };

  const navigationOptions = {
    nextEl: '.slider-button.next',
    prevEl: '.slider-button.prev',
  };

  const paginationOptions = {
    el: '.slider-bullets',
    clickable: true,
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-title">
          <h2>Отзывы</h2>
        </div>

        {isLoading && <Spinner />}
        {(!isLoading && slides.length < 1) && <div className="data-empty">Нет отзывов...</div>}

        <div className="slider-wrapper">
          <Swiper
            spaceBetween={30}
            breakpoints={breakpointsOptions}
            navigation={navigationOptions}
            pagination={paginationOptions}
            modules={[Navigation, Pagination]}
          >
            {
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Slide
                    avatar={slide.avatar}
                    city={slide.city}
                    name={slide.name}
                    text={slide.text}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <button type="button" className="slider-button next" />
          <button type="button" className="slider-button prev" />
          <div className="slider-bullets" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
