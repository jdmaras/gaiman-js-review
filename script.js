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
