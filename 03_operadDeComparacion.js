// Operadores de comparación

// Los operadores de comparación en JavaScript nos permiten comparar dos valores. Siempre devuelven un valor booleano (true o false).

// Por ejemplo, podemos comparar si un número es mayor que otro con el operador >, o si un número es menor que otro con el operador <.

console.log(5 > 3);
console.log(5 < 3);

// También tenemos los operadores >= y <= que nos permiten comparar si un número es mayor o igual que otro, o si un número es menor o igual que otro.

console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 <= 3); // false
console.log(5 <= 5); // true

//Para saber si dos valores son iguales podemos usar el operador === o, para saber si son diferentes, el operador !==.

console.log(5 === 5); // true
console.log(5 !== 5); // false

// Comparando cadenas de texto

//No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.
console.log("");
'JavaScript' === 'JavaScript'; // true
'JavaScript' === 'Java'; // false
'JavaScript' !==  'PHP'; // true
(`Estoy Aprendiendo JavaScript`) === 'Estoy Aprendiendo JavaScript'; // true

// Comparando booleanos

// También podemos comparar booleanos con los operadores de comparación.

true === true // true
true === false // false
false !== false // false

// Por si te preguntas cómo se comportan los operadores de mayor o menor que (> y <) con booleanos te diré que, aunque no tiene sentido, debes saber que true es mayor que false.

true > false // true
false < true // true
true > true // false
false < false // false