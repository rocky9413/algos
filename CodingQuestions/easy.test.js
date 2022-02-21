const {
  twoNumberSum,
  isValidSubsequence,
  sortedSquaredArray,
  tournamentWinner,
  nonConstructibleChange,
  minimumWaitingTime,
  classPhotos,
  tandemBicycle,
  getNthFib,
} = require('./easy');

test('twoNumberSum([3,5,-4,8,11,1,-1,6], 10).length === 2', () => {
  const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(result.length).toEqual(2);
  expect(result.includes(11)).toBe(true);
  expect(result.includes(-1)).toBe(true);
});

test('isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])', () => {
  const result = isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [1, 6, -1, 10]
  );
  expect(result).toEqual(true);
});

test('sortedSquaredArray([-3, -2, -1])', () => {
  const result = sortedSquaredArray([-3, -2, -1]);
  expect(result).toEqual([1, 4, 9]);
});

test('tournamentWinner([["HTML", "JS"], ["JS", "CSS"], ["CSS", "HTML"]], [0, 0, 1])', () => {
  const result = tournamentWinner(
    [
      ['HTML', 'JS'],
      ['JS', 'CSS'],
      ['CSS', 'HTML'],
    ],
    [0, 0, 1]
  );
  expect(result).toEqual('CSS');
});

test('nonConstructibleChange([1, 2, 4, 9])', () => {
  const result = nonConstructibleChange([1, 2, 4, 9]);
  expect(result).toEqual(8);
});

test('minimumWaitingTime([3,2,1,2,6])', () => {
  const result = minimumWaitingTime([3, 2, 1, 2, 6]);
  expect(result).toEqual(17);
});

test('classPhotos([5,8,1,3,4], [6,9,2,4,5])', () => {
  const result = classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
  expect(result).toEqual(true);
});

test('tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true)', () => {
  const maxTotal = tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true);
  const minTotal = tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false);
  expect(maxTotal).toEqual(32);
  expect(minTotal).toEqual(25);
});

test('getNthFib(n)', () => {
  const fib2 = getNthFib(2);
  expect(fib2).toEqual(1);
  const fib6 = getNthFib(6);
  expect(fib6).toEqual(5);
});
