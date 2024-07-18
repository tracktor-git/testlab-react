import React from 'react';
import Slider from 'react-slick';

import Slide, { SlideProps } from './Slide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css';

interface SlideType extends SlideProps {
  id: number;
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
};

const Reviews: React.FC = () => {
  const [slides, setSlides] = React.useState<SlideType[]>([]);

  React.useEffect(() => {
    fetch('./reviews.json')
      .then((data) => data.json())
      .then((data) => setSlides(data))
      .catch((error) => console.warn('e ->', error));
  }, []);

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-title">
          <h2>Отзывы</h2>
        </div>
        <div className="swiper-container">
          <div className="reviews-slider">
            <Slider {...settings}>
              {
                slides.map((slide) => (
                  <Slide
                    key={slide.id}
                    avatar={slide.avatar}
                    name={slide.name}
                    city={slide.city}
                    text={slide.text}
                  />
                ))
              }
            </Slider>
          </div>
          <div className="slider-bullets" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
