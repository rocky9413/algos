'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  // for (let i = 3; i < 1000; i += 3) sum += i;
  let n = Math.floor(1000 / 3);
  sum += (3 * n * (n + 1)) / 2;
  for (let i = 5; i < 1000; i += 5) {
    if (i % 3 !== 0) sum += i;
  }
  // let n2 = Math.floor(999.99 / 5);
  // sum += (5 * n2 * (n2 + 1)) / 2;
  return sum;
}

console.log(sumMultiples3Or5Below1000()); // 233168

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  // for (let i = x; i < 1000; i += x) sum += i;
  // for (let i = y; i < 1000; i += y) if(i % y === 0) sum += i;
  let n;
  if (z % x !== 0 && z > x) n = Math.floor(z / x);
  else if (z % x === 0 && z > x) n = Math.floor(z - 0.01 / x);
  sum += (x * n * (n + 1)) / 2;

  for (let i = y; i < z; i += y) if (i % x !== 0) sum += i;

  return sum;
}
console.log(sumMultiplesXOrYBelowZ(3, 5, 1000)); // 233168

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
