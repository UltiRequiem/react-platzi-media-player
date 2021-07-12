import React from 'react';
import '@styles/components/CarouselItem.scss';

import PropTypes from 'prop-types';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

// eslint-disable-next-line react/prop-types
const CarouselItem = ({
  cover,
  title,
  year,
  contentRating,
  duration,
  print,
}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt="Cover" />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          onClick={print}
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {year} {contentRating} {duration} mins
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  print: PropTypes.func,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
