// 1 = 00000001
// 2 = 00000010
// 3 = 00000011


// console.log(1 | 2); // bitwise OR
// console.log(1 & 2); // bitwise AND


// Read, Write, Execute
// 00000100
// 00000110
// 00000111

 
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message); 