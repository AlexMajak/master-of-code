const color = 'white';

// if (color == 'green') {
// 	console.log('Go!');
// } else if (color == 'yellow') {
// 	console.log('Get ready!');
// } else if (color == 'red') {
// 	console.log('Stop!');
// } else {
// 	console.log('Incorrect color!');
// }

let divHeader = document.createElement("div");
let divColors = document.createElement("div");
// let colors = document.querySelector('.divColors');
// let header = document.querySelector('.divHeader');
divColors.className = 'colors';
divHeader.className = 'header';


let body = document.querySelector("body");
body.appendChild(divColors);
body.appendChild(divHeader);
let result = '';

let colorName = function (color) {

	switch (color) {
		case 'green':
			result = console.log('Go!');
			divColors.style.backgroundColor = 'green';
			divHeader.style.color = 'green';
			break;
		case 'yellow':
			result = console.log('Get ready!');
			divColors.style.backgroundColor = 'yellow';
			divHeader.style.color = 'yellow';
			break;
		case 'red':
			result = console.log('Stop');
			divColors.style.backgroundColor = 'red';
			divHeader.style.color = 'red';
			break;
		case 'white':
			result = console.log('zvezda')
			divColors.style.backgroundColor = 'white';
			divHeader.style.color = 'white';
			break
		default:
			result = console.log('Incorrect');
			divColors.className = 'colors';
			divHeader.style.color = 'black';
			break;
			return result;
	}

}

console.log(colorName("red"));

divHeader.innerText = "result";


const weekday = 'sunday';

switch (weekday) {
	case "monday":
		console.log("Keep calm and pretend it's not monday.");
		break;
	case "tuesday":
		console.log("Keep calm and pretend it's not tuesday.");
		break;
	case "wednesday":
		console.log("Keep calm and pretend it's not wednesday.");
		break;
	case "thursday":
		console.log("Keep calm and pretend it's not thursday.");
		break;
	case "friday":
		console.log("Keep calm and pretend it's not friday.");
		break;
	case "saturday":
	case "sunday":
		console.log("Keep calm and pretend it's not sunday.");
		break;

	default:
		console.log("This is not " + "a weekday I know..")

}