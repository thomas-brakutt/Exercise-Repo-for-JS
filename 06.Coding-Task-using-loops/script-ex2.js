/* 02) charCount function

Implement a charCount function.

 - The function has a first parameter for a word which is a string.
 - The function has a second parameter which contains the character to search for which is a string.
 - Check if the second parameter consists of only one character, if not, quit the function.
 - The function returns the number of times the character from the second parameter is present in the word.
 - The function should be case insensitive.

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3  
-----------------------------------------------------------------------*/

function charCount(word, letter) {
  if (typeof (word + letter) !== "string") {
    // nur "String" erlaubt - funktioniert nicht
    return "nur Buchstaben erlaubt!";
  }
  word = word.toLowerCase(); // function case insensitive machen
  letter = letter.toLowerCase(); // function case insensitive machen
  if (letter.length > 1) {
    // nur ein Buchstabe erlaubt
    return "nur ein Buchstabe erlaubt!";
  }
  for (let index = 0; index < word.length; index++) {
    return word + letter;
  }
}

console.log(charCount("2323", "2"));

console.log(charCount("hello", "l"));
console.log(charCount("mama", "m"));
console.log(charCount("Resümee", "e"));
