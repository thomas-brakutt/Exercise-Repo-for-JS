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

function sumOfCharacters(array) {
  count = 0;
  for (let index = 0; index <= array.length; index++) {
    return array;
  }
}

console.log(sumOfCharacters(arr1));

console.log(sumOfCharacters(arr2));
