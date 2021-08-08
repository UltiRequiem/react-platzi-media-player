/* eslint-disable global-require */

import express from 'express';
import webpack from 'webpack';

const app = express();

const config = {
  PORT: 3000,
  ENV: 'production'
};

if (config.ENV === 'production') {
  console.log('Environment set to production.');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(require('../../webpack.config'));
  const serverConfig = { port: config.PORT, hot: true };
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(config.PORT, (err) => {
  if (err) console.log(err);
  console.log(`Running on https://localhost:${config.PORT}`);
});
