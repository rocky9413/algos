/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {}

// function countStairsI(n) {
//     ​
//       let twos = 0;
//       const final = [];
//     ​
//       // gather subarrays of ascending numbers of 2's
//       while(twos * 2 <= n) {
//         const arr = [];
//         // push current amount of twos
//         for (let i = 0; i < twos; i++) arr.push(2);
//         twos += 1;
//         let sum = arr.length * 2;
//         // push remaining 1's
//         while (sum < n) {
//           arr.push(1);
//           sum += 1;
//         }
//         // push subarray into final array
//         final.push(arr);
//       }
//     ​
//       // calculate permuations for each subarray
//       return final.reduce((acc, cur, i) => {
//         return acc + (factorialize(cur.length) / (factorialize(i) * factorialize(n - (i * 2))));
//       }, 0);
//     ​
//       // numerator is factorial of total array length
//       // denominator is the product of the factorials of each character frequency
//       // [1,1,1,1,1] => 5! / 5! === 1
//       // [1,1,2,2,3] => 5! / (2! * 2! * 1!) === 30
//       // [1,2,3,4,5] => 5! / (5 * (1!)) === 5!
//     }
//     ​
//     function factorialize(num) {
//       if (num < 0) return -1;
//       else if (num == 0) return 1;
//       else return (num * factorialize(num - 1));
//     }
//     ​
//     function countStairsII(n) {
//       if (n <= 1) return n;
//       return countStairsII(n - 1) + countStairsII(n - 2);
//     }
//     ​
//     function countStairsIII(n, step1, step2) {
//       if (n === 0) return 1;
//       if (n < 0) return 0;
//       return countStairsIII(n - step1, step1, step2) + countStairsIII(n - step2, step1, step2);
//     }
//     ​
//     function countStairsIV(n, ...args) {
//       if (n === 0) return 1;
//       if (n < 0) return 0;
//       return args.reduce((acc, cur) => acc + countStairsIV(n - cur, ...args), 0)
//     }

module.exports = countStairs;
