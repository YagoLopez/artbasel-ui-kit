module.exports = {
  moduleDirectories: [
    'node_modules',
    __dirname, // the root directory
  ],

  // Automatically clear mock calls and instances between every test
  clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  collectCoverageFrom: ['packages/**/*.js', '!src/index.js', '!packages/**/*.stories.js'],

  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
};
