//Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

// const revNum = (number) => {
//   const isNegative = number < 0;
//   const absoluteNumber = Math.abs(number);
//   const reversedString = String(absoluteNumber).split("").reverse().join("");
//   const revNum = parseInt(reversedString, 10);

//   return isNegative ? -revNum : revNum;
// };
// const x = 1789235333;
// const reversed = revNum(x);
// console.log(`Original: ${x}, Reversed: ${reversed}`);

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// function countDigits(num) {
//   if (num === 0) {
//     return 1; // Special case for handling 0
//   }

//   num = Math.abs(num); // Convert negative number to positive

//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }

// console.log(countDigits(12345)); // Output: 5
// console.log(countDigits(-9876)); // Output: 4
// console.log(countDigits(0)); // Output: 1

// Write a java script function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// function calculatePerimeter(input) {
//   const letter = input.charAt(0);
//   const num = parseFloat(input.substr(2));

//   if (isNaN(num)) {
//     return "Invalid input. Please provide a valid number.";
//   }

//   if (letter === "s") {
//     if (num <= 0) {
//       return "Invalid side length for square. Please provide a positive number.";
//     }
//     return 4 * num; // Perimeter of a square: 4 * side
//   } else if (letter === "c") {
//     if (num <= 0) {
//       return "Invalid radius for circle. Please provide a positive number.";
//     }
//     return 2 * Math.PI * num; // Perimeter of a circle: 2 * π * radius
//   } else {
//     return "Invalid shape letter. Please use 's' for square or 'c' for circle.";
//   }
// }

// // Example usage
// console.log(calculatePerimeter("s 5")); // Output: 20 (perimeter of a square with side length 5)
// console.log(calculatePerimeter("c 3")); // Output: 18.84955592153876 (perimeter of a circle with radius 3)
// console.log(calculatePerimeter("t 2")); // Output: Invalid shape letter. Please use 's' for square or 'c' for circle.

/*
// Write a function that takes an array of objects and sorts them based on a specific property.
function sortByProperty(arr, property) {
  // Check if the property exists in the first object of the array
  if (arr.length > 0 && arr[0].hasOwnProperty(property)) {
    // Use the sort() method to sort the array based on the specified property
    arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  } else {
    // Handle the case where the property does not exist in the objects
    console.error(`Property '${property}' does not exist in the objects.`);
  }
}

// Example usage:
const people = [
  { name: "Ana", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Char", age: 35 },
];

// Sort the array of objects by age
sortByProperty(people, "age");
console.log(people); // Output will be sorted by age
*/

//Perform arithmetic operation based on the option provided. Set two variables with numbers. Create another variable called “option” which can be add/subtract/multiply/divide/power.
//Based upon the value of the option. Perform appropriate operation.
//e.g. if option is “add”, perform num1+num2

// let num1 = 5;
// let num2 = 6;

// let option = "add";

// let result =
//   option === "add"
//     ? num1 + num2
//     : option === "subtract"
//     ? num1 - num2
//     : option === "multiply"
//     ? num1 * num2
//     : option === "division"
//     ? num1 / num2
//     : "invalid";

// console.log(result);

// if (option === "add") {
//   console.log(num1 + num2);
// } else if (option === "subtract") {
//   console.log(num1 - num2);
// } else if (option === "multiply") {
//   console.log(num1 * num2);
// } else if (option === "division") {
//   console.log(num1 / num2);
// } else if (option === "power") {
//   console.log(num1 ^ num2);
// } else {
//   console.log("invalid");
// }

// Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.

// let marks = 70;

// let result =
//   marks > 100 && marks < 0
//     ? "out of range"
//     : marks >= 90 && marks <= 100
//     ? " A+"
//     : marks >= 80 && marks < 90
//     ? "A"
//     : marks >= 70 && marks < 80
//     ? "B"
//     : marks >= 60 && marks < 70
//     ? "C"
//     : "F";

// console.log(result);

let day = 1;

switch (day) {
  case 1: {
    console.log("Sunday");
    break;
  }

  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }
  case 4: {
    console.log("Wednesday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("Friday");
    break;
  }
  case 7: {
    console.log("Saturday");
    break;
  }
  default:
    console.log("INVALID");
}
