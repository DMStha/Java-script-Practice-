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
function calculatePerimeter(input) {
  const letter = input.charAt(0);
  const num = parseFloat(input.substr(2));

  if (isNaN(num)) {
    return "Invalid input. Please provide a valid number.";
  }

  if (letter === "s") {
    if (num <= 0) {
      return "Invalid side length for square. Please provide a positive number.";
    }
    return 4 * num; // Perimeter of a square: 4 * side
  } else if (letter === "c") {
    if (num <= 0) {
      return "Invalid radius for circle. Please provide a positive number.";
    }
    return 2 * Math.PI * num; // Perimeter of a circle: 2 * π * radius
  } else {
    return "Invalid shape letter. Please use 's' for square or 'c' for circle.";
  }
}

// Example usage
console.log(calculatePerimeter("s 5")); // Output: 20 (perimeter of a square with side length 5)
console.log(calculatePerimeter("c 3")); // Output: 18.84955592153876 (perimeter of a circle with radius 3)
console.log(calculatePerimeter("t 2")); // Output: Invalid shape letter. Please use 's' for square or 'c' for circle.
