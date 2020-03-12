const buildConfig = (env) => (
  require('./webpack/' + env + '.js') // eslint-disable-line
);

module.exports = buildConfig;
