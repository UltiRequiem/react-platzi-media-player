import React from 'react';
import '@styles/components/Search.scss';

const mainTitleText = '¿Que quieres ver hoy?';
const mainInputPlaceholder = 'Buscar...';

// eslint-disable-next-line react/display-name
export default () => (
  <section className="main">
    <h2 className="main__title">{mainTitleText}</h2>
    <input type="text" className="input" placeholder={mainInputPlaceholder} />
  </section>
);
