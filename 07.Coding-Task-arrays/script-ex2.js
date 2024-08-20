/* 
01) removeItem function

 - The first parameter is an array.
 - The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 - Remove the item and return an array.
 - Ensure that the original array was not mutated.

// TODO: Implement the removeItem function

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"] 
------------------------------------------------------------------------------------------*/

const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

function removeItem(array, number) {
  const copyArray = structuredClone(array); // ursprünglich: const copyArray = [...array]; ???
  // Erstelle eine Kopie des Arrays, um die Originaldaten nicht zu mutieren

  copyArray.splice(number - 1, 1);
  // Entferne das Element am angegebenen Index (non-zero-based)

  return copyArray;
  // Gib das neue Array zurück
}
console.log(removeItem(animals, 1)); // result: ["Cat", "Lion"]
console.log(animals); // result: ["Dog", "Cat", "Lion"]

console.log(removeItem(fruits, 3)); // result: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits); // result: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/* In dieser Funktion wird ein neues Array erstellt, das eine Kopie des ursprünglichen Arrays ist. 
Dann wird das Element am angegebenen (non-zero-based) Index(number) entfernt, und das neue Array wird 
zurückgegeben, während das Original unverändert bleibt. */
