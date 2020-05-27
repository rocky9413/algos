/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  if (!Array.isArray(array)) return undefined;
  array.sort((a, b) => a[0] - b[0]);
  const newArr = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] > array[i - 1][1]) {
      newArr.push(array[i]);
    } else if (array[i][1] > array[i - 1][1]) {
      newArr[newArr.length - 1][1] = array[i][1];
    }
  }
  return newArr;
}

// const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(mergeRanges(times));

module.exports = mergeRanges;
