console.log(`I am in script.js`);

let myName = "John";
console.log("My name is ", myName);
// console will log out the sentence My name is and then the variable will fill in what it's equal to
/*
let -- a KEYWORD, we are about to declare a variable

myName -- the name of the variable

= -- the equal sign is the assignment operator

(the string) 'John' -- the value
a string is a DATA TYPE
*/
// Use camelCase
let myLastName = "Maras";

//Other kinds of casing:
// snake_case
//let my_last_name = 'Maras';

//kebob-case
//let my-last-name = 'Maras';

//SCREAMING_SNAKE_CASE
//let MY_LAST_NAME = 'Maras';

/*
Expressions


*/

console.log("My name is ", myName + " " + myLastName);
//  ^ this is an expression!
// console.log (`My name is John Maras`);
function add(n1, n2) {
  return n1 + n2;
}
let result = add(5, 7);
console.log(result);
// let result = 12
//if (8 > 7) {
// if (false)
// ....
//}

let isJamesBond = myName + " " + myLastName === `James Bond`;
// let isJamesBond = 'John Maras' === 'James Bond';
// let isJamesBond = false;
console.log("isJamesBond", isJamesBond);

// using a "+" allows you to concact and turn things into a string.
// the + sign concats strings together but if you're mixing strings and numbers, you have to watch out
// just don't try and add numbers and strings together

let aNumberMaybe = "23";
aNumberMaybe + 2;
// '232' <--- concatination

// Number is just a function that makes it turn what's in parenthisis into a number so it doesn't bug
Number(aNumberMaybe) + 2;
// 25 <---- addition
//

/*
 NaN        means Not a Number. It means you did bad math
undefined       means the variable hasn't been defined
not defined         the variable  hasn't been declared
null        nothing, on purpose
*/

let somethingMaybe;

function subtract(n1, n2) {
  // n1 = 7
  // n2 = undefined
  console.log("n1, n2", n1, n2);
}
subtract(7);

let artistFirstName = "Prince";
let artistLastName = null; // <--- nothing, on purpose
/*
8 === 8; // True
'8' === 8; //false because it's the  string of 8
8 === '8'; // True but don't do this
// make it 8 === Number('8');


* Conditionals
*/

// if(/* this thing is true */){
//     // do this stuff
//     // inside this code block. Code Block is anything inside squirrely braces

// if (true)
// let isSomethingTure = myName === 'John';
// if (isSomethingTrue){
//     //code block
// }
// else if(17/2 >){
//     //you can keep chaining together else
// }

// let dayOfTheWeek = 'Monday';
// if (dayOfTheWeek == 'Monday'){
//     console.log('Js Review');
// }
// else if (dayOfTheWeek === 'Tuesday'){
//     console.log('Objects');
// }
// switch(dayOfTheWeek){
//     case 'Monday';
//         console.log('JS Review');
//         break;
//     case 'Tuesday';
//         console.log('Objects');
//         break;

// }

//Ternary: if/else, and reseolves to a value
let height = 55;
let message =
  height > 50
    ? "you can ride this ride" //if
    : "keep growing, try later"; //else

// let message = 'you can ride this ride';

/*
Inputs / Arguments / Parameters - all interchangeable   
    yourHeight
    dangerLevel
*/

function isTallEnoughToRide(yourHeight, dangerLevel) {
  let myHeight = 50;
  if (dangerLevel === "kiddie") {
    minHeight = 28;
  } else if (dangerLevel === "intense") {
    minHeight = 55;
  }
  return yourHeight > minHeight; // boolean
  // return undefined
}
isTallEnoughToRide(50, "kiddie");
// ^ now you're calling to the function to run those heights and dangerlevel.
console.log("can we", isTallEnoughToRide(50, "kiddie"));
//console.log('can we' , undefined ) - because this isn't set up right

function stressRelease() {
  console.log("BWAAAAAAAA");
}
let stressLevel = 20;
while (stressLevel > 5) {
  stressRelease();
  stressLevel--;
}
//Declaring a function
// function declaration
function makeASentence(words) {
  return words.join(" ") + ".";
}
//anonymous function
// function expression
// arrow function - they need to be defined first
let makeASentence3 = (words) => {
  return words.join("") + ".";
};
// single arg does not need parenthesis
let makeASentence4 = (words) => {
  return words.join("") + ".";
};
// one liner
let makeASentence5 = (words) => words.join("") + ".";

// Calling a function
let welcome = makeASentence(["Welcome", "to", "Gaiman"]);
// let welcome = 'Welcome to Gaiman.'

// log() is a method of the console object
console.log("yolo");

let numbers = [1, 2, 3, 4, 5];
// push() is a method of the numbers array
numbers.push(6);

// push is a property of numbers and it just so happens to be a function in this example

/*
Javascript is: a loose / dynamic typed language
other languages are: storngly / statically typed
*/

/*
Arrays
list of strings or numbers
*/
let animals = ["cat", "dog", "bunny"];
// the data type is an array for these strings
let firstAnimal = animals[0]; // 'cat'
let lastAnimal = animals[2]; // 'bunny'
let lastAnimals = animals[animals.length - 1]; // also 'bunny' but would take last in any array
// .length - 1 means it takes the number in the index and minus one because index starts at 0

// 'for of'
for (let animal of animals) {
  // for every animal in the array, i'm going to assign the variable 'animal'
  console.log(`animal is `, animal);
  if (animals === "bunny") {
    console.log("WABBIT");
  }
}
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// use this one if you're looping through a ton of numbers or you need the index

for (let i = 0; i < 1000; i += 5) {
  console.log(i);
}

// while loop
let bigNumber = 2 ** 20;
// while (bigNumber > 1){
//   bigNumber = bigNumber / 2;
//   console.log(bigNumber);
// }
// while loop keeps running as long as it's true

while (true) {
  bigNumber = bigNumber / 2;
  console.log(bigNumber);

  if (bigNumber <= 1) {
    //break
  }
}

animals.push("newt", "lion", "frog");
