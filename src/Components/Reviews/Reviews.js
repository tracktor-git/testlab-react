import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css';
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
};
const Reviews = () => {
    const [slides, setSlides] = React.useState([]);
    React.useEffect(() => {
        fetch('./reviews.json')
            .then((data) => data.json())
            .then((data) => setSlides(data))
            .catch((error) => console.warn('e ->', error));
    }, []);
    return (_jsx("section", { id: "reviews", className: "reviews", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "reviews-title", children: _jsx("h2", { children: "\u041E\u0442\u0437\u044B\u0432\u044B" }) }), _jsxs("div", { className: "swiper-container", children: [_jsx("div", { className: "reviews-slider", children: _jsx(Slider, Object.assign({}, settings, { children: slides.map((slide) => (_jsx(Slide, { avatar: slide.avatar, name: slide.name, city: slide.city, text: slide.text }, slide.id))) })) }), _jsx("div", { className: "slider-bullets" })] })] }) }));
};
export default Reviews;
