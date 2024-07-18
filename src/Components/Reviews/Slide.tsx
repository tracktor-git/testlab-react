import React from 'react';

export type SlideProps = {
  avatar: string,
  name: string,
  city: string,
  text: string,
};

const Slide: React.FC<SlideProps> = (props) => {
  const {
    avatar,
    name,
    city,
    text,
  } = props;

  return (
    <div className="slide-item-wrapper">
      <div className="slider-item">
        <div className="slider-item-user">
          <div className="user-avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="user-info">
            <div className="name">{name}</div>
            <div className="city">{city}</div>
          </div>
        </div>
        <p className="slider-item-text">{text}</p>
      </div>
    </div>
  );
};

export default Slide;
