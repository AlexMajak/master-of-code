// let favoritColor;
// favoritColor = prompt("What is your favorite color ?");
// alert("My favorite color is " + favoritColor);

let firstName = prompt("What is your name?");
let lastName = prompt("What is your last name?");
let yearsOld = prompt("how old are you?");

// alert(`Your name ${firstName} lastname ${lastName} and yearsold ${yearsOld}`);
let text = `Your name ${firstName} last name ${lastName} and years old ${yearsOld}`;

let newString = document.createElement("h3");
newString.innerText = text;

document.body.append(newString);
