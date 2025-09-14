var car = {};
car.color = "red";
car.mileage = 98765;

car.turnTheKey = function() {
    console.log("The engine is running")
}

car.lightsOn = function() {
    console.log("The lights are on.")
}

console.log(car);
car.turnTheKey();
car.lightsOn();