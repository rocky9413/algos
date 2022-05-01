/**
 * Input: non empty array of distinct integers, and an integer for targetSum
 * Output: return 2 dimensional array of all triplets ordered in ascending order
 * Input: [12, 3, 1, 2, -6, 5, -8, 6], targetSum = 0;
 * Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 */
const threeNumberSum = (array, targetSum) => {
    array.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < array.length - 2; i++) {
        const first = array[i];
        if (first > targetSum) {
            break;
        }
        let left = i + 1;
        let right = array.length - 1;
        const diff = targetSum - first;
        while (left < right) {
            if (array[left] + array[right] === diff) {
                results.push([first, array[left], array[right]]);
                left++;
                right--;
            } 
            else if (array[left] + array[right] < diff) {
                left++;
            } 
            else {
                right--;
            }
        }
    }
    return results;
};

/**
 * input: two non-empty arrays of integers
 * return pair of numbers (one from each array) whose absolute different is closest to zero
 * return array containing these two numbers, with number from first array in the first position
 */
const smallestDifferent = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    const result = [];
    let aOneIdx = 0;
    let aTwoIdx = 0;
    let smallestDiff = Number.POSITIVE_INFINITY;
    while (aOneIdx < arrayOne.length && aTwoIdx < arrayTwo.length) {
        const diff = Math.abs(arrayOne[aOneIdx] - arrayTwo[aTwoIdx]);
        if (diff < smallestDiff) {
            smallestDiff = diff;
            result[0] = arrayOne[aOneIdx];
            result[1] = arrayTwo[aTwoIdx];
            if (diff === 0) break;
        }
        if (arrayOne[aOneIdx] < arrayTwo[aTwoIdx]) {
            aOneIdx++;
        } else {
            aTwoIdx++;
        }
    }
    return result;
};

/**
 * Input: array of integers, and an integer
 * Move all instances of that integer to the end of the array and returns the array.
 * Perform this in place (mutate the input array, and doesn't need to maintain the order of other integers)
 */
const moveElementToEnd = (array, toMove) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (array[left] !== toMove) {
            left++;
        } else if (array[right] === toMove) {
            right--;
        } else {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }
    return array;
};

/**
 * input: array of integers and return a boolean representing whether the array is monotonic
 * A monotonic is its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 * Empty arrays and arrays of one elements are monotonic
 */
const isMonotonic = (array) => {
    if (array.length <= 2) return true;
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            increasing = false;
        } else if (array[i] > array[i - 1]) {
            decreasing = false;
        }
        if (!increasing && !decreasing) return false;
    }
    return increasing || decreasing;
};

/**
 * input: n x m two-dimensional array (can be square-shaped when n === m)
 * returns a one-dimensional array of all the array's elements in spiral order.
 * spiral order starts at the top left corner goes to the right in a spiral pattern
 */
const spiralTraverse = (array) => {
    const result = [];
    let startRow = 0;
    let endCol = array[0].length - 1;
    let endRow = array.length - 1;
    let startCol = 0;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            result.push(array[endRow][col]);
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endCol--;
        endRow--;
        startCol++;
    }
    return result;
}

/**
 * Input: array of integers and return the length of the longest peak in the array
 * A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip
 * At least 3 integers are required to form a peak.
 */
const longestPeak = (array) => {
    let maxPeak = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
            let left = i - 2;
            while (left >= 0 && array[left] < array[left + 1]) {
                left--;
            }
            let right = i + 2;
            while (right < array.length && array[right - 1] > array[right]) {
                right++;
            }
            const currLength = right - left - 1;
            maxPeak = Math.max(maxPeak, currLength);
            i = right - 1;
        } else {
            continue;
        }
    }
    return maxPeak;
}

/**
 * Input: non-empty array of integers and return an array of same length, 
 * where each element in the output array is equal to the product of every other number in the input array
 * NOte: solve problem without using division
 */
const arrayOfProducts = (array) => {
    const len = array.length;
    const results = new Array(len).fill(1);
    let curr = 1;
    for (let i = 0; i < array.length; i++) {
        results[i] = curr;
        curr *= array[i];
    }
    curr = 1;
    for (let j = array.length - 1; j >= 0; j--) {
        results[j] *= curr;
        curr *= array[j];
    }
    return results;
};

/**
 * Input: array of integers 1 to n
 * returns the first integer that appears more than once
 */
const firstDuplicateValue = (array) => {
    // const obj = {}; // O(n) space
    // for (let i = 0; i < array.length; i++) {
    //     if (obj[array[i]] === undefined) {
    //         obj[array[i]] = 1;
    //     } else {
    //         return array[i];
    //     }
    // }
    for (const value of array) {
        const absValue = Math.abs(value);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;
    }
    return -1;
};

/**
 * Input: non-empty array of arbitrary intervals, merges any overlapping intervals
 * returns the new intervals in no particular order.
 */
const mergeOverlappingIntervals = (array) => {
    const sortedArray = array.sort((a, b) => a[0] - b[0]);
    const results = [sortedArray[0]];

    let curr = sortedArray[0];
    for (const interval of array) {
        const [prevStart, prevEnd] = curr;
        const [nextStart, nextEnd] = interval;
        if (nextStart > prevEnd) {
            curr = interval;
            results.push(curr);
        } else if (nextEnd >= prevEnd) {
            curr = [prevStart, nextEnd];
            results[results.length - 1] = curr;
        } else {
            curr = [prevStart, nextEnd];
            results[results.length - 1] = curr;
        }
    }
    return results;
};

/**
 * Input: array of positive integers and returns the maximum sum of non-adjacent elements in the array
 * return 0 for empty array
 */
const maxSubsetSumNoAdjacent = (array) => {
    const len = array.length;
	if (!len) return 0;
	if (len === 1) return array[0];
	let second = array[0];
	let first = Math.max(array[0], array[1]);
	for (let i = 2; i < array.length; i++) {
        const prev = first;
		first = Math.max(first, second + array[i]);
		second = prev;
	}
	return first;
};

/**
 * Input: array of distinct positive integers representing coin denominations 
 * and a single non-negative integer n representing a target amount of money.
 * returns the number of ways to make change for that target amount
 */
const numberOfWaysToMakeChange = (n, array) => {
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (const coin of array) {
        for (let amount = 1; amount < n + 1; amount++) {
            if (coin <= amount) {
                ways[amount] += ways[amount - coin];
            }
        }
    }
    return ways[n];
}

module.exports = {
    threeNumberSum,
    smallestDifferent,
    moveElementToEnd,
    isMonotonic,
    spiralTraverse,
    longestPeak,
    arrayOfProducts,
    firstDuplicateValue,
    mergeOverlappingIntervals,
    maxSubsetSumNoAdjacent,
    numberOfWaysToMakeChange,
};
  