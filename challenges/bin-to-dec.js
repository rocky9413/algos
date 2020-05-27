/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const arr = binary.split("").reverse();
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) !== 0) {
      num += Math.pow(2, i);
    }
  }
  return num;
}

function decToBin(number) {
  if (number === 0) return 0;
  let binary = [];
  while (number > 0) {
    binary.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return binary.join("");
}

console.log(decToBin(1));
console.log(decToBin(5));
console.log(decToBin(7));
console.log(decToBin(8));

console.log(binToDec(""));
console.log(binToDec("11"));
console.log(binToDec("100"));
console.log(binToDec("101"));
console.log(binToDec("0101"));

module.exports = binToDec;
