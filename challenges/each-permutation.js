/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  let len = arr.length;
  if (len <= 1) return callback(arr);

  const obj = {};
  for (let i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  const array = Object.values(obj);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) count++;
  }
}

// eachPermutation([1], perm => console.log(perm));
// [1, 2, 3][(1, 3, 2)][(2, 1, 3)][(2, 3, 1)][(3, 1, 2)][(3, 2, 1)];

module.exports = eachPermutation;
