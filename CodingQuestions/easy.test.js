const { 
    twoNumberSum, 
    isValidSubsequence, 
    sortedSquaredArray,
    nonConstructibleChange,
    minimumWaitingTime,
    tandemBicycle,
} = require('./easy');

test('twoNumberSum([3,5,-4,8,11,1,-1,6], 10).length === 2', () => {
    const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
    expect(result.length).toEqual(2);
    expect(result.includes(11)).toBe(true);
    expect(result.includes(-1)).toBe(true);
});

test('isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])', () => {
    const result = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
    expect(result).toEqual(true);
});

test('sortedSquaredArray([-3, -2, -1])', () => {
    const result = sortedSquaredArray([-3, -2, -1]);
    expect(result).toEqual([1, 4, 9]);
});

test('nonConstructibleChange([1, 2, 4, 9])', () => {
    const result = nonConstructibleChange([1, 2, 4, 9]);
    expect(result).toEqual(8);
});

test('minimumWaitingTime([3,2,1,2,6])', () => {
  const result = minimumWaitingTime([3,2,1,2,6]);
  expect(result).toEqual(17);
});

test('tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true)', () => {
  const maxTotal = tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true);
  const minTotal = tandemBicycle([5,5,3,9,2], [3,6,7,2,1], false);
  expect(maxTotal).toEqual(32);
  expect(minTotal).toEqual(25);
});

