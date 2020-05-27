/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// O(n) time, O(n) space
// function repeatNumbers(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) return array[i];
//     else obj[array[i]] = array[i];
//   }
// }
//                        0, 1, 2, 3, 4, 5, 6
console.log(repeatNumbers([1, 3, 6, 2, 4, 3, 5]));

// // O(n) time, O(1) space
function repeatNumbers(array) {
  var expected = ((array.length - 1) * array.length) / 2;
  var actual = 0;
  // console.log(expected);
  for (var i = 0; i < array.length; i++) {
    actual += array[i];
  }
  return actual - expected; // actual sum - total sum
}

// O(n) time, O(1) space
// function repeatNumbers(array) {
//   var result = 0;
//   for (var i = 0; i < array.length; i++) {
//     result = result ^ i ^ array[i];
//   }
//   return result;
// }

// // O(n) time, O(1) space
// function repeatNumbers(array) {
//   let slow = array[0];
//   let fast = array[1];
//   while (slow !== fast) {
//     console.log(slow, fast);
//     slow = array[slow];
//     if (fast < array.length) fast = array[fast];
//     console.log(slow, fast);
//   }
//   //   return slow;
// }

module.exports = repeatNumbers;
