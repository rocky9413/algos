/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const sortedArr = array.sort((a, b) => b - a);
  if (sortedArr[0] > 0 && sortedArr[1] > 0 && sortedArr[2] > 0) {
    return sortedArr[0] * sortedArr[1] * sortedArr[2];
  } else {
    const positive = sortedArr.filter(x => x > 0);
    const zero = sortedArr.includes(0);
    const negative = sortedArr.filter(x => x < 0);
    if (positive.length <= 0) {
      if (zero) return 0;
      if (negative.length < 3) return 0;
      return negative[0] * negative[1] * negative[2];
    }
    if (positive.length === 2 && negative.length > 0) {
      if (zero) return 0;
      return (
        positive[positive.length - 1] *
        positive[positive.length - 2] *
        negative[0]
      );
    }
    if (positive.length === 1) {
      if (negative.length < 2 && zero) return 0;
      return (
        positive[0] *
        negative[positive.length - 1] *
        negative[positive.length - 2]
      );
    }
  }
}

// console.log(highestProduct([0, -2, -1, -1, -5, -8]));
// console.log(highestProduct([0, -2, -1, -1, 5, 8]));

module.exports = highestProduct;
