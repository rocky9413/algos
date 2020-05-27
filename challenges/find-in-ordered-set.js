/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
 */

//   0, 1, 2, 3, 4, 5, 6
const numbers = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(numbers, 4)); // -> true
console.log(findInOrderedSet(numbers, 2)); // -> false

function findInOrderedSet(arr, target) {
  let mid = Math.floor(arr.length / 2);
  console.log(mid);
  while (arr.length > 1) {
    // console.log(arr.length);
    if (arr[mid] === target) return true;
    if (arr[mid] > target) {
      arr = arr.slice(0, mid);
      return findInOrderedSet(arr, target);
    } else if (arr[mid] < target) {
      arr = arr.slice(mid, arr.length);
      return findInOrderedSet(arr, target);
    }
  }
  return arr[0] === target ? true : false;
}

module.exports = findInOrderedSet;
