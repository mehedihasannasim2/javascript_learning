const numbers = arrayFromRange(-10, -5);

console.log(numbers);


function arrayFromRange(min, max) {
    output = [];
    for (let i = min; i <= max; i++)
        output.push(i)
    return output;
};