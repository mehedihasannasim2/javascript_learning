// Problem 1:
// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.


function repeatString(str, times) {
    let result = ('');
    for (let i = 0; i < times; i++) {
       result += str + "\n";
    }
    return result;
 }
 console.log(repeatString('abc', 3));