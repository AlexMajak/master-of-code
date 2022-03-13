let weight;
let height;
let bmi;
//if > 25 to overweight

weight = prompt("Your weight killograms");
height = prompt("Your height meter");
bodyMassIndex = weight / Math.pow(height, 2);

if (bodyMassIndex >= 25) {
  bodyMassIndex = true;
} else {
  bodyMassIndex = false;
}
alert(`There are you overweight? ${bodyMassIndex}`);
