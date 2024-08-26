console.log("Assigment1: Sum of two numbers in Node.js");

const num1 = process.argv[2];
const num2 = process.argv[3];

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

const sum = number1 + number2;

console.log(`The sum of ${number1} and ${number2} is: ${sum}`);
