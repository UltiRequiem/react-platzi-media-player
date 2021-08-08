/* eslint-disable global-require */

import express from 'express';
import webpack from 'webpack';

const app = express();

const config = {
  PORT: 3000,
  ENV: 'production'
};

if (config.ENV === 'development') {
  console.log('Environment set to development.');

  const compiler = webpack(require('../../webpack.config.dev'));

  app.use(require('webpack-dev-middleware')(compiler, { port: config.PORT, hot: true }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(config.PORT, (err) => {
  if (err) console.log(err);
  console.log(`Running on https://localhost:${config.PORT}`);
});
