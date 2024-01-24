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

// let marks = 550;

// let result =
//   marks < 0 || marks > 100
//     ? "Out of range"
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

// let day = 1;

// switch (day) {
//   case 1: {
//     console.log("Sunday");
//     break;
//   }

//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default:
//     console.log("INVALID");
// }

// check if the provided number is odd or even using switch

// let num = 8;

// let remainder = num % 2;

// switch (remainder) {
//   case 0: {
//     console.log("number is even");
//     break;
//   }
//   default: {
//     console.log("number is odd");
//   }
// }

// // ? waf that calculates the factorial  of a number using arrow function

// const getFactorial = (num) => {
//   let factorial = 1;

//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };

// const factorial = getFactorial(5);
// console.log(factorial);
//

// ? WAF that accepts first name and last name as argument and returns full name

// const getFullName = (firstName, lastName) => {
//   let fullName = `${firstName} ${lastName}`;

//   return fullName;
// };

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// const fullName = getFullName("Rohan", "Bhandari");
// console.log(fullName);
// object =>key value pair

//primitive data types
// string
// boolean
// number
// undefined
// null

// non-primitive data types
//object => key value pair
//key is also called property

// let student1 ={
//   fName = "Diom",
//   lName = "Shrestha",
//   collage ="Broadway",
//   age = 22,
//   pAddress = "ktm",
//   tAddress = "ktm",
//   isMarried = false,
//   isGraduated = null,
//   height = undefined,

// };

//console.log(student1);

//?CRUD
// ?CRUD
// C => Create/ Add
// R => Read/ Retrieve
// U => Update/Edit
// D => Delete /Remove

// const courseDetails = {
//   name: "MERN",
//   duration: 90,
//   type: "Full stack",
//   numberOfStudents: 16,
// };

// ?Read operations
// ?dot operator and square operator
// console.log(courseDetails.name);
// console.log(courseDetails.numberOfStudents);
// console.log(courseDetails["duration"]);

// console.log(courseDetails.type);
// console.log(courseDetails["type"]);

// ? Delete operation => removes specified property
// delete courseDetails.type;
// delete courseDetails["type"];
// console.log(courseDetails);

// " " => double quote
// ''  => single quote
// `` => back tick
// ; => semi colon
// : => colon
//  , => comma
//  / => slash (forward slash)
// \ => back slash
// || => pipe
// && => ampersand

// const countryDetails = {
//   name: "Nepal",
//   states: 7,
//   district: 77,
//   localAdministration: 753,
//   isRepublic: true,
//   isSecular: true,
//   famousPlace: "Lumbini",
// };

// //?read
// console.log(countryDetails.name);
// console.log(countryDetails["isRepublic"]);

//upsert => update or insert
// ?update

// countryDetails.name = "India";

//? add

// countryDetails.continent = "Asia";

// console.log(countryDetails);

// const laptopDetails = {
//   name: " GF75 ",
//   brand: "MSI",
//   ram: 16,
//   ssd: 512,
//   display: 15.3,
//   graphics: "NVIDIA GeForce RTX 3060",
//   battery: "51 Whr",
//   processor: "i7 107OH",
// };

// // ? display laptop name with battery capacity

// console.log(laptopDetails.name);
// console.log(laptopDetails.battery);

// console.log(
//   `${laptopDetails.name} has ${laptopDetails.battery} battery capacity`
// );

// // ?change ram size to 18 gigs

// laptopDetails.ram = 18;

// // ?add another property called  memoryFrequency with 3200MHz value

// laptopDetails.memoryFrequency = "3200MHz";

// // ? add another property called weight whose value is 3kg

// laptopDetails.weight = "3 kg";

// // ? update ssd size by 300 GB

// laptopDetails.ssd += " 300GB";

// console.log(laptopDetails);

/*

2.Create an object named myHouseDetails and add following properties
numberOfRooms
numberOfMembers
colorOfHouse
builtYear
numberOfStorey

A.Delete numberOfMembers property
B.Update numberOfRooms by new value
            C.Add a  new property called estimatedPriceOfHouse
D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

? assignment 
myHouseDetails = {
  numberOfRooms: 20,
  numberOfMembers: 12,
  colorOfHouse: "Orange",

  builtYear: 2001,
  numberOfStorey: 7,
};
//   b

myHouseDetails.numberOfRooms = 25;

//c
myHouseDetails.estimatedPriceOfHouse = "20Crore";

//d

console.log(
  `I have ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people live. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}`
);

console.log(myHouseDetails);


*/

//  ? nested object

// const studentDetails = {
//   fName: "Diom",
//   lName: "Shrestha",
//   age: 22,
//   collage: "University of Sunderland",
//   address: {
//     temporary: "London", // nested object
//     permanent: "Kathmandu",
//   },
// };

// console.log(studentDetails);

/*
const laptop1 = {
  name: "Mac Book pro",
  brand: "Apple ",
  model: "2023",
  storage: {
    ram: 12,
    ssd: 512,
  },
};

//?copy by value, copy by reference shallow copy
//const laptop2 = laptop1;

//? spread operator {...}
// const laptop2 = { ...laptop1 };
// laptop2.name = "Dell";

//?structured clone deep copy

const laptop2 = structuredClone(laptop1);

laptop2.name = "dell";
laptop2.storage.ssd = 1020;

console.log(laptop2);
*/

// destructure

/*
const laptop1 = {
  name: "Mac Book pro",
  brand: "Apple ",
  model: "2023",
  storage: {
    ram: 12,
    ssd: 512,
  },
};

const {
  name,
  brand,
  model,
  storage: { ram, ssd }, // double destructure
} = laptop1;

console.log(name, brand, model);

console.log(ram, ssd);

*/

// const student1 = {
//   firstName: "Saron",
//   lastName: "Shrestha  ",

//   address: {
//     temporary: "A",
//     permanent: " B",
//   },
// };

// const {
//   firstName: fName, //remaining
//   address: { temporary: tempAdd }, //double destructure
// } = student1;

// console.log(fName, tempAdd);

//array

//c=> collection of same data type
// js=> collection of any datatype

//? JS supports mixed datatypes

// const randomArray = [11, "Nepal", true, null, undefined];

// console.log(randomArray);

// const scoreList = [45, 65, 75, 85];
// we can access the values in array using array
//and index always starts with zero

//array length => total number of items in array

// console.log(scoreList[2]);

// const catBrands = ["Honda", "Toyota", "BYD", "Tesla", "Hyundai", "Tata"];

// for (let i = 0; i >= catBrands.length - 1; i++) {
//   console.log(carBrand);
//}

const studentList = ["Prithiv"];

// //? push => add elements to end the array

// studentList.push("Arun");

// studentList.push("Rina", "Sona");

// //?[pop => removed last inem foen]

// studentList.pop();

//? unshift => adds items  tok the start of array

// studentList.unshift("Manish ");

//?shift => removes item from the start of the array
// studentList.shift

// console.log(studentList);

//?map =>

//original array and returned array have same length/ size
// const scores = [25, 35, 45, 55, 65, 75];

// scores.map((item, index, self) => {
//   console.log(item);
// });

//newScores =

// const newScores = scores.map((item, index, self) => {
//   let newScores = item - 5;
//   return newScores;
// });

// console.log(newScores);

// const marks = [80, 85, 70, 60, 90];

// const newMarks = marks.map((item) => item - 5);// const add = (a, b) => a + b; // one liner arrow function

// console.log(newMarks);

// let nameList = ["Diom", "Diwas", "Pravin"];

// let newNameList = nameList.map((item, index, self) => item.toLowerCase());

// let newNameList = nameList.map((item, index, self) => {
//   if (item === "Diom") {
//     return item;
//   } else {
//     let newItem = item.toLowerCase();
//     return newItem;
//   }
// });

// console.log(newNameList);

// const friendList = ["Diom", "Diwas"];
// const newFriendList = friendList.forEach((item) => {
//   console.log(item);
// });

//make an array of numbers that double the items

// const numList = [10, 20, 30, 1, 2, 3, 4, 5, 6];

// const newNumList = numList.map((item) => {
//   let newItem = item + item; //let newItem = item *2;
//   return newItem;
// });
// console.log(newNumList);

//
//make an array of numbers and print wheather the numbers are odd or even
// const checkOddOrEven = (numbers) => {
//   if (numbers % 2 === 0) {
//     return (result = "even");
//   } else {
//     return (result = "odd");
//   }
// };
// const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.forEach((item) => {
//   const result = checkOddOrEven(item);
//   console.log(`${item} is ${result}`);
// });

//filter => filters out value from array
//map is used to change the value of array and form new array where filter does't change the array but filters the value as per condition
// const numList = [11, 12, -12, -14, 15, 16, -17];
// const newNumList = numList.filter((item) => {
//   if (item > 0) {
//     return item;
//   }
// });
// console.log(newNumList);

// const newNumList = numList.filter((item) => item > 0);
// console.log(newNumList);
// console.log();

//get an array with even sores
const scoreList = [25, 26, 78, 7, 35, 47, 55];
// const newScoreList = scoreList.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(newScoreList);

// const newScoreList = scoreList.filter((item) => item % 2 === 0);
// console.log(newScoreList);

// ? due to sudden rise in tax, add 10% to the price of each laptop
let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];
// const newPrice = laptopList.map((item) => {
//   console.log(item);
//   return item.price + item.price * 0.1; //(10/100)
// });

// console.log(newPrice);

// ? decrease price of each laptop by 20 percent

// ? remove laptops whose price is greater than 1000

// ? remove laptops whose brand is apple

// ? increase price of asus laptop by 5%

// ? assignment

// ? due to sudden rise in tax, add 10% to the price of each laptop

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + 0.1 * item.price;

//   let newItem = {
//     ...item,
//     price: newPrice, //replaces price with newPrice
//   };

//   return newItem;
// });

// console.log(newLaptopList);

// ? decrease price of each laptop by 20 percent
// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - (20 / 100) * item.price;

//   let newItem = { ...item, price: newPrice };

//   return newItem;
// });

// console.log(newLaptopList);

// ? remove laptops whose price is greater than 1000
// const newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.price <= 1000) {
//     return item;
//   }
// });

// console.log(newLaptopList);
// ? remove laptops whose brand is apple

// const newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.brand !== "apple") {
//     return item;
//   }
// });

// console.log(newLaptopList);

// ? increase price of asus laptop by 5%

// const newLaptopList = laptopList.map((item, index, self) => {
//   if (item.brand === "asus") {
//     let newPrice = item.price + (5 / 100) * item.price;

//     let newItem = { ...item, price: newPrice };

//     return newItem;
//   }

//   return item;
// });

// console.log(newLaptopList);

// array of word 7

const words = ["hello", "help", "hospital", "destroy", "present"];

// const newWords = words.filter((item) => {
//   if (item.length >= 6) {
//     return item;
//   }
// });

// const newWords = words.filter((item) => item.length >= 6); // one liner

// console.log(newWords);

//? reduce

const scores = [50, 55, 45, 72];

// let sum = 0;
// scores.map((item) => {
//   sun = sum + item;
//   return sum;
// });

// console.log(sum);

// const totalValue = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;

//   return sum;
// });
// console.log(totalValue);

const values = [10, 25, 35, 5];

//calculate total value by multiplying each other

// const newValues = values.reduce((product, item, index, self) => {
//   product = product * item;
//   return product;
// });

const newValues = values.reduce((product, item) => product * item); // one liner
console.log(newValues);
