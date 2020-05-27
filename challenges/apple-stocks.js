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
}

console.log(bestProfit([19, 15, 20, 2, 8, 6]));

module.exports = bestProfit;
