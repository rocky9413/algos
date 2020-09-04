// returns true if the number is negative or odd
const isNegativeOrOdd = (value) => {
  if (Math.sign(value) === -1 || value % 2 === 1) return true;
  return false;
};
// console.log(isNegativeOrOdd(1)); // -> true
// console.log(isNegativeOrOdd(-2)); // -> true
// console.log(isNegativeOrOdd(2));  //-> false

// repeats the given string count times
const repeat = (string, count) => {
  if (count < 1) return '';
  return string.repeat(count);
};
// console.log(repeat('abc', 3)); // -> 'abcabcabc'
// console.log(repeat('*', 3)); // -> '***'
// console.log(repeat('abc', 0)); // -> ''

// returns a string that is the reverse of the inputted string
//  * assume only strings are inputted */
const reverseString = (string) => {
  return string.split('').reverse().join('');
};
//  console.log(reverseString('hello')); // -> 'olleh'
//  console.log(reverseString('will')); //-> 'lliw'

// accepts an object and returns an object with key and values switched
const reverseObject = (object) => {
  const reversed = {};
  const keyArr = Object.keys(object);
  for (let i = 0; i < keyArr.length; i++) {
    reversed[object[keyArr[i]]] = keyArr[i];
  }
  return reversed;
};
// console.log(reverseObject({a:1,b:"c","d":4})); // -> {1:a, c:"b",4:"d"}

// Returns boolean of whether argument is classified as a Number object
const isNumber = (value) => {
  if (typeof value === 'number') return true;
  return false;
};
// console.log(isNumber(5));
// console.log(isNumber('hi'));

// Returns boolean of whether argument is classified as an Array object
const isArray = (value) => {
  return Array.isArray(value);
};
// console.log(isArray(5)); // → false
// console.log(isArray([1,2,3])); // → true

// Returns boolean of whether argument is classified as an Object
const isObject = (value) => {
  if (typeof value === 'object') return true;
  return false;
};
// console.log(isObject(5));
// console.log(isObject([1, 2, 3]));

// return boolean of whether argument is classified as null
const isNull = (value) => {
  return value === null;
};
// console.log(isNull(null));
// console.log(isNull(5));

// Creates a clone of an object.
// DO NOT USE THE BUILT-IN Object.assign FUNCTION
const clone = (value) => {
  if (Array.isArray(value)) return [...value];
  else return { ...value };
};
const users = [{ user: 'fred' }, { user: 'pebbles' }, { user: 'barney' }];
const shallowClone = clone(users);
// console.log(shallowClone === users); // -> false
// console.log(shallowClone[0] === users[0]); // → true

// Return the size of collection.
// If the argument passed is an array, then return the length of the array.
// If arg is an object, then return the number of key/value properties.
const size = (collection) => {
  return Object.entries(collection).length;
};
// console.log(size([1,2,3]));
// console.log(size({a: 1, b: 2}));

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
const indexOf = (array, value) => {
  return array.findIndex((elem) => {
    return elem === value;
  });
};
// console.log(indexOf([11,22,33], 11)); // → 0
// console.log(indexOf([11,22,33], 5)); // → -1

// Creates a slice of array with n elements dropped from the beginning
const drop = (array, n = 1) => {
  return array.slice(n, array.length + 1);
};
// console.log(drop([1, 2, 3])); // → [2, 3]
// console.log(drop([1, 2, 3], 2)); // → [3]
// console.log(drop([1, 2, 3], 5)); // → []
// console.log(drop([1, 2, 3], 0)); // → [1, 2, 3]

// Creates a slice of array with n elements dropped from the end
const dropRight = (array, n = 1) => {
  if (Math.sign(array.length - n) === -1) return [];
  else return array.slice(0, array.length - n);
};
// console.log(dropRight([1, 2, 3]));
// console.log(dropRight([1, 2, 3], 2));
// console.log(dropRight([1, 2, 3], 5));
// console.log(dropRight([1, 2, 3], 0));

// Creates a slice of array containing n elements taken from the beginning
const take = (array, n = 1) => {
  return array.slice(0, n);
};
// console.log(take([1, 2, 3]));
// console.log(take([1, 2, 3], 2));
// console.log(take([1, 2, 3], 5));
// console.log(take([1, 2, 3], 0));

// Returns an array containing the elements from array1 that are not in array2
const difference = (array1, array2) => {
  return array1.reduce((acc, cur) => {
    if (!array2.includes(cur)) acc.push(cur);
    return acc;
  }, []);
};
// console.log(difference([0, 1, 2, 3, 4, 5], [3, 5]));

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
// const callback = (element, index, array) => {
//   console.log(element + ',' + index + ', [' + array + ']');
// };
// console.log(forEach(['a', 'b', 'c'], callback));
// → prints a,0,[a,b,c] b,1,[a,b,c] c,2,[a,b,c]

// Iterates over elements of array in reverse invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
const forEachRight = (array, callback) => {
  for (let i = array.length - 1; i >= 0; i--) {
    callback(array[i], i, array);
  }
};
// const callback = (element, index, array) => {
//   console.log(element + ',' + index + ',' + array);
// };

// console.log(forEachRight(['a', 'b', 'c'], callback));
// → prints c,2,[a,b,c] b,1,[a,b,c] a,0,[a,b,c]

// Creates an array of values by running each element in array through callback. The callback should be passed the element, the current index, and the entire array.
// BONUS: use the forEach method you use to create map
const map = (array, callback) => {
  const newArr = [];
  forEach(array, (ele) => newArr.push(callback(ele)));
  return newArr;
};
// console.log(map([1, 2, 3], (elem, index, array) => elem * 3)); // -> [3,6,9]

// Iterates over elements of collection returning an array of all the elements callback returns truthy for.
const filter = (collection, callback) => {
  if (Array.isArray(collection)) {
    return collection.filter((elem) => callback(elem));
  } else {
    for (let key in collection) {
      if (!callback(collection[key])) delete collection[key];
    }
    return collection;
  }
};
// console.log(filter([1, 2, 3, 4], (elem, index, array) => elem % 2 === 0));
// console.log(
//   filter({ a: 1, b: 2, c: 3, d: 4 }, (elem, key, collection) => elem % 2 !== 0)
// ); // → {a: 1, c: 3}

// Removes all elements from array that callback returns truthy for and returns an array of the remaining elements.
const reject = (collection, callback) => {
  if (Array.isArray(collection)) {
    return collection.filter((elem) => !callback(elem));
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (callback(collection[key])) delete collection[key];
    }
    return collection;
  }
};
// console.log(reject([1, 2, 3, 4], (elem, index, collection) => elem % 2 === 0)); // ; → [1,3]
// console.log(
//   reject({ a: 1, b: 2, c: 3, d: 4 }, (elem, key, collection) => elem % 2 === 0)
// ); // → {a:1, c:3}

// Creates an array without duplicate values. The order of the array is preserved.
const uniq = (array) => {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!myArray.includes(array[i])) myArray.push(array[i]);
  }
  return myArray;
};
// console.log(uniq([1, 2, 3, 1]));
// console.log(uniq([1, 2, 1]));

// Gets the value of key from all elements in collection.
const pluck = (array, key) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i][key]);
  }
  return newArr;
};
// console.log(pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'));
// → ['Bob','Sam']

// remove leading and trailing whitespace or specified characters from string
const trim = (string) => {
  while (string[0] === ' ') {
    string = string.slice(1);
  }
  while (string[string.length - 1] === ' ') {
    string = string.slice(0, string.length - 1);
  }
  return string;
  // return string.match(/^(\w+|\w+)$/); // wrong
};
// console.log(trim('   hello   '));
// console.log(trim('   hello world   '));
// console.log(trim('hello '));
// console.log(trim(' hello '));
// console.log(trim('hello  world'));

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value. If a start parameter is not provided, then set the start value as the zeroth index
const reduce = (array, callback, start) => {
  let total = array[0]; // 1
  if (start !== undefined) total = start;
  let i;
  total === start ? (i = 0) : (i = 1);
  for (i; i < array.length; i++) {
    total = callback(total, array[i]);
  }
  return total;
};
// console.log(reduce([1, 2], (stored, current) => stored + current, 1)); // → 4
// console.log(reduce([1, 2, 3], (tally, item) => tally - item)); // → -4

// Flattens a nested array (one level deep).
const flatten = (array) => {
  return [].concat(...array);
};
// console.log(flatten([1, [2, 3, [4]]])); // → [1, 2, 3, [4]]

// Recursively flattens a nested array.
const flattenDeep = (array) => {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) return acc.concat(flattenDeep(curr));
    else return acc.concat(curr);
  }, []);
};
// console.log(flattenDeep([[1], [2, 3, [4]]])); // → [1, 2, 3, 4]

// Assigns own enumerable properties of source object(s) to the destination object Subsequent sources overwrite property assignments of previous sources.
const extend = (...args) => {
  // const array = Array.from(arguments); // or [...arguments] spread operator
  return args.reduce((acc, curr) => {
    Object.assign(acc, curr);
    return acc;
  });
};
// console.log(extend({ age: 40 }));
// console.log(extend({ user: 'barney' }, { age: 40 }, { user: 'fred' }));
// → { 'user': 'fred', 'age': 40 }

// Returns boolean of whether argument is classified as a String object
const isString = (value) => {
  return typeof value === 'string';
};
// console.log(isString('hi')); // → true
// console.log(isString(5)); // → false

// Creates a deep clone of value.
const cloneDeep = (value) => {
  const obj = {};
  Object.keys(value).forEach((key) => {
    if (typeof value[key] !== 'object') obj[key] = value[key];
    else obj[key] = cloneDeep(value[key]);
  });
  return obj;
};
// const users = [{ user: 'barney' }, { user: 'fred' }]; // declare ln 77
const deepClone = cloneDeep(users);
// console.log(deepClone === users); // → false
// console.log(deepClone[0] === users[0]); // → false
// console.log(deepClone[0].user === users[0].user); // → true

// Using a for loop, call the functions in the queue in order with the input number, where the results of each function become the next function’s input. Additionally, the queue should be empty after the function is called.
const applyAndEmpty = (input, queue) => {
  for (let i = 0; i < queue.length; ) {
    input = queue[i](input);
    queue.shift();
  }
  return input;
};
const puzzlers = [
  (a) => 8 * a - 10,
  (a) => (a - 3) * (a - 3) * (a - 3),
  (a) => a * a + 4,
  (a) => a % 5,
];
const start = 2;
// console.log(applyAndEmpty(start, puzzlers)); // → 3

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  let turn = false;
  const cache = {};
  return () => {
    if (!turn) {
      turn = true;
      cache[func] = func();
    }
    return cache[func];
  };
}
// console.log(once(num => num + 2));

// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
const memoize = (func) => {
  let result = {};
  return function () {
    let arg = JSON.stringify(arguments);
    if (!result[arg]) {
      result[arg] = func.apply(this, arguments);
    }
    return result[arg];
  };
};
// const memo = memoize(num => num + 2);
// console.log(memo(3, 6, 7, 9));

// Invokes func after wait milliseconds.
// Any additional arguments are provided to func when it is invoked.
const delay = (func, wait, ...args) => {
  // let args = Array.prototype.slice.call(arguments, 2);
  // return setTimeout(function(){func.apply(null, args)}, wait);
  return setTimeout(func, wait, ...args);
};

// Returns a function that only invokes func once per every wait milliseconds
// (additional calls to func within the wait should not be invoked or queued).
const throttle = (func, wait) => {
  let lastTimeRun = 0;
  return () => {
    const currentTime = Date.now();
    if (currentTime - wait >= lastTimeRun) {
      lastTimeRun = currentTime;
      return func();
    }
  };
};

// Creates an array of elements, sorted in ascending order by the results of running each element in a collection through iteratee.
const sortBy = (array, iterator) => {
  const obj = {};
  const result = [];
  if (typeof iterator === 'function')
    return array.sort((a, b) => {
      const aSortValue = iterator(a);
      const bSortValue = iterator(b);
      if (aSortValue < bSortValue || aSortValue === undefined) return -1;
      else if (bSortValue < aSortValue || bSortValue === undefined) return 1;
    });
  // if (typeof iterator === 'function')
  //   return array.sort((a, b) => iterator(a) - iterator(b));
  else if (typeof iterator === 'string') {
    array.forEach((elem, idx) => {
      // assign obj with key = value and value = index
      obj[elem[iterator]] = idx;
    });
    // sort value of obj into array
    const objKeys = Object.keys(obj).sort();
    objKeys.forEach((elem) => {
      const index = obj[elem];
      result.push(array[index]);
    });
  }
  return result;
};
// console.log(sortBy([1, 2, 3], n => Math.sin(n))); // → [3, 1, 2]
// console.log(users);
// console.log(pluck(sortBy(users, 'user'), 'user'));
// → ['barney', 'fred', 'pebbles']

// Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step start defaults to 0, step defaults to 1
// If you'd like a negative range, use a negative step.
const range = (start, stop, step = 1) => {
  // const args = [...arguments];
  // let len = arguments.length;
  const list = [];
  if (step < 0) {
    for (let i = start; i > stop; i += step) {
      list.push(i);
    }
    return list;
  }
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (let i = start; i < stop; i += step) {
    list.push(i);
  }
  return list;
};
// console.log(range(10)); // -> [0,1,2,3,4,5,6,7,8,9]
// console.log(range(1, 11)); // -> [1,2,3,4,5,6,7,8,9,10]
// console.log(range(0, 30, 5)); // -> [0,5,10,15,20,25]
// console.log(range(0, -10, -1)); // -> [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

// split array into two array based on those elements who satisfies the predicate (callback)
// BONUS: Use two lodash functions that you created in this unit
const partition = (array, predicate) => {
  const first = [];
  const second = [];

  array.forEach((e) => {
    if (predicate(e)) first.push(e);
    else second.push(e);
  });
  // return combined arrays within an array
  return [first, second];
};
// console.log(partition([0, 1, 2, 3, 4, 5, 6], elem => elem % 2 === 0));
// -> [[0,2,4,6],[1,3,5]];

// Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
const intersection = (...args) => {
  return args.reduce((acc, curr) =>
    acc.filter((elem) => curr.indexOf(elem) !== -1)
  );
};
// console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// -> [1,2]

// Returns an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
const zip = (...args) => {
  const ans = [];
  for (let i = 0; i < args.length; i += 1) {
    args[i].forEach((e, index) => {
      if (ans[index] === undefined) ans[index] = [e];
      else e === undefined ? ans[index].push(undefined) : ans[index].push(e);
    });

    // (only works if args are 'sorted' long to short)
    if (args[i].length < ans.length) {
      for (let j = args[i].length; j < ans.length; j += 1) {
        ans[j].push(undefined);
      }
    }
  }
  return ans;
};
// console.log(zip(['fred', 'barney'], [30, 40], [true, false]));
// → [['fred', 30, true], ['barney', 40, false]]

// returns a function that will only be run after first being called count times
const after = (count, func) => {
  let number = 1;
  let result = {};
  return () => {
    if (!result[func]) {
      result[func] = func;
      number = 1;
    }
    if (result[func]) {
      if (count === 0) return result[func]();
      else if (number < count) {
        number++;
      } else if (number === count) return result[func]();
    }
  };
};
// const called = () => 'hello';
// const afterCalled = after(3, called);
// console.log(afterCalled()); // -> nothing is printed
// console.log(afterCalled()); // -> nothing is printed
// console.log(afterCalled()); // -> 'hello is printed'
// console.log(afterCalled()); // -> 'hello is printed'

// Returns a function that can be called no more than count times. The result of the last function call is memoized and returned when count has been reached
const before = (count, func) => {
  let number = 0;
  let result = {};
  return () => {
    if (count === 0) return;
    if (number < count) {
      result[number] = func();
      console.log(result);
      number++;
    }
    return result[number - 1];
  };
};
// let counter = 0;
// const printAndIncrementCount = () => counter++;
// const beforePrint = before(2, printAndIncrementCount);
// console.log(beforePrint()); // 0
// console.log(beforePrint()); // 1
// console.log(beforePrint()); // 1
// console.log(beforePrint()); // 1

// Write a function that creates arrays. The first argument is the length. The second is a callback. The return value of this callback will become the array element. Call the callback with the array index as an argument.
const arrayFactory = (length, processor) => {
  const newArr = [];
  for (let i = 0; i < length; i++) {
    newArr.push(processor(i));
  }
  return newArr;
};
// const square = n => n * n;
// console.log(arrayFactory(4, square)); // -> [0, 1, 4, 9]
