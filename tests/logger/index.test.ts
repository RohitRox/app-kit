import logger from '../../lib/logger';

test('Logger', () => {
  expect(logger.constructor.name).toEqual("DerivedLogger");
});
