let address = {
    street: 'salimullah',
    city: 'dhaka',
    zipcode: 343
};

// Factory function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode,
        // sayHello: function() {
        //     console.log("Hello, my address is " + this.street + ',' + this.city);
        // }
    };
};
let person1 = createAddress("mirpur", 'dhaka', 3434);
console.log(person1);


// Contructor Function

function Address(street, city, zipcode) {
    this.street = street;
    this.city= city;
    this.zipcode = zipcode;
};

let address2 = new Address('zigatola', 'dhaka', 3344)

console.log(address2)