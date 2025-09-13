var greet = "Hello, ";
var place = "World"

console.log(greet.length); // Cuenta el numero de caracteres

console.log(greet.charAt(5)); // lee el caracter en la posicion 5

console.log("Wo".concat("rl").concat("d")); // concatena 2 o mas strings

// indexof busca la posicion de un caracter o substring
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("hoho-ho".indexOf('-')); // 2

// lastIndexOf busca la ultima posicion de un caracter o substring
console.log("ho-ho-ho".lastIndexOf('o')); // 1

//lo que se ponga entre parentesis es lo que hara que se corte o separe el string ejemplo:(-)
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

console.log(greet.toUpperCase());
console.log(greet.toLowerCase());