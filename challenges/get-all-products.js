/* Accepts an array of integers and returns an array of all the possible products made by multiplying all but one number. In other words, find all the products of multiplying any array.length-1 numbers in the array.
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!array || !array.length) return [0];
  let result = [];
  let productSoFar = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = productSoFar;
    productSoFar *= array[i];
  }
  productSoFar = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= array[j];
  }
  return result;
}

// console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
