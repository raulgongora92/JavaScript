// Iterable Array
var veggies = ['orion', 'parsley', 'carrot'];

console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

console.log('-------------------');
// Iterable String
var greeting = 'Howdy';

console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

console.log('-------------------');
// concatenaciones

var greet = 'Hello ';
var user = 'Raul';

console.log( greet + user );
console.log( greet.concat(user));