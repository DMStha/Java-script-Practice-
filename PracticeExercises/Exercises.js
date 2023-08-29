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

function countDigits(num) {
  if (num === 0) {
    return 1; // Special case for handling 0
  }

  num = Math.abs(num); // Convert negative number to positive

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(-9876)); // Output: 4
console.log(countDigits(0)); // Output: 1
