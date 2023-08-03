console.log("hello");

//ES5
var ram = "person";

ram = "shyam";

console.log("ram");

//ES6

let person2 = "Ram";
person2 = "shyam";

console.log(person2);

//chapter 2 interactions

//alert("Username and password is wrong");
// const userName = prompt("enter your user name ");
// const password = prompt("enter your password");

// if ((userName === "Diom") & (password === "1234")) {
//   alert("welcome ton our website");
// }
//prompt
//conform

// chapter 3 Operators

// let hour = 17;

// if (hour > 14 || hour < 18) {
//   alert("JS class is running ");
// }

// const isValid = true;

// if (!isValid) {
//   alert("it is not valid");
// }

//conditionals

// const a = 15;
// const b = 15;

// let c = a / b;

// if ((c = 1)) {
//   alert("c is equal to 1");
// } else {
//   alert("c is not equal to 1");
// }

//ternary operator

// c = 1 ? alert("c is equal to 1") : alert("c is not equal to 1");

//loops
// for loop

// for (let a = 0; a <= 10; a++) {
//   console.log(a);
// }

// let a = 0;

// while (a <= 10) {
//   console.log(a);

//   a++;
// }

// let x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x <= 15);

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

// let x = 12;

// if (x % 3 == 0 || x % 7 == 0) {
//   console.log("x is a multiple of 3 or 7");
// } else {
//   console.log("x is not a multiple of 3 or 7");
// }

//functions

//es5
//function hello(){}

// const hello = () => {
//   console.log("hello");
//   console.log("hello to the user");
// };

// hello();

// const sum = (a, b) => {
//   return a + b;
// };

// const result = sum(5, 6);
// console.log(result);

const age = Number(prompt("enter your age"));
console.log(age);
