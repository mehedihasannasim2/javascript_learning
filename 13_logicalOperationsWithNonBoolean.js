let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor) // output = red


let userColor2 = undefined;
let defaultColor2 = 'blue';
let currentColor2 = userColor || defaultColor;

console.log(currentColor2) // output = blue

