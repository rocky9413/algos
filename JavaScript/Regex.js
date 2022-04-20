/**
 * Regular Expression - special strings that represent a search pattern
 * Regex - match, search, and replace
 */

// flags - g: global search | i: case-insensitive | m: multiline search

const string = 'Raining raining raining';

const regex = /rain/;
const pattern = /yes|no/; // alternation OR operator: |

const testMethod = pattern.test(string); // tests for a match, return true or false
const matchMethod = string.match(regex); // return matching string, or array with matches, or null

// console.log('result = ', testMethod, matchMethod)
