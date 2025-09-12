// matriz vacia
var fruits = [];

// Agregando nuevos elementos a la matriz
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Orange");

console.log(fruits);

// eliminando el ultimo elemento de la matriz
fruits.pop();

console.log(fruits);

// uniendo funciones y matrices
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    // 1 console.log(arr);
    //tambien puedo en ves de usar console.log puedo devolver con return
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

console.log(simpleArr);