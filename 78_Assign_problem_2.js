// Problem 2:
// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.


function findLargestNumber(array) {
    return array.reduce((a, b) => (a > b) ? a : b);
}

console.log(findLargestNumber([1,2,3,4,5,6]))

