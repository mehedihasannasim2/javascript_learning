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


/*
Exercise 2:
-----------
Write a JavaScript program to extract the first half of a string of even length. 
*/

const extractFirstHalf = (str) =>
    str.slice(0, str.length / 2);

console.log(extractFirstHalf('nasim'));
console.log(extractFirstHalf('abcdef'));
console.log(extractFirstHalf('dfodsjlfsodfso'));


/*
Exercise 3:
-----------
Write a JavaScript program to concatenate two strings except their first character.
*/

const concatenateStr = (str1, str2) => 
    str1.slice(1) + str2.slice(1);

console.log(concatenateStr('nasim', 'hasan'));
console.log(concatenateStr('1234', '1234'));


/*
Exercise 4:
-----------
Given two values, write a JavaScripts program to find out which one is nearest to 100
*/
const nearest = (val1, val2) => 
    (100 - val1) < (100 - val2) ? val2 : val1;

console.log(nearest(110, 120));
console.log(nearest(90, 80));
console.log(nearest(200, 300));


