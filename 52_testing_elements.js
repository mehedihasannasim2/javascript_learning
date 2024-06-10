const numbers = [-1,1,2,3,4];

const allPositive = numbers.every(function(value){
    return value >= 0;
});

console.log(allPositive) // return: positive number or not


const atleastOnePositive = numbers.some(function(value){
    return value >= 0;
});

console.log(atleastOnePositive) // return: positive number or not
