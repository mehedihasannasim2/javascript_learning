
function repeatString(str, times) {
    if (times < 0 && typeof times == 'number')
        throw new Error("Put a positive integer")
    let result = ('');
    for (let i = 0; i < times; i++) {
       result += str + '\n';
    }
    return result;
 }

try {  
    console.log(repeatString('abc', -3));

} catch (error) {
    console.log(error.message);
}




// using build in method
const repeatition = (str, time) => {
    if (time <= 0) return "put a positive number";
    return str.repeat(time)
}
console.log(repeatition('abc', -3));