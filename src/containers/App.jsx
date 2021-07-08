import React, { useState, useEffect } from 'react';

// Proyect Components
import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';

// Proyect Style
import '@styles/App.scss';

// Items
const CAROUSELS = [
  { topic: 'Movies', items: [1, 2, 3] },
  { topic: 'Anime', items: [1, 2, 3, 4] },
  { topic: 'Others', items: [1, 2, 3, 4, 5, 6] }
];

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos)

  return (
    <div className="App">
      <Header />
      <Search />
      {CAROUSELS.map((carousel, index) => (
        <Categories title={carousel.topic} key={index}>
          <Carousel>
            {carousel.items.map((_item, i) => (
              <CarouselItem key={i} />
            ))}
          </Carousel>
        </Categories>
      ))}
      <Footer />
    </div>
  );
};

export default App;
