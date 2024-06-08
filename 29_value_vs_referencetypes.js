// value
let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log(number) // output = 10

// reference
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj) // output = 10

// Primitives are copied by their VALUE
// Objects are copied by their REFERENCE
