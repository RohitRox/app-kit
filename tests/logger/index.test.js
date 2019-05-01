import Logger from 'logger';

test('Logger', () => {
  expect(Logger.constructor.name).toEqual("DerivedLogger");
});
