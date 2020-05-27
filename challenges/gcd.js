/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

//
// function gcd(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') return false;
//   const num1 = Math.abs(a);
//   const num2 = Math.abs(b);
//   const min = Math.min(num1, num2);
//   const max = Math.max(num1, num2);
//   const half = Math.floor(min / 2);
//   console.log(min, max, half);
//   if (max % min === 0) return min;
//   for (let i = half; i > 0; i--) {
//     if (a % half === 0 && b % half === 0) {
//       return i;
//     }
//   }
//   return 1;
// }

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(24, 6));
console.log(gcd(0, -16));

module.exports = gcd;
