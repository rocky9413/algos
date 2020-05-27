/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */
function mergeArrays(arr1, arr2) {
  const merged = [];
  let idx1 = 0;
  let idx2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let isA1empty = idx1 >= arr1.length; // check if end of arr1
    let isA2empty = idx2 >= arr2.length; // check if end of arr2

    if ((!isA1empty && arr1[idx1] < arr2[idx2]) || (!isA1empty && isA2empty)) {
      merged.push(arr1[idx1]);
      idx1++;
    } else {
      merged.push(arr2[idx2]);
      idx2++;
    }
    current++;
  }
  return merged;
}

// function mergeArrays(arr1, arr2) {
//   const array = [...arr1, ...arr2];
//   if (array.length < 2) return array.sort((a, b => a - b));
//   return mergeSort(array);
// }

// function mergeSort(array) {
//   if (array.length < 2) return array;
//   let midpoint = Math.floor(array.length / 2);
//   let left = array.slice(0, midpoint);
//   let right = array.slice(midpoint);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let l = 0;
//   let r = 0;
//   while (l < left.length && r < right.length) {
//     if (left[l] < right[r]) result.push(left[l++]);
//     else result.push(right[r++]);
//   }
//   return result.concat(left.slice(l)).concat(right.slice(r));
// }

const my_array = [3, 4, 6, 10, 11, 15, 21];
const another_array = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(my_array, another_array));
// [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
