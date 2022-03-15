let weight;
let height;
let bodyMassIndex;
const overweight = 25;
//if > 25 to overweight

weight = prompt("Enter your weight in killograms");
height = prompt("Enter your height in meters");

bodyMassIndex = weight / Math.pow(height, 2);

// alert(
//   `There are you overweight? ${overweight}
//   Your body mass index ${bodyMassIndex}`
// );

if (bodyMassIndex >= 25) {
  alert(
    `Yes, your BMI is more than normal by ${(
      bodyMassIndex - overweight
    ).toFixed(2)}`
  );
} else {
  alert(`Yes, your BMI is normal by ${overweight - bodyMassIndex}`);
}
