/* eslint-disable security/detect-object-injection */

// React Stuff
import React from 'react';

// Proyect Components
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';

// Utils
import capitalize from '../utils/capitalize';

// Custom Hooks
import useInitialState from '../hooks/useInitialState';

const API =
  'https://raw.githubusercontent.com/UltiRequiem/react-media-player/main/initialState.json';

const Home = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <>
      <Search />
      {categories.map(
        (category, index) =>
          videos[category].length > 0 && (
            <Categories title={capitalize(category)} key={index}>
              <Carousel>
                {videos[category].map((item, i) => (
                  <CarouselItem key={i} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
      )}
    </>
  );
};

export default Home;
