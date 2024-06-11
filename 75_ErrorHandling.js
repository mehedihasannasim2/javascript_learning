
try {  
    const numbers = [1,2,3,4,5,1]
    const count = countOccurrences(null, 1);
    console.log(count);
} catch (error) {
    console.log(error.message);
}



function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error("vul array")

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement)
        return accumulator + occurrence;
    }, 0);
}


