/*
Exercise 1:
-------------
Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string in returned.

*/

const makeNewStr = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewStr('abcdefghijk'));
console.log(makeNewStr('nasim'));

console.log(makeNewStr('sd'));