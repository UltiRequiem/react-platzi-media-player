// React Stuff
import React, { useState, useEffect } from 'react';

// Proyect Components
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';

// Proyect Styles
import '@styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/UltiRequiem/react-media-player/main/initialState.json'
    )
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="My List">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="My Second List">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
