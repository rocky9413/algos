// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  // const word1 = [
  //   'Zero',
  //   'One',
  //   'Two',
  //   'Three',
  //   'Four',
  //   'Five',
  //   'Six',
  //   'Seven',
  //   'Eight',
  //   'Nine',
  //   'Ten',
  //   'Eleven',
  //   'Twelve',
  //   'Thirteen',
  //   'Fourteen',
  //   'Fifteen',
  //   'Sixteen',
  //   'Seventeen',
  //   'Eighteen',
  //   'Nineteen',
  // ];
  // const word2 = [
  //   'Twenty',
  //   'Thirty',
  //   'Forty',
  //   'Fifty',
  //   'Sixty',
  //   'Seventy',
  //   'Eighty',
  //   'Ninety',
  // ];
  // const arrN = [13, 10, 7, 4, 3];
  // const arrW = ['Trillion', 'Billion', 'Million', 'Thousand', 'Hundred'];
  // const str = num.toString();
  // let len = str.length;
  // console.log(len);
  // let word = '';
  // for (let i = 0; i < arrN.length; i++) {
  //   while (arrN[i] <= len) {
  //     word += arrW[i]; //
  //     const arr = str.slice(0, len - arrN[i] + 1);
  //     console.log(word);
  //   }
  // }
  // return word;
}

// console.log(numToWords(10000));

// const obj = {
//   '13': 'Trillion',
//   '10': 'Billion',
//   '7': 'Million',
//   '4': 'Thousand',
//   '3': 'Hundred',
// };

module.exports = numToWords;
