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
  // check, dass nur Buchstaben ("string") verwendet werden
  if (typeof word != "string" || typeof letter != "string") {
    return "nur Buchstaben erlaubt!";
  }

  word = word.toLowerCase(); // Parameter case insensitive machen
  letter = letter.toLowerCase(); // Parameter case insensitive machen

  if (letter.length > 1) {
    // nur ein Buchstabe erlaubt
    return "nur ein Buchstabe erlaubt!";
  }
  let count = 0; // Variable erstellt die das Ergebniss sammelt (startet leer (0))
  // console.log(word[0]); // <- Zugriff auf "word" Parameter, [] = welche Position
  for (let index = 0; index < word.length; index++) {
    // console.log(word[index], letter); // check des Durchlaufs der Schleife
    if (word[index] === letter) {
      // wenn Iteration der einzelnen Buchstaben vom Word-Parameter = true, dann werden sie mit in Count-Variablen gezählt (count += 1;)
      count += 1; // <- = kurzschreibweise für count = count +1
    }
  }
  return count; // gezählten Übereinstimmungen werden ausgegeben und die Schleife beendet
}

console.log(charCount("hello", "l")); // result 2
console.log(charCount("mama", "m")); // result 2
console.log(charCount("Resümee", "e")); // result 3
