module.exports = {
  'transform': {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  verbose: true,
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: [
    "lib",
    'tests'
  ],
  modulePaths: [
    "node_modules",
    "lib"
  ],
  testRegex: 'test.js$',
  testEnvironment: 'node',
};
