import webpack from 'webpack';
import config from '../../config';
import webpackConfig from './development';

webpackConfig.entry.app.push(
  `webpack-dev-server/client?${config.get('webpack_public_path')}`,
  `webpack/hot/dev-server`
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

// Apply the react-transform HMR plugin to Babel only when it's enabled
webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
  if (/js(?!on)/.test(loader.test)) {
    loader.query.env.development.extra['react-transform'].transforms.push({
      transform : 'react-transform-hmr',
      imports : ['react'],
      locals : ['module']
    });
  }

  return loader;
});

export default webpackConfig;
