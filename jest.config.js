module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 88,
      functions: 88,
      lines: 88,
      statements: 88,
    },
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporters',
      {
        pageTitle: 'Test Report',
        publicPath: './coverage/html-report',
      },
    ],
  ],
};
