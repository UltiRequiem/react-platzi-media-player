import React from 'react';

import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';

import '@styles/App.scss';

// const TOPICS = ['Movies', 'Anime', 'Others'];
const TOPICS = [
  { topic: 'Movies', items: [1, 2, 3] },
  { topic: 'Others', items: [1, 2] }
];

const App = () => (
  <div className="App">
    <Header />
    <Search />
    {TOPICS.map((topic, index) => (
      <Categories title={topic.topic} key={index}>
        <Carousel>
          {topic.items.map((item, i) => (
            <CarouselItem key={i} />
          ))}
        </Carousel>
      </Categories>
    ))}
    <Footer />
  </div>
);

export default App;
