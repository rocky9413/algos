const rangeOfNumbers = (startNum, endNum) => {
  if (startNum === endNum) return [endNum];
  const number = rangeOfNumbers(startNum + 1, endNum);
  number.unshift(startNum);
  // console.log(number);
  return number;
};
// console.log(rangeOfNumbers(2, 5));

const countdown = (myArray, n) => {
  //   if (n < 1) return [];
  //   myArray = countdown(myArray, n - 1);
  //   myArray.unshift(n);
  //   return myArray;
  if (n < 1) return [];
  else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
  return myArray;
};
// console.log(countdown([], 5));

const leaseNumber = (numbers) => {
  if (numbers.length === 0) return '';
  if (numbers.length === 1) return numbers;

  const obj = {};
  for (let i = 0; i < numbers.length; ++i) {
    if (obj[numbers[i]]) obj[numbers[i]]++;
    else {
      obj[numbers[i]] = 1;
    }
  }

  const sortable = [];
  for (let key in obj) {
    sortable.push([key, obj[key]]);
  }

  sortable.sort((a, b) => a[1] - b[1]);

  const arr = [sortable[0][0]];

  for (let i = 1; i < sortable.length; i++) {
    if (sortable[0][1] === sortable[i][1]) {
      arr.push(sortable[i][0]);
    }
  }

  return arr.map((e) => Number(e));
};
// console.log(leaseNumber([10, 491, 13, 13, 13, 10, 491]));

const emitNreceive = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }
    setEvent(fn) {
      this.event = fn;
    }
    trigger() {
      this.messages.forEach((message) => this.event(message));
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
    }
    ping = (message) => {
      this.messages.push(message);
    };
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();
  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();
  // console.log(myEmitter)
  // console.log(myReceiver)
  return myReceiver.messages;
};
// console.log(emitNreceive(['a', 'b', 'c']))

// validate if given arr is a bst tree [2,1,3,4,5]
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
