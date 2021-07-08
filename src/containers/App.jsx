// React Stuff
import React from 'react';

// Proyect Components
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';

// Proyect Styles
import '@styles/App.scss';

// Custom Hooks
import useInitialState from '../hooks/useInitialState';

// Utils
import capitalize from '../utils/capitalize';

const API =
  'https://raw.githubusercontent.com/UltiRequiem/react-media-player/main/initialState.json';

const App = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {categories.map(
        (category) =>
          videos[category].length > 0 && (
            <Categories title={capitalize(category)}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
      )}

      <Footer />
    </div>
  );
};

export default App;
