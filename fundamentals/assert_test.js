const assert = require('assert');
// const fs = require('fs');

const isNegativeOrOdd = (value) => {
  if (Math.sign(value) === -1 || value % 2 === 1) return true;
  return false;
};

// === node <file_name> ===
// only show error if didn't pass test
assert(isNegativeOrOdd(3) === true, 'expect 3 to be odd and true');
assert.equal(isNegativeOrOdd(-1), true, 'expect -1 to be negative and true');
// assert.ok() | assert.equal() | assert.notEqual()

// === Fundamental Test ===
// const sum = (a, b) => a - b; // error sum should be a + b
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result, expected;

test('sum adds numbers', () => {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});

// if (result !== expected) throw new Error(`Test: ${result} is not equal to the ${expected}.`);

test('subtract subtract numbers', () => {
  result = subtract(8, 3);
  expected = 5;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`🗸 ${title}`);
  } catch (err) {
    console.log(`x ${title}`);
    console.error(err);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}.`);
      }
    },
  };
}
