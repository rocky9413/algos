// get sum by manipulated k times, each time max value is divided by 2 and rounded up
const minSum = (num, k) => {
  if (num.length === 0) return 0;
  let index = 0;
  let max = Number.POSITIVE_INFINITY;
  let count = 0;
  while (k > 0) {
    let currentValue = num[index];
    if (currentValue <= max) {
      num.sort((a, b) => b - a);
      //   console.log(count++);
      index = 0;
      max = num[0] / 2;
      continue;
    }
    k--;
    currentValue = Math.ceil(currentValue / 2);
    num[index] = currentValue;
    if (index + 1 < num.length) index++;
    // console.log(count++);
  }
  return num.reduce((acc, current) => acc + current, 0);

  //   if (num.length === 0) return 0;
  //   const sortNum = num.slice();
  //   for (let i = 0; i < k; i++) {
  //     sortNum.sort((a, b) => b - a);
  //     sortNum[0] = Math.ceil(sortNum[0] / 2);
  //   }
  //   return sortNum.reduce((acc, current) => acc + current, 0);
};
// console.log(minSum([3, 5, 6, 3, 3, 3, 8], 5));

// find smallest divisor
const smallestDivisor = (s, t) => {
  if (s.length % t.length > 0) return -1;
  let newTString = '';
  for (let i = 0; i * t.length < s.length; i += 1) {
    newTString += t;
  }
  if (newTString !== s) return -1;

  for (let i = 1; i <= t.length; i += 1) {
    let commonString = '';
    const subString = t.substring(0, i);
    while (commonString.length < t.length) {
      commonString += subString;
      console.log(commonString);
    }
    if (commonString === t) return i;
  }
  return -1;
};

// console.log(smallestDivisor('bcdbcdbcdbcd', 'bcdbcd'));

// ==========================================================================

// number of ways to get coins
const change = (n, coins) => {
  if (n === 0) return 0; // Edge
  const dict = {};

  // Set all possible values of 1 to n equal to 0
  for (let i = 1; i <= n; i++) {
    dict[i] = 0;
  }

  // Set all values from lowest coin value to n that are evenly divisible by the lowest coin to equal 1
  for (let i = coins[0]; i <= n; i += coins[0]) {
    dict[i] = 1;
  }

  // For each coin
  for (let i = 1; i < coins.length; i++) {
    let c = coins[i]; // c is current coin

    // For each value(0 thru n) in dict
    for (let i = 0; i <= n; i++) {
      // If that value exists in dict
      // OR if value is equal to coin
      if (dict[i - c] || i === c) {
        // Add dictionary value
        // OR if dict value = 0 (falsey), add 1
        dict[i] += dict[i - c] || 1;
      }
    }
  }

  // Return dict value for n
  return dict[n];
};
// console.log(change(12, [1, 2, 5, 10])); // 15

// time o(n), space O(1)
const summaryRanges = (nums) => {
  let len = nums.length;
  const output = [];
  let index = 0;
  for (let j = 0; j < len; ++j) {
    if (j + 1 < len && nums[j + 1] === nums[j] + 1) {
      continue;
    }
    if (index === j) {
      output.push(`${nums[index]}`);
    } else {
      output.push(`${nums[index]}->${nums[j]}`);
    }
    index = j + 1;
    console.log(index);
  }
  return output;
};
// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

// fewest number of coins to make the amount, return -1 if none
const coinChange = (coins, amount) => {
  const max = amount + 1; //coins cannot be greater than amount and hence setting as boundary
  const dp = new Array(max).fill(max); // Initializing dp array with max value(i.e.12) as we are calculating the minimum no. of coins
  dp[0] = 0; // this is saying we don't need any coins to add up to the amount 0
  for (let i = 1; i < max; i++) {
    // for every amount we see if coin can fit in there
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // this in case the coins are not sorted in ascending order
        const change = dp[i - coins[j]] + 1;
        dp[i] = Math.min(dp[i], change);
      }
    }
  }
  return dp[amount] === max ? -1 : dp[amount];
};
// console.log(coinChange([1, 2, 5], 11)); // 11 = 5+5+1 // output 3

// Word Pattern
const wordPattern = (pattern, str) => {
  const arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  const obj = {};
  for (let i = 0; i < str.length; ++i) {
    if (obj[pattern[i]] && obj[pattern[i]] !== arr[i]) {
      return false;
    } else {
      obj[pattern[i]] = arr[i];
    }
  }
  let cache = [];
  for (let key in obj) {
    if (cache.includes(obj[key])) {
      return false;
    }
    cache.push(obj[key]);
  }
  return true;
};
// console.log(wordPattern('abba', 'dog cat cat dog'));

// Integer to English Words
const numberToWords = (num) => {
  if (num === 0) return 'Zero';
  const unit = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];
  const exp = ['', ' Thousand', ' Million', ' Billion'];

  const threeToWord = (sub) => {
    let word = '';
    if (sub > 99) {
      word = unit[Math.floor(sub / 100)] + ' Hundred ';
      sub = sub % 100;
    }
    if (sub > 19) {
      word += tens[Math.floor(sub / 10)] + ' ';
      sub = sub % 10;
    }
    word += unit[sub];
    return word.trim();
  };

  const translate = [];

  for (let i = 0; num; i++, num = Math.floor(num / 1000)) {
    let three = num % 1000;
    const word = threeToWord(three);
    if (word) {
      translate.unshift(word + exp[i]);
    }
  }

  return translate.join(' ').trim();
};

// Four Divisors
const sumFourDivisors = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let currCount = 2;
    let currArr = [1, nums[i]]; // divided by 1 and self
    for (let j = 2; j < nums[i] / 2 + 1; j++) {
      if (nums[i] % j === 0) {
        currCount++;
        currArr.push(j);
      }
      if (currCount > 4) break;
    }

    if (currCount === 4) arr.push(...currArr);
  }

  return arr.length > 0 ? arr.reduce((a, b) => (b += a)) : 0;
};
// console.log(sumFourDivisors([21, 4, 7, 21]));

// Count Primes
const countPrimes = (n) => {
  if (n < 3) return 0;
  if (n < 4) return 1;

  const primes = [2, 3];

  //any prime can be represented as 6n+1 or 6n-1 where n is an integer except for 2 and 3
  for (let i = 5; i < n; i++) {
    if ((i + 1) % 6 === 0 || (i - 1) % 6 === 0) {
      let isPrime = true;
      //factors of a number should be less than or equal to it's square root
      for (let j = 0; j < primes.length && primes[j] <= Math.sqrt(i); j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
  }
  return primes.length;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// Binary Tree Pruning //70%
const pruneTree = function (root) {
  root.left = root.left && pruneTree(root.left);
  root.right = root.right && pruneTree(root.right);
  return !root.lfet && !root.right && root.val === 0 ? null : root;
};
// Validate Binary Search Tree
const isValidBST = function (root) {
  if (!root) return true;
  const stack = [];
  let prev = -Infinity;
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    if (prev >= curr.val) {
      return false;
    }
    prev = curr.val;
    curr = curr.right;
  }
  return true;
};

// var isValidBST = function(root, min = -Infinity, max = Infinity) {
//   if (!root || root.val <= min || max <= root.val)  return !root;
//   return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
// };

// validate if given arr is a BST tree [2,1,3,4,5]
const isValid = (a) => {
  if (a.length < 1) return 'NO';
  const stack = [];
  let root = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < root) return 'NO';
    // all el to the left of root should be smaller than current root
    while (a[i] > stack[stack.length - 1]) {
      let temp = stack.pop();
      root = temp; //assign last root
    }
    stack.push(a[i]);
    // console.log(stack);
  }
  return 'YES';
};
// console.log(isValid([2, 1, 3, 4, 5]));
// console.log(isValid([5, 3, 4, 1, 7]));

const longestSequence = (n) => {
  const s = n.toString();
  let longest = '';
  let longestLen = 0;
  for (let i = 0; i < s.length; ++i) {
    const occIndex = longest.indexOf(s[i]);
    longest = longest.concat(s[i]);
    if (occIndex !== -1) {
      longest = longest.slice(occIndex + 1);
    }
    longestLen = longest.length > longestLen ? longest.length : longestLen;
  }
  return longestLen;
};
// console.log(longestSequence(1123223));

const paymentTransation = (transactions, taxRate) => {
  const cache = {};
  const calculateCostAfterTax = (cost, taxRate) => {
    if (!cache.hasOwnProperty(cost)) cache[cost] = cost * taxRate;
    return cache[cost];
  };
  const computeTotal = (taxRate) => {
    return (cost) => calculateCostAfterTax(cost, taxRate);
  };
  transactions.map(computeTotal(taxRate));
  return Object.keys(cache).length;
};
// console.log(paymentTransation([10, 24, 12, 8, 10, 24], 1.2));
