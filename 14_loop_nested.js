// Bucles anidados

// se ejecuta el primer for, luego el segundo for
// luego vuelve al primer for, y asi sucesivamente

for (var i = 1; i <= 2; i++){

    for (var j = 1; j <= 5; j++){
        console.log("Week " + i + " day " + j);
    }
}

console.log('--------------------');

for (var i = 2023; i < 2025; i++){
    console.log(i);
    for (var j = 6; j < 9; j++){
        console.log('-----', j);
    }
}