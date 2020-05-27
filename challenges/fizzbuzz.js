// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, 
// "buzz" in place of numbers divisble by 5, 
// and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16 ]

function fizzbuzz(num) {
    // declare newArr empty array
    const newArr = [];
    if(num < 1) return "number is less than 1";
    else if(num == 1) return [].push(num);
    else {
        // iterate number from num down to 1
        for (num; num >= 1; num--){
            // use if statement to push number or word based on condition to the newArr
            if(num % 5 == 0 && num % 3 == 0) newArr.unshift("fizzbuzz");
            else if(num % 5 == 0) newArr.unshift("buzz");
            else if(num % 3 == 0) newArr.unshift("fizz");
            else newArr.unshift(num);
        }
        return newArr; // return newArr;
    }
}

console.log(fizzbuzz(16));

console.time('standard');
fizzbuzz(16);
console.timeEnd('standard');

module.exports = fizzbuzz;
