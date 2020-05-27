// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  //   let loop = true;
  //   while (loop) {
  //     loop = false;
  //     for (let i = 1; i < array.length; i++) {
  //       if (array[i] < array[i - 1]) {
  //         swap(array, i - 1, i);
  //         loop = true;
  //       }
  //     }
  //   }
  //   return array;

  for (var tail = array.length; tail > 0; tail--) {
    for (var i = 0; i < tail; i++) {
      if (array[i] > array[i + 1]) swap(array, i, i + 1);
    }
  }
  return array;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

// console.log(bubbleSort([8, 6, 4, 9, 5]));

module.exports = bubbleSort;
