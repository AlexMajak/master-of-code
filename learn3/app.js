let result;
const firstName = "Jack";
const lastName = "Brown";
const space = " ";
const age = 25;
const greeting = "Hey there!";
//concatanation
result = "Jack";
result = firstName + space + lastName;

//escaping
result = "I'm 34 years old";

//properties and metods
result = "hello".length;
result = firstName.length;

//concat
result = firstName.concat(space, lastName);
result = greeting.concat(" ", firstName, " ", lastName);

//
result = result.toUpperCase();
result = result.toLowerCase();

//index
result = result[0];
result = "Hello".indexOf("l");
result = "Hello lol".lastIndexOf("l");
result = "Hello lol".lastIndexOf("lo");
result = firstName.indexOf("z");
result = firstName.charAt(1); //number symbol
const longString =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sit iure error vero, temporibus iste quibusdam in impedit optio, eaque exercitationem laudantium aspernatur blanditiis cupiditate voluptatum facilis magni quam velit.";
result = longString.charAt(longString.length - 1); // last symbol

//substring кусок строки
result = greeting.substring(0, 3); //hey

//slice кусок строки
result = greeting.slice(4, 9); //there
result = greeting.slice(-6); //there

//split разделяет строку в массив
result = longString.split(" ");
const colors = "red, blue, green, black";
result = colors.split(",");

//replace замена строки одной на другую
result = colors.replace("blue", "yellow");

//includes() true false содержит не содержит строку
result = colors.includes("blue");

console.log(result);
