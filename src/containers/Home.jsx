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

// Utils
import capitalize from '../utils/capitalize';

const API =
  'https://raw.githubusercontent.com/UltiRequiem/react-media-player/main/initialState.json';

const Home = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  const [originalVideos, setOriginalVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setOriginalVideos(data);
        setCategories(Object.keys(data));
      });
  }, []);

  const print = (cat, str) => {
    const newVideos = { ...originalVideos };
    newVideos[cat] = originalVideos[cat].map((video) => {
      // eslint-disable-next-line no-param-reassign
      video.title =
        str === video.title
          ? `${str} (selected)`
          : video.title.replace(' (selected)', '');
      return video;
    });
    setVideos(newVideos);
  };

  return (
    <div className="App">
      <Header />
      <Search />
      {categories.map(
        (category, index) =>
          videos[category].length > 0 && (
            <Categories title={capitalize(category)} key={index}>
              <Carousel>
                {videos[category].map((item, i) => (
                  <CarouselItem
                    key={i}
                    print={() => print(category, item.title)}
                    {...item}
                  />
                ))}
              </Carousel>
            </Categories>
          )
      )}

      <Footer />
    </div>
  );
};

export default Home;
