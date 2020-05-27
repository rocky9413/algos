// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// function countTwos(num) {
//   const n = Math.abs(num);
//   if (num === 0 || num === 1) return 0;
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     let add = i
//       .toString()
//       .split('')
//       .filter(x => x === '2').length;
//     count += add;
//   }
//   return count;
// }

console.log(countTwos(13));
// console.log(countTwos(1000));
// console.log(countTwos(11420));

function countTwos(num) {
  var str = '0' + String(num); //013
  var count = 0;
  for (var i = str.length - 1; i > 0; i--) {
    var slice = str.slice(0, i);
    if (str[i] > 2) {
      // add by one but leave it as the string with the leading 0
      slice = addOne(slice);
    }
    // add trailing zeroes until length matches
    slice = padNum(slice, str.length - 1);
    count += parseInt(slice);
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '2') {
      count += parseInt(str.slice(i + 1) || 0) + 1;
    }
  }

  return count;
}

function addOne(str) {
  return str.slice(0, -1) + (parseInt(str.slice(-1)) + 1);
}

function padNum(str, length) {
  while (str.length < length) {
    str += '0';
  }
  return str;
}

// Simpler solution with low time complexity

function countTwossssss(num) {
  // create digits array
  const digits = num
    .toString()
    .split('')
    .reverse();
  // reduce it!!!
  return digits.reduce((count, strDigit, idx, arr) => {
    // turn string into number
    const digit = Number(strDigit);
    // case for first digit
    if (idx === 0) {
      if (digit >= 2) count += 1;
    } else {
      // use formula to add to count based on digit and index
      count += digit * idx * Math.pow(10, idx - 1);
      // add 10 to the index power for digits > 2
      if (digit > 2) {
        count += Math.pow(10, idx);
      } else if (digit === 2) {
        // for digits === 2, add the total of all previous digits to the count
        count += Number(arr.slice(0, idx).join('')) + 1;
      }
    }
    // return updated count
    return count;
    // include initial value of 0
  }, 0);
}

module.exports = countTwos;
