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
  productSum,
  findThreeLargestNumbers,
  binarySearchArray,
  bubbleSort,
  insertionSort,
  selectionSort,
} = require('./easy');

test('twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)', () => {
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

test('minimumWaitingTime([3, 2, 1, 2, 6])', () => {
  const result = minimumWaitingTime([3, 2, 1, 2, 6]);
  expect(result).toEqual(17);
});

test('classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])', () => {
  const result = classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
  expect(result).toEqual(true);
});

test('tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)', () => {
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

test('productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])', () => {
  const result = productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
  expect(result).toEqual(12);
});

test('findThreeLargestNumbers([10, 5, 9, 10, 12])', () => {
  const result1 = findThreeLargestNumbers([10, 5, 9, 10, 12]);
  expect(result1).toEqual([10, 10, 12]);
  const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  const result2 = findThreeLargestNumbers(array);
  expect(result2).toEqual([18, 141, 541]);
});

test('binarySearchArray([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)', () => {
  const result = binarySearchArray([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
  // middle index => 4, 1, 2, 3
  expect(result).toEqual(3);
});

test('bubbleSort([8, 5, 2, 9, 5, 6, 3])', () => {
  const result = bubbleSort([8, 5, 2, 9, 5, 6, 3]);
  expect(result).toEqual([2, 3, 5, 5, 6, 8, 9]);
});

test('insertionSort([8, 5, 2, 9, 5, 6, 3])', () => {
  const result = insertionSort([8, 5, 2, 9, 5, 6, 3]);
  expect(result).toEqual([2, 3, 5, 5, 6, 8, 9]);
});

test('selectionSort([8, 5, 2, 9, 5, 6, 3])', () => {
  const result = selectionSort([8, 5, 2, 9, 5, 6, 3]);
  expect(result).toEqual([2, 3, 5, 5, 6, 8, 9]);
});
