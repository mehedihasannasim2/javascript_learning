// Problem 7:
// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


function logString(para) {
    if (typeof para === 'string') {
        console.log(para);
    } else {
        console.error("Parameter is not a string.");
    }
}

logString("Hello, world!");
logString(123); 