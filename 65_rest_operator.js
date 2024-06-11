
// ...args is rest operator for use complixicity of input numbers
// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1,2,3,4,5,6));



// remember- you can't add any perameter after the rest perameter.
function sum(discount, ...prices) {
    const total =  prices.reduce((a, b) => a + b);
    return total * (1 - discount)
}

console.log(sum(0.1, 60, 40));