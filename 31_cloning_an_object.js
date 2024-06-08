const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};
// for (let key in circle)
//     another[key];


// new js way
const another = Object.assign({}, circle); 

// spread operation way
// const another = { ...circle};

console.log(another); 












