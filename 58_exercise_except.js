const numbers = [1, 2, 3, 4];

const output = except(numbers, [1,2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let n of array)
        if (!excluded.includes(n))
            output.push(n);
    return output;
}