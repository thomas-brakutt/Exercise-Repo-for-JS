/*
03) sumOfCharacters function
Implement a sumOfCharacters function.

 - The function has one parameter, which is an array.
 - Check the type of each array entry. If it's a string then store the count of characters.
 - The function returns the total sum of all characters.

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55 */

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
const resultArr = [];

function sumOfCharacters(array) {
  for (let index = 0; index <= array.length; index++) {
    if (typeof array[index] === "string") {
      // checkt einen Eintrag nach dem anderen ob es ein string ist
      //console.log(typeof array[index]); // <-- checkt den typeof im array die mit true ausgegeben werden
      //console.log(array[index]); // < --
      resultArr.push(array[index]); // wenn true, dass wird der Eintrag mit der .push methode in den resultArr übertragen
      console.log(resultArr);
    }
  }
  return resultArr.join("").length; // .join methode gibt den inhalt zusammengefasst als string("")raus
} // .length methode zählt die "Zeichen"

console.log(sumOfCharacters(arr1));

console.log(sumOfCharacters(arr2));
