let address1 = new Address('zigatola', 'dhaka', 3344)
let address2 = new Address('zigatola', 'dhaka', 3344)
let address3 = address1;

console.log('equal?', areEqual(address1, address2));
console.log('same?', areSame(address1, address2));
console.log('same?', areSame(address1, address3));



function Address(street, city, zipcode) {
    this.street = street;
    this.city= city;
    this.zipcode = zipcode;
};

console.log(address2)

function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
}

function areSame(address1, address2) {
    return address1 === address2;
}
