// alert("Js is working!");
// comments in js is two forward slashes

console.log('Console.WriteLine is c#');
console.log("This is a message from the app.js")

//THis is how we would declare a variable in c#
// WE know that c# is a strict programming language, so we have to declare the data type
// string myName = "Karla";

//JS is a loosely typed programming language
// We use the Let prefix to declare when we would need to change teh variable later
let myString = 'Ken'; //Js can have single quotes with strings.
let anotherSTring = "Martinez"; //Js will allow both single and double quotes for strings. 

let myInt = 4; //This is an integer
let myBool = true; //this is a bool
let myNUll = null;

var oldWay = "This is the old way to create variables";
myString = "Karla";
console.log(myString);
//We can use const to prevent reassignment of a variable
const pi = 3.14;
//pi = 4;

console.log( myInt + pi );
//JS will implicity convert data types when necessary
console.log(myString+ myInt); //Js will convert the integer to a string and concatenate
console.log(myString + ' '+ anotherSTring);
console.log( `FullName: ${myString} ${anotherSTring}`);
let myArray = [1,2,3,4,"Five",true];
console.log(myArray);

//accessign elements in the array
let myElement = document.getElementById("myElement");
console.log(myElement);
myElement.textContent = "I changed the text from JS! ";
