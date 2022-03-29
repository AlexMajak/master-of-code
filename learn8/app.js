// // Expressions

// 2 + 2
// 37
// true && false
// // Statements

// const number = 10;

// if (number > 0) {
// 	const text = 'The number is positive';
// }

// console.log(`${number - 2} is also positive number.`);


// Тернарный (условный) оператор

// const money = 100;
// const cost = 500;

// // money >= cost ? console.log('you can by it') : console.log('you can not buy it.');
// const canYouBuyIt = money >= cost ? console.log('you can by it') : console.log('you can not buy it.');

// console.log(canYouBuyIt);


// let canYouBuyIt1;
// if (money >= cost) {
// 	canYouBuyIt1 = 'You can buy it'
// } else {
// 	canYouBuyIt1 = 'You can not buy it'
// }

// console.log(`You can ${money >= cost ? 'yes' : 'not'} by it`);

// let oldYears = prompt('Введите Ваш возраст');
// const buyAlcohol = oldYears >= 18 ? 'You can buy alcohol' : 'You can not buy alcohol';
// console.log(buyAlcohol);
// alert(buyAlcohol);
'use strict'
// let hasCertificate = false;
// const passExam = true;

// if (passExam) hasCertificate = true;
// if (hasCertificate) console.log('Wow!');

// // const interface = 'Video';
// const package = 'Video2';

// function printText() {
// 	console.table('Hello to everyone!');
// }
// // printText();

// let number = 100;
// let i = 1;
// while (i <= number) {
// 	printText();
// 	i += 1;
// }

// function colorizer(item, color, colorCode) {
// 	// console.log(item, color);
// 	const colorizedItem = `The ${item} is ${color}. The cod of the color is ${colorCode}`;
// 	// console.log(colorizedItem);
// 	return colorizedItem;
// }

// const messageFromColorizer = colorizer('desk', 'red', 99);

// console.log(`We have the following message: ${messageFromColorizer}`);


// const messageFromColorizer2 = colorizer('hand', 'green', 10); console.log(`We have the following message: ${messageFromColorizer2}`);

//Don't Repeat Yourself - DRY

// function printText() {
// 	console.log('Hello to everyone!');
// }

// printText(5, 10);
// printText();
// printText();

// const number = Number('79');
// console.log(number);

//function declaration vs expression

//declaration можно вызвать до определения
function getAge(birthYear, yearNow) {
	// const age = yearNow - birthYear;
	return yearNow - birthYear;
}

const myAge = getAge(1982, 2022)
console.log(myAge);

//expression
const getAgeTwo = function (birthYear, yearNow) {
	return yearNow - birthYear;
}

const myAgeTwo = getAgeTwo(1985, 2022);
console.log(myAgeTwo);

//arrow functions

// const getAgeThree = (birthYear, yearNow) => {
// 	return yearNow - birthYear;
// }
const getAgeThree = (birthYear, yearNow) =>
	yearNow - birthYear;

// const myAgeThree = getAgeThree(1985, 2020);
const myAgeThree = getAgeThree(1985, 2020);
console.log(myAgeThree);

const canBuyAlcohol = (birthYear, yearNow) => {
	const age = yearNow - birthYear;
	const isPersonOlderThan = age >= 21 ? console.log("You can buy the alcohol") : console.log("You can not buy the alcohol");
}

canBuyAlcohol(1982, 2022);
