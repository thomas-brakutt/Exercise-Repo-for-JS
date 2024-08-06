/*
01. Greet Function
Implement welcomeMsg function
- The first parameter is the name of the person to be greeted. It's a string.
- The function should return a string that contains the name of person in a welcome msg.
Welcome Jane!
Welcome Marc! */

function welcomeMsg() {
  "Welcome Jane!";
  "Welcome Marc!";
}

console.log(welcomeMsg);

/* 
02. Gross Price Function
Implement a calcGrossPrice function.
- The first parameter is the net price as integer number
- The second parameter is the tax rate as float number
- The function should return the gross price

console.log(calcGrossPrice(20, 0.19)); <--- 1.19 ????
// result should be 23.8

console.log(calcGrossPrice(40, 0.16)); <--- 1.16 ????
// result should be 46.4

*/

function calcGrossPrice(a, b, c, d) {
  return a * b + c * d;
}

console.log(calcGrossPrice(20, 1.19, 40, 1.16));
// Result: 70.20

/* 
03. Add Positive Function
Implement a addPositive function.
- The function has two parameters which will always be numbers
- The function should add the two numbers and return the result
- If any of the arguments is a negative number, it should be handled as a positive number (see example code)

// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

*/

function addPositive(a, b) {
  return a + b;
}

console.log(addPositive(2, 3));
// Result: 5

console.log(addPositive(3, -5));
// Result: -2

console.log(addPositive(-1, -8));
// Result: -9
