const numbers = [-1,1,2,-5,3,4];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

// objects
const items2 = filtered.map(n => ({value: n}));

// console.log(html);
console.log(items);


// // chaining & concise way

const item = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(item)
