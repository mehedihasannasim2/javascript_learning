const numbers = [1,2,3,4,5, 8];

const max = getMax([2,3,5,3,5,7,2]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let n of array) 
    //     if (n > max)
    //         max = n;
    // return max 

    // using reduce method
    return array.reduce((a, b) => (a > b) ? a : b);
}