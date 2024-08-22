/* 06) - using loops

01) oddNumbers function
- The function has two parameters, both are numbers.
- Iterate over all numbers between first number and the second number.
- Store all oddNumbers in string, seperated by a comma and return the string.
- Allowed are only positive numbers, add a check.

 console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
-----------------------------------------------------------------------------------
*/

function oddNumbers(a, b) {
  //check, dass nur positive Zahlen möglich sind
  if (a < 0 || b < 0) {
    return "nur positive Zahlen";
  }
  // Check, dass der Startwert kleiner als der Endwert ist
  if (a > b) {
    return "Startwert (a) muss kleiner sein als der Endwert (b)!";
  }
  const oddNumbersStore = [];
  for (let index = a; index <= b; index++) {
    if (index % 2 !== 0) {
      //console.log(index);  <- "Zwischentest" was bei Index herauskommt / ausgegeben wird
      oddNumbersStore.push([index]); // mit .push methode wird index mit den ungereaden Zahlen in das Array geschrieben
    }
  }
  return oddNumbersStore.join(","); // mit .join methode werden alle Werte zusammengefasst als (",") string mit Komma ausgegeben
}

console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));
