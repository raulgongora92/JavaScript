// objetos

var storeManager = {
    rangeTilesPerTurn: 4,
    socialSkills: 50,
    streetSmarts: 50,
    health: 30,
    specialAbility: "finding business opportunities",
    greeting: "Let's make some money"
}

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

console.log(storeManager, assistantManager);
console.log("-------------------");

// Agregar una propiedad
storeManager.nextAchievement = "open a new store";
assistantManager.nextAchievement = "get promoted";

console.log(storeManager, assistantManager);
console.log("-------------------");

// Eliminar una propiedad
delete storeManager.socialSkills;
delete assistantManager.streetSmarts;

console.log(storeManager, assistantManager);
console.log("-------------------");

// Modificar una propiedad
storeManager.rangeTilesPerTurn = 5;
assistantManager.movement = 4;  
console.log(storeManager, assistantManager);
console.log("-------------------");

// Acceder a una propiedad

console.log("Accediendo a una propiedad:", storeManager.health);
console.log("-------------------");