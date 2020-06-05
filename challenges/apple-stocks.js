/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(price) {
  if (price.length < 2) return 0;
  let minIdx = 0;
  let maxIdx = 1;
  let currMin = 0;
  let maxProfit = 0;

  for (let i = 1; i < price.length; i++) {
    if (price[i] < price[currMin]) {
      currMin = i; // position of current min
    }
    if (price[maxIdx] - price[minIdx] < price[i] - price[currMin]) {
      maxIdx = i; // find max possible index
      minIdx = currMin; // set min index
    }
  }
  maxProfit = price[maxIdx] - price[minIdx];
  return maxProfit;

  // let maxProfit = 0; // initialize max
  // let lowestPrice = arr[0];
  // for(let i = 1; i < arr.length; i++){
  //     let price = arr[i];
  //     if(price < lowestPrice) lowestPrice = price;
  //     let profit = price - lowestPrice;
  //     maxProfit = Math.max(profit, maxProfit);
  // }
  // return maxProfit;
}
console.log(bestProfit([19, 15, 20, 2, 8, 6]));

// console.log(bestProfit([3,4,5,3,5,2]));
// function main() {
//     var t = parseInt(readLine());
//     for(var a0 = 0; a0 < t; a0++){
//         var N = parseInt(readLine());
//         let numOfStock = 0
//         let profit = 0
//         let prices = readLine().split(' ');
//         prices = prices.map(Number);

//         // core algorithm
//         do {
//             let currentMax = Math.max( ...prices )
//             let maxIndex = prices.indexOf( currentMax )

//             // sold (number of stock * max stock value)
//             profit += currentMax * maxIndex

//             // buy  (remember to remove the max value)
//             profit = prices.splice(0, maxIndex+1).reduce( (a,b)=>a-b, profit ) + currentMax;
//         } while( prices.length )

//         console.log( profit )
//     }
// }

function maximumProfit(price) {
  // Write your code here
  let len = price.length - 1;
  // for(let i=0; i<len; i++){/
  let profit = 0;
  // let prices = readLine().split(' ');
  // prices = prices.map(Number);

  do {
    let currentMax = Math.max(...price);
    let maxIndex = price.indexOf(currentMax);

    // sold (number of stock * max stock value)
    profit += currentMax * maxIndex;

    // buy  (remember to remove the max value)
    profit =
      price.splice(0, maxIndex + 1).reduce((a, b) => a - b, profit) +
      currentMax;
  } while (len);

  console.log(profit);
  // }
  return profit;
}

// console.log(maximumProfit([3, 4, 5, 3, 5, 2]));

module.exports = bestProfit;
