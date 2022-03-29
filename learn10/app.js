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
	if (dept1 > dept2) {
		const differencseDept = dept1 - dept2;
		const multiplyDept = dept2 * 0.3;
		if (differencseDept > multiplyDept) {
			console.log(`Dept 1 will get a bonus of 35% ${differencseDept}`);
		} else {
			console.log(`In this kvartal not get bonus`);
		}
	} else if (dept2 > dept1) {
		const differencseDept = dept2 - dept1;
		const multiplyDept = dept1 * 0.3;
		if (differencseDept > multiplyDept) {
			console.log(`Dept 2 will get a bonus of 35% ${differencseDept}`);
		} else {
			console.log(`In this kvartal not get bonus`);
		}
	} else {
		console.log(`Sales are equal`);
	}
}


let result1 = printBonus(deptOne, deptTwo);
// console.log(printBonus(deptOne, deptTwo)) 
let result2 = printBonus(deptOneSecond, deptTwoSecond);