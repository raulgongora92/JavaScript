// Operadores lógicos

//Los operadores lógicos en JavaScript (y en muchos otros lenguajes de programación) se utilizan para evaluar expresiones lógicas.

//En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

// Operador lógico AND &&

//El operador lógico AND se indica con &&. Devuelve true cuando ambos valores que conecta son true.

true && true // → true
true && false // → false
false && false // → false

// Operador lógico OR ||

//El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.

true || true // → true
true || false // → true
false || false // → false

// Operador lógico NOT !

//El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

!true // → false
!false // → true

// Combinando operadores lógicos, aritméticos y de comparación

// Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. Por ejemplo, podemos preguntar si un número está entre dos valores.

2 < 3 && 3 < 4 // → true

// También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

2 + 2 < 3 && 10 < 8 * 2 // → false

//Igualmente, es importante que sepas que las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.

2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false

// Dos o más operandos

// Aunque todos los ejemplos que has visto hasta ahora usan dos operandos, los operadores lógicos también pueden usarse con más de dos operandos.

true && true && true // → true

// También puedes mezclar operadores lógicos:

(true && true) || false // → true
!true && !true // → false
(false && true) || !true // → false