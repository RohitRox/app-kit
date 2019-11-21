import logger from '../../lib/logger';

test('Logger should be derived logger', () => {
  expect(logger.constructor.name).toEqual("DerivedLogger");
});
