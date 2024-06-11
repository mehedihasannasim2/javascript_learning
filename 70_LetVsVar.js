
function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            let color = 'red';
        }
    }

    console.log(color);
}
// // var => function-scoped
// // ES6 (ED2015): let, const => block-scopred
start();



var color = 'red';
// window.color
let age = 30;
// not in window

function sayHi() {
    console.log('hi')
}
// window.sayHi()

