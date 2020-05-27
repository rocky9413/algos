/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i+1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === n) return true;
  //   }
  // }
  // return false;

  // check that inputs are valid before running our code
  if (Array.isArray(arr) !== true) return false;
  if (typeof n !== 'number') return false;

  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) return true; // check if that value already exists in cache
    cache[n - arr[i]] = true; // if not, add the value to our cache
  }
  return false;
}

// console.log(twoSum([12, 10, 8, 9, 6], 15));
// console.log(twoSum([7, 10, 11, 4, 6], 15));

module.exports = twoSum;
