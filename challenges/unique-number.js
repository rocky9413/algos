/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // if (Array.isArray(array)) {
  //   const obj = {};
  //   array.forEach(elem => {
  //     if (obj[elem]) delete obj[elem];
  //     else obj[elem] = elem;
  //   });
  //   if (Object.values(obj).length === 1) return Object.values(obj)[0];
  // }
  // return;

  let result = 0;
  array.forEach(elem => {
    result = result ^ elem;
  });
  return result;
}
console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
