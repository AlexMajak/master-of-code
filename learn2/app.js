const firstNumber = 50;
const secondNumber = 10;
let result;
//simple math operation
result = firstNumber + secondNumber;
result = firstNumber - secondNumber;
result = firstNumber * secondNumber;
result = firstNumber / secondNumber;
result = firstNumber % secondNumber;

//Math object
result = Math.PI;
result = Math.round(3.3); //округление
result = Math.ceil(3.3); // округление потолок
result = Math.floor(3.8); // округление пол
result = Math.sqrt(9); //корень
result = Math.abs(-7); //модуль
result = Math.pow(2, 3); // степень
result = Math.min(2, 3, 50, -10); // мин
result = Math.max(2, 3, 18); // макс
result = Math.random(); // макс
result = Math.floor(Math.random() * 100) + 1; // макс

console.log(result);
