// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// console.log(chunkItUp(['a', 'b', 'c', 'd'], 2));
// // -> [["a", "b"], ["c", "d"]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 3));
// //  -> [[0, 1, 2], [3, 4, 5]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 2));
// //  -> [[0, 1], [2, 3], [4, 5]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 4));
// //  -> [[0, 1, 2, 3], [4, 5]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6], 3));
// //  -> [[0, 1, 2], [3, 4, 5], [6]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// //  -> [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// //  -> [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkItUp(array, size) {
  const newArr = [];
  while (array.length) {
    newArr.push(array.splice(0, size));
  }
  return newArr;
}

// Write a function "lockDown" that takes a callback function (func) and a string as arguments. The string will be a password so to speak. lockDown returns a function (secureFunc). secureFunc must be provided the password string as its first argument. If the string is incorrect, 401 is returned. If correct, secureFunc will call func and return its output. If additional arguments are passed to secureFunc, other than the password, they should all be passed to func.

// var log = (a, b, c) => console.log(a, b, c);
// var secureFunc = lockDown(log, 'lolol');

// console.log(secureFunc('lolol', 1, 2, 3)); // ->  prints 1 2 3
// console.log(secureFunc('wrong', 1, 2, 3)); // ->  401

function lockDown(func, password) {
  // return function with pass as first argument and additional arguments
  // using spread operator to pass additional arguments
  return function (pass, ...args) {
    // apply callback with ...args if password match
    if (pass === password) return func(...args);
    return 401; // return 401 for incorrect
  };
}

// write a function "arrDimensions" that takes a (nested) array and returns the number of nesting levels in that array
// console.log(arrDimensions([2, 5, 1])); // -> 1
// console.log(arrDimensions([2, [5], 1])); //   -> 2
// console.log(arrDimensions([2, [5], [3]])); //   -> 2
// console.log(arrDimensions([2, [5], [3, [[16]]], 1])); //  -> 4

function arrDimensions(nestedArr, levels = 1) {
  // for (let i = 0; i < nestedArr.length; i++) {
  //   if (Array.isArray(nestedArr[i])) {
  //     if (levels === 2) levels += arrDimensions(nestedArr[i], 0);
  //     else levels += arrDimensions(nestedArr[i], 1);
  //   }
  // }
  // return levels;
  // // const newArr = [];
  // let count = 1;
  // (function flatArr(array) {
  //   array.forEach(x => {
  //     if (Array.isArray(x)) {
  //       count++;
  //       return flatArr(x);
  //     }
  //     // else {
  //     //   newArr.push(x);
  //     // }
  //   });
  // })(nestedArr);
  // return count;
}

// write a function "maxBy" that takes an array and a callback as arguments. "maxBy" will iterate thru the array and pass each array element to the callback as an argument. "maxBy" will determine the maximum value among all the outputted values from this callback. The array element that produced this value is returned by "maxBy".
// const nums = [-1, 1, 5, 2, -7];
// console.log(maxBy(nums, Math.abs));
// // -7 (because Math.abs(-7) produces 7
// // which is greater than all other outputs 5, 2, and 1)

// console.log(maxBy(nums, x => 2 * x - 1000)); // -> 5

function maxBy(arr, callback) {
  const max = {
    idx: 0,
    val: Number.NEGATIVE_INFINITY,
  };
  for (let i = 0; i < arr.length; i++) {
    if (max.val < callback(arr[i])) {
      max.val = callback(arr[i]);
      max.idx = i;
    }
  }
  return arr[max.idx];
}

const solution = (arr) => {
  let left = 0;
  let right = 0;
  let len = arr.length;
  if (len <= 1) return '';
  let level = 0;
  // let sum = 0;
  while (len > Math.pow(2, level)) {
    level++;
  }
  const newArr = arr.slice(1);

  for (let k = 1; k < level; k++) {
    let size = Math.pow(2, k);
    temp = newArr.splice(0, size);
    console.log(temp.length);
    for (let i = 0; i < temp.length; i++) {
      let half = size / 2;
      if (i < half && temp[i] !== -1) left += temp[i];
      if (i >= half && temp[i] !== -1) right += temp[i];
    }
  }
  if (left === right) return '';
  return left > right ? 'Left' : 'Right';
};

// solution([3, 6, 2, 9, -1, 10]);

const solution = (brackets) => {
  // Type your solution here
  const len = brackets.length;
  if (len % 2 !== 0 || len < 2) return false;
  if (brackets[0] === ')' || brackets[0] === '}' || brackets[0] === ']')
    return false;

  const obj = { '(': ')', '{': '}', '[': ']' };
  let stack = [];

  for (let i = 0; i < len; i++) {
    if (brackets[i] === '(' || brackets[i] === '{' || brackets[i] === '[') {
      stack.push(brackets[i]);
      console.log(brackets[i]);
    } else {
      console.log(brackets[i]);
      let pre = stack.pop();
      if (brackets[i] !== obj[pre]) return false;
    }
    console.log(stack);
  }
  console.log(stack);
  return stack.length === 0 ? true : false;
};

// console.log(solution(')('));
// console.log(solution('[](){}'));
// console.log(solution('[(]{)}'));

const lengthOfLongestSubstring = (s) => {
  let maxLen = 0;
  let curr = 0;
  let obj = {};
  if (s.length < 2) return s.length;

  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) curr += 1;
    else {
      curr = Math.min(i - obj[s[i]], curr + 1);
    }
    obj[s[i]] = i; // save the index
    maxLen = Math.max(maxLen, curr);
  }
  return maxLen;
};

// console.log(lengthOfLongestSubstring('ababc'));
// console.log(lengthOfLongestSubstring('nndfddf'));
// console.log(lengthOfLongestSubstring('nanbcdefnf'));
