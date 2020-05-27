/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let len = str.length;
  if (len <= 1) return true;
  const obj = {};
  for (let i = 0; i < len; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  const arr = Object.values(obj);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) count++;
  }
  return count <= 1;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;
