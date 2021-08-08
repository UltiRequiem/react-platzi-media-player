/* eslint-disable react/prop-types */
/* eslint-disable security/detect-object-injection */

// React Stuff
import React from 'react';

import { connect } from 'react-redux';

// Proyect Components
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';

const Home = ({ myList = [], trends = [], originals = [] }) => (
  <>
    <Search isHome />
    {myList.length > 0 && (
      <Categories title="My List">
        <Carousel>
          {myList.map((item, index) => (
            <CarouselItem key={index} {...item} isList />
          ))}
        </Carousel>
      </Categories>
    )}
    <Categories title="Trends">
      <Carousel>
        {trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
    <Categories title="Originals">
      <Carousel>
        {originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
  </>
);

const mapStateToProps = (state) => ({
  myList: state.myList || [],
  trends: state.trends || {},
  originals: state.originals || {}
});

export default connect(mapStateToProps, null)(Home);
