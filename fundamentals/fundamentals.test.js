const { isNegativeOrOdd, repeat, isNumber } = require('./fundamentals');

test('isNegativeOrOdd(n) true for neg or odd number', () => {
  expect.assertions(3);
  expect(isNegativeOrOdd(1)).toBe(true);
  expect(isNegativeOrOdd(-2)).toBe(true);
  expect(isNegativeOrOdd(2)).toBe(false);
});

test('repeat(string, n) repeat a string by n times', () => {
  expect(repeat('abc', 3)).toEqual('abcabcabc');
  expect(repeat('*', 3)).toEqual('***');
});

test('isNumber(value) return boolean', () => {
  expect(isNumber('abc')).toBe(false);
  expect(isNumber(3)).toBe(true);
});
