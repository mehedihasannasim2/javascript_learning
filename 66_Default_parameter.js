

function Interest(priciple, rate= 10, year= 5) {
    return priciple * rate / 100 * year;
}

console.log(Interest(10000, undefined, 6))