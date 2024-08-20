/* 06) - using loops

01) oddNumbers function
 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check.

 console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
*/

function oddNumbers(a, b) {
  //check, dass nur positive Zahlen möglich sind
  if ((a < 0, b < 0)) {
    return "keine positive Zahl";
  }

  /* Sicherstellen, dass der Startwert kleiner oder gleich dem Endwert ist
    if (start > end) {
      return "Der Startwert sollte kleiner oder gleich dem Endwert sein.";
  } 
  */

  for (let oddNumbers = a; oddNumbers <= b; oddNumbers++) {
    if (oddNumbers % 2 !== 0) {
      console.log(oddNumbers);
    }
  }
}

console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));

/* -----------------------------------------------------------------------------------

javascript
function oddNumbers(start, end) {
    // Überprüfen, ob beide Zahlen positiv sind
    if (start < 1 || end < 1) {
        return "Bitte geben Sie nur positive Zahlen ein.";
    }

    // Sicherstellen, dass der Startwert kleiner oder gleich dem Endwert ist
    if (start > end) {
        return "Der Startwert sollte kleiner oder gleich dem Endwert sein.";
    }

    let result = [];

    // Iteration über die Zahlen zwischen start und end
    for (let i = start; i <= end; i++) {
        // Überprüfen, ob die Zahl ungerade ist
        if (i % 2 !== 0) {
            result.push(i); 
        }
    }

    // Rückgabe der ungeraden Zahlen als kommagetrennte Zeichenkette
    return result.join(',');
}

// Testaufrufe
console.log(oddNumbers(0, 4)); // Ergebnis sollte sein: "Bitte geben Sie nur positive Zahlen ein."
console.log(oddNumbers(10, 33)); // Ergebnis sollte sein: "11,13,15,17,19,21,23,25,27,29,31,33"
console.log(oddNumbers(9, 12)); // Ergebnis sollte sein: "9,11"

 */
