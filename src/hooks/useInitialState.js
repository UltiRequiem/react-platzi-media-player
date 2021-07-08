import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
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
        setCategories(Object.keys(data));
      });
  }, []);

  return [videos, categories];
};

export default useInitialState;
