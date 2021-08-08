import React from 'react';
import '@styles/components/Carousel.scss';

// eslint-disable-next-line react/prop-types
const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">{children}</div>
  </section>
);

export default Carousel;
