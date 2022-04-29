// debugger;
'use strict'

function colorMixer(colorOne, colorTwo) {
	const newColor = `${colorOne} + ${colorTwo}`;
	return newColor;
}

// function colorizer(item, color, colorCode) {
// 	const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}`;
// 	return colorizedItem;
// }

function colorizer(item, colorOne, colorTwo) {
	const color = colorMixer(colorOne, colorTwo);
	const colorizedItem = `The ${item} is ${color}.`;
	return colorizedItem;
}

const colorizedCar = colorizer('car', 'red', 'orange');
console.log(colorizedCar);

console.log(colorizer('house', 'white', 'black'));

let deptOne = 0;
let deptTwo = 0;
let deptOneSecond = 0;
let deptTwoSecond = 0;

let getAverage = (monthOne, monthTwo, monthFhree) => {
	let averageSale = (monthOne + monthTwo + monthFhree) / 3;
	return Math.round(averageSale);
}

deptOne = getAverage(35467, 29842, 38601);
// deptTwo = getAverage(35450, 29800, 38610);
deptTwo = getAverage(70533, 50121, 33899);
deptOneSecond = getAverage(50301, 21984, 19207);
deptTwoSecond = getAverage(72381, 41562, 29465);

console.log(deptOne);
console.log(deptTwo);
console.log(deptOneSecond);
console.log(deptTwoSecond);

function printBonus(dept1, dept2) {
	if (dept1 > dept2 && dept1 >= dept2 * 1.3) {
		const differencseDept = dept1 - dept2;
		const percents = Math.round(differencseDept / dept2 * 100);
		console.log(`Dept 1 will get a bonus of 35% ${differencseDept} rubles ${percents} percents.`);
	} else if (dept2 > dept1 && dept2 >= dept1 * 1.3) {
		const differencseDept = dept2 - dept1;
		const percents = Math.round(differencseDept / dept1 * 100);
		console.log(`Dept 2 will get a bonus of 35% ${differencseDept} rubles ${percents} percents.`);
	} else {
		console.log(`In this quarter not get bonus`);
		// console.log(`Sales are equal`);
	}
}


let result1 = printBonus(deptOne, deptTwo);
// console.log(printBonus(deptOne, deptTwo));
let result2 = printBonus(deptOneSecond, deptTwoSecond);

//arrays
const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

console.log(color2);

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(rainbowColors[5]);
console.log('The sky is ' + rainbowColors[4]);

rainbowColors[5] = 'dark blue';
rainbowColors[rainbowColors.length] = 'indigo';

console.log(rainbowColors);

const stringNumbers = [];
stringNumbers[0] = 'one';
stringNumbers[1] = 'two';
stringNumbers[2] = 'three';

const stringNumbers1 = new Array('one', 'two', 'three');

console.log(stringNumbers);
console.log(stringNumbers1);

const numbers = [34, 5, 32, 67, 80];
console.log(numbers);

const anyItems = [4, true, new Date(), 'something'];
console.log(anyItems);

//metod array

let result;
result = numbers.length;
result = Array.isArray(numbers);
result = numbers.indexOf(34)
//push() pop()

result = numbers.push(7);
result = numbers.pop();

//unshift() shift()

result = numbers.unshift(5);
result = numbers.shift();

result = numbers.push(1, 22, 33);
result = numbers.unshift(1, 22, 33);

result = numbers.splice(1, 1)
result = numbers.splice(1, 3)

result = numbers.reverse();
result = numbers.slice(1, 7);
result = numbers.concat(result);

console.log(result);
console.log(numbers);

//arrays homework
//tip calculator
//if summ < 20 tips 20% in other 15%
//arrow function calculateTips()
//bill parameter create an array of tips for each bill
//Create an array of total bills that is bill + tips
//Test data : 11, 20, 47
//all arrays bill + tip
let tips = 0;
let calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;
// {
//     if (bill < 20) {
//         tips = bill * 0.2
//     } else {
//         tips = bill * 0.15
//     }
//     return tips;
// }

const dataBill = [11, 20, 47];
const dataTips = [calculateTips(dataBill[0]), calculateTips(dataBill[1]), calculateTips(dataBill[2])];
const dataAll = [dataBill[0] + dataTips[0], dataBill[1] + dataTips[1], dataBill[2] + dataTips[2]];

// console.log(dataBill);
// console.log(dataTips);
// console.log(dataAll);
console.log(dataBill, dataTips, dataAll);

//object
const myData = ['Youra', 'Allaherdov', 1974, 'programming instractor', ['Irina', 'Michael']];
console.log(myData);

const youraObject = {
	name: 'Youra',
	lastName: 'Allaherdov',
	birthYear: 1975,
	job: 'programmer instractor',
	familyMembers: ['Irina', 'Michael', 'Youra']
};

//dot and brackets notation
console.log(youraObject);
console.log(youraObject.name);
console.log(youraObject['birthYear']);

const baseName = 'Name';
console.log(youraObject['last' + baseName]);
// const userInput = prompt('What do you want to know about Youra? Choose between name, lastname, birthYear, job, familyMembers');

// if (youraObject[userInput]) {
//     console.log(youraObject[userInput]);
// } else {
//     console.log('This property does not exist')
// }

//Create new properties

youraObject.location = 'Ukraine';
const telega = 'telegram'
youraObject[telega] = '@YouRaAll'
console.table(youraObject);

//Challenge
//Get {Youra} has {3} family members and the first one is {Irina}

console.log(`${youraObject.name} has ${youraObject.familyMembers.length} family members and the first one is ${youraObject.familyMembers[0]}`);

//Objects methods
const youraObject1 = {
	name: 'Youra',
	lastName: 'Allaherdov',
	birthYear: 1975,
	job: 'programmer instractor',
	familyMembers: ['Irina', 'Michael', 'Youra'],
	hasDriverLicense: true,
	// calcAge: function(birthYear) {
	//     return 2022 - birthYear;
	// },
	calcAge: function () {
		// console.log(this);
		this.age = 2022 - this.birthYear;
		return this.age;
	},
	summary: function () {
		let summary = (`${this.name} is a ${this.calcAge()} year old job ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`);
		return summary;
	}
};

// const calcAge = function(birthYear) {
//     return 2022 - birthYear;
// };

// console.log(youraObject1.calcAge());
// console.log(youraObject1['calcAge'](1982));

console.log(youraObject1.calcAge());
console.log(youraObject1.age);
console.log(youraObject1);


//Challenge
//method summary for object youraObject
//'Youra is a 47-old job programming instractor and he has a/no driver license'

console.log(youraObject1.summary());
console.log(youraObject1['summary']());

//BMI weightt/height ** 2
//Your task
//We have two friends - Jack and Mike
//1. For each of them, create an object with properties of its first name, last name,, weight and height(Jack White and Mike Black)
//2. Create method a BMI calculation method for each object to calculate BMI(same method for both objects). Store the BMI value in a property and also return it from the method. This
//Log into the console who has the higer BMI, also the full name and the corresponding BMI.


const friendJack = {
	firstName: 'Jack',
	lastName: 'White',
	weight: 79,
	height: 1.70,
	calcBmi: function () {
		this.bmi = Math.round(this.weight / (this.height ** 2));
		return this.bmi;
	}
}

const friendMike = {
	firstName: 'Mike',
	lastName: 'Black',
	weight: 79,
	height: 1.70,
	calcBmi: function () {
		this.bmi = Math.round(this.weight / (this.height ** 2));
		return this.bmi;
	}
}


console.log(friendJack.calcBmi());
console.log(friendJack.bmi);
console.log(friendJack['bmi']);
console.log(friendMike['calcBmi']());
console.log(friendMike['bmi']);

const textData = function () {
	if (friendJack.bmi > friendMike.bmi) {
		console.log(`${friendJack.firstName} ${friendJack.lastName} BMI(${friendJack.bmi}) is higer than ${friendMike.firstName} ${friendMike.lastName} BMI(${friendMike.bmi})!`);
	} else if (friendJack.bmi < friendMike.bmi) {
		console.log(`${friendMike.firstName} ${friendMike.lastName} BMI(${friendMike.bmi}) is higer than ${friendJack.firstName} ${friendJack.lastName} BMI(${friendJack.bmi})!`);
	} else {
		console.log(`${friendMike.firstName} ${friendMike.lastName} BMI(${friendMike.bmi}) are equal ${friendJack.firstName} ${friendJack.lastName} BMI(${friendJack.bmi})!`);
	}
}

textData();
// console.log(`${friendJack.firstName} ${friendJack.lastName} BMI(${friendJack.bmi()}) is higer than ${friendMike.firstName} ${friendMike.lastName} (${friendMike.bmi()})!`)

// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');



for (let rep = 1; rep <= 10; rep++) {
	console.log(`Push ups repetition ${rep}`)
};


const user123 = ['Sanya', 'Allakherdov', 1974, 'developer', ['Irina', 'Michael'], false];

const types = [];

for (let index = 0; index < user123.length; index++) {
	const element = user123[index];
	console.log(element, typeof element);
	// types[index] = typeof user123[index];
	// types.push(typeof user123[index]);
	types.unshift(typeof user123[index]);
};

console.log(types);


const birthYears = [1974, 1994, 2000, 2003];

const agesPeople = [];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

for (let i = 0; i < birthYears.length; i++) {
	// agesPeople[i] = currentYear - birthYears[i];
	agesPeople.push(currentYear - birthYears[i]);
	// agesPeople.unshift(currentYear - birthYears[i]);
}
console.log(agesPeople);

//continue & break

const user321 = ['Sanya', 'Alex', 1982, 'developer', ['Dasha', 'Demid'], true];

console.log('CONTINUE EXAMPLE');

for (let i = 0; i < user321.length; i++) {
	if (typeof user321[i] !== 'string') continue;
	console.log(user321[i], typeof user321[i]);
}

console.log('BREAK EXAMPLE');

for (let i = 0; i < user321.length; i++) {
	if (typeof user321[i] === 'number') break;
	console.log(user321[i], typeof user321[i]);
}

//итерация в обратном порядке backwards iteration

console.log('BACKWARDS ITERATION');

for (let i = user123.length - 1; i >= 0; i--) {
	console.log(i, user123[i]);
}

//loop in loop
console.log('LOOP IN LOOP');

for (let exercise = 1; exercise <= 3; exercise++) {
	console.log(`Exercise ${exercise}`);
	for (let repetition = 1; repetition < 6; repetition++) {
		console.log(`Exercise ${exercise} - Repetition ${repetition}`)
	}
}

//loop while
console.log('FOR LOOP');
for (let rep = 0; rep < user123.length; rep++) {
	console.log(`Push ups repetition ${rep}`);
}

console.log('FOR WHILE');
let rep = 1
while (rep <= 10) {
	console.log(` While Push ups repetition ${rep}`);
	rep++;
	break;
}

console.log('DICE');
// let diceNumber = Math.ceil(Math.random() * 6);
let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log(`Dice number before loop: ${diceNumber}`);

while (diceNumber !== 6) {
	console.log(diceNumber);
	diceNumber = Math.trunc(Math.random() * 6) + 1;
	console.log(`Dice number after random creation inside the loop: ${diceNumber}`);
}


// switch (food) {
// 	case 'sushi':
// 		break;

// 		break;

// 	default:
// 		break;
// }

// 1. Create the bills array containing all 10 bill values
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calculateTips() function we wrote before to calculate tips and total values (bill + tips) for every bill value in the bills array. Use a for loop to perform 10 calculations. Call calculateTips() in the loop and use the push() method to add values to the tips and totals arrays.
// 4.Write a calculateAverage() function than takes an array called arr as a parameter. This function calculates the average of all numbers in a given array. this is difficult task. Here's how to solve it




let tipsArray = [];
let totalsArray = [];
let averageArray = [];
let totalSum = 0;


const dataBillArray = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

let calculateTips2 = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15;

function calculateTipsFun() {
	for (let i = 0; i < dataBillArray.length; i++) {
		tipsArray.push(Math.trunc(calculateTips2(dataBillArray[i])));
		// console.log(`tipsArray ${tipsArray}`);
		totalsArray.push([+tipsArray[i] + +dataBillArray[i]]);
		// console.log(`totalArray ${totalsArray}`);
	}
};

calculateTipsFun();
console.log(`tipsArray ${tipsArray}`);
console.log(`totalArray ${totalsArray}`);

const totals = [2, 2];

function calculateAverage(arr) {
	let sum = 0;
	// let result = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
		// result = sum / arr.length;
	}
	return sum / arr.length;
	// console.log(result);
};

console.log(calculateAverage(totals));
console.log(calculateAverage(dataBillArray));
console.log(calculateAverage(tipsArray));
console.log(calculateAverage(totalsArray));












