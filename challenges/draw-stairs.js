/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    if(n === 0){ return ;}
    const space = " ";
    const star = "*"
    let begin = 1;
    let result = "";
    for(let i = 0; i < n; i++){
        result += space.repeat(n-begin).concat(star.repeat(begin++)).concat("\n");
    }
    return result;
}

// console.log(drawStairs(6));

module.exports = drawStairs;
