//Operador AND (&&)

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

//Operador OR (||)

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

//Operador NOT (!)

var petHungry = true;
console.log('Feeding the pet'); 
console.log("Pet is hungry: ", !petHungry); 
console.log(petHungry);

console.log(1 + "2");

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."