/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // let curr = 0;
  // let max = arr[0];
  // arr.forEach(i => {
  //   curr = Math.max(i, curr + i);
  //   max = Math.max(max, curr);
  // });
  // return max;

  let localMax = 0;
  let globalMax = Number.NEGATIVE_INFINITY;
  arr.forEach((elem) => {
    localMax = Math.max(elem, elem + localMax);
    globalMax = Math.max(localMax, globalMax);
    // console.log(localMax);
    // console.log(globalMax);
  });

  return globalMax;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
