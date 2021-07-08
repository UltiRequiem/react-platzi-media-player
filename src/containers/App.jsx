import React from 'react';

import '@styles/App.scss';
import Header from '@components/Header';
import Search from '@components/Search'

const App = () => (
  <div className="App">
    <Header />
    <Search/>
  </div>
);

export default App;
