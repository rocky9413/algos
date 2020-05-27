// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0 && array[j - 1] > array[j]; j--) {
      // [array[j - 1], array[j]] = [array[j], array[j - 1]];
      swap(array, j - 1, j);
    }
  }
  return array;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(insertionSort([8, 6, 6, 9, 2, 3, 5]));

module.exports = insertionSort;
