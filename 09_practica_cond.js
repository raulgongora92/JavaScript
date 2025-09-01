var edad = 50;

if (edad >= 65) {
    console.log("Usted obtiene sus ingresos de su pensión.");
} else if (edad >= 18 && edad < 65) {
    console.log("Cada mes recibe un salario.");
} else if (edad < 18) {
    console.log("Obtiene una asignación.");
} else {
    console.log("El valor de la variable edad no es un numerico.");
}

console.log("--------------------------");

var day = "Domingo";

switch (day) {
    case "Lunes":
        console.log('Futbol');
        break;
    case "Martes":
        console.log('trabajar');
        break;
    case "Miercoles":
        console.log('dormir');
        break;
    case "Jueves":
        console.log('estudiar');
        break;
    case "Viernes":
        console.log('salir');
        break;
    case "Sabado":
        console.log('fiesta');
        break;
    case "Domingo":
        console.log('descansar');
        break;
    default:
        console.log('There is no such day');
        break;
}