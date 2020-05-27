/*
  You have a knapsack with a weight limit. You are also presented with a list of singular items, each with a weight and a value. Each item can be counted only once. What is the optimal total value of a set of items that can fit in your knapsack?
  You are presented with an array of singlular objects, each object has a weight and value.
  Imagine that each object represents a unique item, to be counted once.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
*/

const knapsack = (arr, allow) => {
  // declare value initiate 0
  const value = 0;
  // get numbers of way for added weight = allow

  // find the max value from the different way of output

  return allow;
};

const items = [
  { weight: 1, value: 3 },
  { weight: 2, value: 4 },
  { weight: 3, value: 5 },
];
console.log(knapsack(items, 3)); // returns 7 (from items[0] and items[1])
console.log(knapsack(items, 5)); // returns 9 (from items[1] and items[2])

/*
  Extension: complete knapsack with Bottom-Up Dynamic Programming
  Hint: Use a matrix/table (an array of arrays)
*/
const knapsackAdvanced = () => {};

module.exports = { knapsack, knapsackAdvanced };
