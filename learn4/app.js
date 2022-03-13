const brand = "Toyota";
const model = "Camry";
const color = "grey";
const year = "2019";

//old approach
// carHtml =
//   "<h3>" +
//   "Car description" +
//   "</h3>" +
//   "<ul>" +
//   "<li>Brand: " +
//   brand +
//   "</li>" +
//   "<li>Model: " +
//   model +
//   "</li>" +
//   "<li>Color: " +
//   color +
//   "</li>" +
//   "<li>Year: " +
//   year +
//   "</li>" +
//   "</ul>";

//new approach интерполяция
carHtml = `
<h3>Car description</h3>
<ul>
<li>Brand: ${brand}</li>
<li>Model: ${model}</li>
<li>Color: ${color}</li>
<li>Year: ${year}</li>
<li>Year: ${2010 + 7}</li>
<li>Doors: ${getDoorsNumber()}</li>
<li>tax: ${year > 2017 ? "10%" : "20%"}</li>
</ul>
`;

function getDoorsNumber() {
  return 5;
}

document.body.innerHTML = carHtml;
