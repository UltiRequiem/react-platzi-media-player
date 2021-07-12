/* eslint-disable react/prop-types */
import React from 'react';

import classNames from 'classnames';

import '@styles/components/Search.scss';

const mainTitleText = 'What do you wann watch today?';
const mainInputPlaceholder = 'Search...';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome
  });
  return (
    <section className="main">
      <h2 className="main__title">{mainTitleText}</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder={mainInputPlaceholder}
      />
    </section>
  );
};

export default Search;
