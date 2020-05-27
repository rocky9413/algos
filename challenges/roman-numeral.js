/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  const num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let roman = ""; // store roman character
  for (let i = 0; i < num.length; i++) {
    while (num[i] <= n) {
      roman += rom[i]; // assign largest roman chac
      n -= num[i]; // while remainder is not equal num[i], get other chac
    }
  }
  return roman;
}

// console.log(romanNumeral(800));
// console.log(romanNumeral(45));
// console.log(romanNumeral(350));

module.exports = romanNumeral;
