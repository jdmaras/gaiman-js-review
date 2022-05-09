console.log(`I am in script.js`);

let myName = "John";
console.log("My name is ", myName);
// console will log out the sentence My name is and then the variable will fill in what it's equal to
/*
let -- a KEYWORD, we are about to declare a variable

myName -- the name of the variable

= -- the equal sign is the assignment operator

(the string) 'John' -- the value
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
