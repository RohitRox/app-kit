module.exports = {
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true,
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: '/tests/.*',
  testEnvironment: 'node'
};
