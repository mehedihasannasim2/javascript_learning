let address = {
    street: 'sali',
    city: 'dhaka',
    zipcode: 343
};


function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
};
console.log(showAddress)

console.log(showAddress(address));
