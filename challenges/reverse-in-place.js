'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    // if(array[0] === undefined || array.length < 1) return [];
    // return [array[array.length-i]].concat(reverseInPlace(array.slice(0, array.length-i), i--));
    let start = 0;
    let end = array.length - 1;
    while (start < end){
        swap(array, start, end);
        start++;
        end--;
    }
    return array;
}

function swap(arr, start, end){
    [arr[start], arr[end]] = [arr[end], arr[start]];
}

// console.log(reverseInPlace([0, 2, 3, 4, 5, 7, 9]));

module.exports = reverseInPlace;
