//Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

const revNum = (number) => {
  const isNegative = number < 0;
  const absoluteNumber = Math.abs(number);
  const reversedString = String(absoluteNumber).split("").reverse().join("");
  const revNum = parseInt(reversedString, 10);

  return isNegative ? -revNum : revNum;
};
const x = 1789235333;
const reversed = revNum(x);
console.log(`Original: ${x}, Reversed: ${reversed}`);
