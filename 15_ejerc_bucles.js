for (var firstNum = 0; firstNum <= 10; firstNum++) {
    
    for (var secondNum = 0; secondNum <= 10; secondNum++) {
    console.log(firstNum + " x " + secondNum + " = " + (firstNum * secondNum));
    }
    console.log('--------');
}

console.log('-------------------------');

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " / " + j + " = " + i / j);
    }
}