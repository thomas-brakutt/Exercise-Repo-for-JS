/* 05. If und switch statements 

01) Spot the errors and fix them
- Copy the following complete code block to your script.js file and try to spot and fix the errors.


const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20 */

const size = 25;
// let result;  <- gehört dort nicht hin (switch-Statement)

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

/* 
02) oddEven function
Implement a oddEven function.

 - The function has one parameter which is a number
 - If the number is an even number, the function returns the string even
 - If the number is an od number, the function returns the string odd

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even */

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

/*In dieser Funktion wird der Modulo-Operator `%` verwendet, um zu überprüfen, ob die Zahl gerade oder ungerade ist. Wenn der Rest der Division durch 2 gleich 0 ist, handelt es sich um eine gerade Zahl, andernfalls um eine ungerade Zahl. */

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

/* 03) oldYoung function
Implement a oldYoung function.

 - The function has one parameter which is a number
 - If the number is less than 16, return "children"
 - If the number is less than 50, return "young person"
 - Otherwise return "elder person"
 - If the number is not a number or a negative number a string invalid parameter


console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person */

function oldYoung(a) {
  if (a < 16) {
    console.log("children");
  } else if (a < 50) {
    console.log("young person");
  } else if (a === " ") {
    console.log("invalid parameter");
  } else if (a < 0) {
    console.log("invalid parameter");
  } else {
    console.log("invalid parameter");
  }
}

console.log(oldYoung(27));

console.log(oldYoung(6));

console.log(oldYoung(-1));

console.log(oldYoung(86));

// mit Hilfe aus dem Internet

function oldYoung(a) {
  // Überprüfen, ob die Eingabe eine Zahl ist und nicht negativ
  if (typeof a !== "number" || a < 0) {
    return "invalid parameter";
  }
  // Überprüfen der Alterskategorie
  if (a < 16) {
    return "children";
  } else if (a < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

// Abrfrage

console.log(oldYoung(27));

console.log(oldYoung(6));

console.log(oldYoung(-1));

console.log(oldYoung(86));
