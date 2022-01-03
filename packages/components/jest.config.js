const base = require('../../jest.config.base');
const packageJson = require('./package.json');

module.exports = {
  ...base,
  testEnvironment: 'jsdom',
  name: packageJson.name,
  displayName: packageJson.name,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/helpers/styleMock.js',
  },
};
