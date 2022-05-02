const {
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
    minNumberOfCoinsForChange,
    levenshteinDistance,
} = require('./medium');
  
test('threeNumberSum(array, targetSum)', () => {
    const array = [12, 3, 1, 2, -6, 5, -8, 6];
    const result = threeNumberSum(array, 0);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual([-8, 2, 6]);
    expect(result[1]).toEqual([-8, 3, 5]);
    expect(result[2]).toEqual([-6, 1, 5]);
});

test('smallestDifferent(arrayOne, arrayTwo)', () => {
    const arrayOne = [-1, 5, 10, 20, 28, 3];
    const arrayTwo = [26, 134, 135, 15, 17];
    const result = smallestDifferent(arrayOne, arrayTwo);
    expect(result).toEqual([28, 26]);
});

test('moveElementToEnd(array, toMove)', () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const result = moveElementToEnd(array, 2);
    expect(result).toEqual([4, 1, 3, 2, 2, 2, 2, 2]);
});

test('isMonotonic(array)', () => {
    const array1 = [1, 2, 3, 4, 3, 2];
    const result1 = isMonotonic(array1);
    const array2 = [1, 2, 3, 3, 5, 5];
    const result2 = isMonotonic(array2);
    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
});

test('spiralTraverse(array)', () => {
    const array = [[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]];
    const result = spiralTraverse(array);
    expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
});

test('longestPeak(array)', () => {
    const array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3];
    const result = longestPeak(array);
    expect(result).toEqual(6);
});

test('arrayOfProducts(array)', () => {
    const array = [5, 1, 4, 2];
    const result = arrayOfProducts(array);
    expect(result).toEqual([8, 40, 10, 20]);
});

test('firstDuplicateValue(array)', () => {
    const array = [2, 1, 5, 2, 3, 3, 4];
    const result = firstDuplicateValue(array);
    expect(result).toEqual(2);
});

test('mergeOverlappingIntervals(array)', () => {
    const array = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];
    const result = mergeOverlappingIntervals(array);
    expect(result).toEqual([[1, 2], [3, 8], [9, 10]]);
});

test('maxSubsetSumNoAdjacent(array)', () => {
    const array = [75, 105, 120, 75, 90, 135];
    const result = maxSubsetSumNoAdjacent(array);
    expect(result).toEqual(330);
});

test('numberOfWaysToMakeChange(n, array)', () => {
    const array1 = [1, 5];
    const result1 = numberOfWaysToMakeChange(6, array1);
    const array2 = [1, 5, 10, 25];
    const result2 = numberOfWaysToMakeChange(10, array2);
    expect(result1).toEqual(2);
    expect(result2).toEqual(4);
});

test('minNumberOfCoinsForChange(n, array)', () => {
    const array1 = [1, 5, 10];
    const result1 = minNumberOfCoinsForChange(7, array1);
    expect(result1).toEqual(3);
});

test('levenshteinDistance(str1, str2)', () => {
    const str1 = 'abc';
    const str2 = 'yabd';
    const result1 = levenshteinDistance(str1, str2);
    expect(result1).toEqual(2);
});
