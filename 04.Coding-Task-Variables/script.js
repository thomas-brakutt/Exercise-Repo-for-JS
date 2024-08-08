/*04) Coding-Task: Variables

01) Spot the errors and fix them
 - Copy the following complete code block to your script.js file and try to spot and fix the errors.

const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true */

const userName = "Brad";
//userName = "Brad";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) >= 4); // Result: true

/*
02) isString function
Implement a isString function.

 The function has one parameter which could be any kind of data type
 The function is written as a function expression
 The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false
// TODO: Implement the isString function

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true */

let isString = function (a) {
  return typeof a === "string";
};

console.log(isString("Hello")); // Result: true

console.log(isString(3)); // Result: false

console.log(isString(undefined)); // Result: false

console.log(isString("")); //Result: true

console.log(isString("John" + "Doe")); //Result: true
