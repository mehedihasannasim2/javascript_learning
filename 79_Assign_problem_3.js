// Problem 3:
// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.


function filterEvenNumbers(array) {
    return array.filter(n => !(n % 2))
}

console.log(filterEvenNumbers([1,2,3,4,5,6]));

