/**
 * Two Number Sum
 * Write a function that take in a non-empty array of ditinct integers and an integer representing a target sum.
 * If any two numbers in the input arry sum up to the target sum, the function should return them in an arry, in any order.
 * If no two numbers sum up to the target sum, the function should return an empty array.
 * Note that the target sum has to be obtained by summing two different integerss in the array;
 * You can't add a single integer to itself in order to obtain the target sum.
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 * Sample Input array = [3,5,-4,8,11,1,-1,6] targetSum = 10
 * Sample Output array = [-1, 11]
 */
const twoNumberSum2 = (array, targetSum) => {
  const nums = {};
  for (const num of array) {
    const poentialMatch = targetSum - num;
    if (nums[poentialMatch] === num) {
      return [num, poentialMatch];
    } else {
      nums[num] = poentialMatch;
    }
  }
  return [];
};

// O(nlog(n)) | O(1) space
const twoNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
};

/**
 * Validate Subsequence
 * Given two non-empty arrays of integers, check if second array is a subsequence of the first one.
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array
 * but that are in the same order as they appear in the array.
 * [1,3,4], [2,4] is subsequence of array [1,2,3,4]
 * Note that a single number in an array and the array itself are both valide subsequences of the array.
 */
const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
};

/**
 * Tournament Winner - Teams compete in round robin, where each team faces off against all other teams.
 * Only two teams compete against each other at a time, and for each competition,
 * one team is designated the home team. Each competition one winner and one loser, no ties.
 * A team receives 3 point if wins and 0 point if it loses. Winner of the tournament is the team win most points.
 * Input array of pairs representing the teams that have competed against each other [homeTeam, awayTeam]
 * and an array containing (only 0 and 1) the results of each competition. [0, 0, 1]
 * results[i] denotes the winner of competitions[i], where 1 mean homeTeam won, and 0 means awayTeam won.
 * There will always be one winner team.
 */
const tournamentWinner = (competitions, results) => {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = results[i] === 1 ? homeTeam : awayTeam;

    // update point for each winning team
    if (!(winningTeam in scores)) {
      scores[winningTeam] = 0;
    }
    scores[winningTeam] += 3;

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
};

/**
 * Sorted Squared Array
 * non-empty array of integers that are sorted in ascending order and
 * return a new array of the same length with the squares of the original integers
 * also ssorted in ascending order. Input [-3, -2, -1], Output [1, 4, 9]
 */
const sortedSquaredArray = (array) => {
  // const absArray = array.sort((a, b) => Math.abs(a) - Math.abs(b));
  // return absArray.map(n => n * n);

  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }
  return sortedSquares;
};

/**
 * Non-Constructible Change
 * Array of positive integers representing the values of coins in your possession
 * return the minimum amount of change (minimum sum of money) that you cannot create.
 * Given coins can have any positive integer value and aren't necessarily unique.
 * Input [1, 2, 5], minimum output amount is 4; if no coins, minimum is 1
 */
const nonConstructibleChange = (coins) => {
  if (!coins.length) return 1;
  const sortedCoins = coins.sort((a, b) => a - b);
  let currChange = 0;
  for (const coin of sortedCoins) {
    if (coin > currChange + 1) {
      return currChange + 1;
    }
    currChange += coin;
  }
  return currChange + 1;
};

/**
 * Minimum Waiting Time - non-empty array of positive integers representing amount of time that
 * specific queries take to execute. Only one query can be executed at a time, in any order.
 * Return the minimum amount of total waiting time for all the queries
 * Input [1, 4, 5], if query execute as [5, 1, 4], then waiting time = (0) + (5) + (5+1) = 11
 * Note: you're allowed to mutate the input array.
 */
const minimumWaitingTime = (queries) => {
  let totalWaitingTime = 0;
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - 1 - i;
    totalWaitingTime += duration * queriesLeft;
  }
  return totalWaitingTime;
};

/**
 * Tandem Bicycle - a bicycle that's operated by two people: person A and B.
 * Both pedal the bicycle, the one pedals faster dictates the speed of the bicycle.
 * If A pedals at speed of 5, B at 4, the bicycle moves at speed of 5 (i.e. tandemSpeed = max(A, B) )
 * Input two lists of positive integers (red, blue), each rider represent by a single positive integer
 * Both lists have same length, pair every rider with red shirt to a blue shirt rider.
 * return the maximum or the minimum possible total speed of all the tandem bicycles based on input
 * if fastest = true, return max, else return min total speed
 */
const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }
  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return totalSpeed;
};

/**
 * Class Photos - even number of students, and all students are wearing red or blue shirts.
 * In fact, exactly half of the class is wearing red shirts, and the other half is wearing the blue shirts.
 * Arrange students in two rows before taking photo, each row to contain same number of students and adhere to following:
 * All students wearing red shirts must be in the same row, all blue same row,
 * Each student in back row must be strictly taller than the one in front of them.
 * Two input arrays: same length, and all positive integer. Assume class has at least 2 students.
 * Return true if class photo can follow guidelines
 */
const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const frontRowColor =
    redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (frontRowColor === 'RED') {
      if (redShirtHeights[i] >= blueShirtHeights[i]) {
        return false;
      }
    } else if (blueShirtHeights[i] >= redShirtHeights[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Nth Fibonacci - 0, 1, then nth number is sum of (n-1) and (n-2) numbers.
 * return the nth Fibonacci numbers.
 * O(n) time | O(1) space
 */
const getNthFib = (n) => {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
};

module.exports = {
  twoNumberSum,
  isValidSubsequence,
  sortedSquaredArray,
  tournamentWinner,
  nonConstructibleChange,
  minimumWaitingTime,
  classPhotos,
  tandemBicycle,
  getNthFib,
};
