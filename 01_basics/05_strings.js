const name = 'Sourav';
const repoCount = 200;
const isPublic = true;

console.log(name + repoCount + " " + "Value" + isPublic); // This is not a good way to concatenate strings
console.log(name + ' has ' + repoCount + ' public repositories.');
console.log(`${name} has ${repoCount} public repositories.`); // This is the best way to concatenate strings we use backticks and ${} (create placeholders) to concatenate strings and this is called template literals or string interpolation.
console.log(`The sum of 2 and 3 is ${2 + 3}.`); // We can also perform operations inside the placeholders.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // We can also use multiple placeholders in a single string. This is the modern way to concatenate strings. We can add methods, functions, and expressions inside the placeholders. 

//Another way to concatenate strings is by using the concat() method.
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Hello World
console.log(str1.concat(' ', str2).concat('!')); // Hello World!

//Another way to declare strings is by using the String() constructor.
const str = new String('Hello World'); // This is not a good way to declare strings. We should use the string literals. in this case, we are creating a string object. New keyword is used to create an object.
console.log(str); // Hello World
console.log(str.length); // 11
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str[0]); // H
console.log(str.charAt(0)); // H
console.log(str.charAt(6)); // W
console.log(str.charAt(11)); // ''
console.log(str.charAt(12)); // ''
console.log(str.charAt(-1)); // ''
console.log(str.charAt(-2)); // ''
console.log(str.charAt(100)); // ''

//We can also use the charCodeAt() method to get the Unicode value of a character at a specific index.
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(6)); // 87
console.log(str.charCodeAt(11)); // NaN
console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(100)); // NaN

console.log(str.indexOf('H')); // 0
console.log(str.indexOf('L')); // 2

const newString = str.substring(0, 5); // Hello
console.log(newString); // Hello
console.log(str.substring(6)); // World
console.log(str.substring(0, 11)); // Hello World

const anotherString = str.slice(0, 5); // Hello
console.log(anotherString); // Hello

const anotherString1 = str.slice(-8, 2); // ''
console.log(anotherString1); // ''

console.log(str.slice(-1, 1)); // ''
console.log();


console.log(str.__proto__); // String

// Declaring Strings:
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`; // Template literals
console.log(templateLiteral); // Output: Hello, World!

// String Characteristics:
// Strings are immutable (cannot be changed once created).
// They can be manipulated using various methods.

let text = "JavaScript";
console.log(text.length); // Output: 10

let text1 = "Hello World";
console.log(text.toUpperCase()); // Output: HELLO WORLD
console.log(text.toLowerCase()); // Output: hello world

let text2 = "   JavaScript   ";
console.log(text.trim()); // Output: JavaScript


let text3 = "JavaScript";
console.log(text.charAt(4)); // Output: S

let text4 = "JavaScript is great, and JavaScript is versatile.";
console.log(text.indexOf("JavaScript")); // Output: 0
console.log(text.lastIndexOf("JavaScript")); // Output: 26

let text5 = "Learn JavaScript";
console.log(text.includes("JavaScript")); // Output: true

let text6 = "JavaScript is fun!";
console.log(text.startsWith("JavaScript")); // Output: true
console.log(text.endsWith("fun!")); // Output: true


let text7 = "JavaScript";
console.log(text.substring(0, 4)); // Output: Java


let text8 = "JavaScript";
console.log(text.slice(0, 4)); // Output: Java
console.log(text.slice(0)); // Output: JavaScript
console.log(text.slice(4)); // Output: Script
console.log(text.slice(-6));  // Output: Script
console.log(text.slice(-4));  // Output: Script
console.log(text.slice(-5));  // Output: cript
console.log(text.slice(-7));  // Output: JavaScript
console.log(text.slice(-8));  // Output: JavaScript


let text9 = "HTML, CSS, JavaScript";
console.log(text.split(", ")); // Output: ["HTML", "CSS", "JavaScript"]


let text10 = "JavaScript is great. JavaScript is versatile.";
console.log(text.replace("JavaScript", "JS")); // Replaces first occurrence
console.log(text.replaceAll("JavaScript", "JS")); // Replaces all occurrences


let text11 = "Hello ";
console.log(text.repeat(3)); // Output: Hello Hello Hello

let firstName = "John";
let lastName = "Doe";
console.log(firstName.concat(" ", lastName)); // Output: John Doe

let text12 = "5";
console.log(text.padStart(3, "0")); // Output: 005
console.log(text.padEnd(3, "0"));   // Output: 500

let text13 = "The rain in Spain falls mainly on the plain.";
console.log(text.match(/ain/g)); // Output: ["ain", "ain", "ain"]

let text14 = "Learn JavaScript";
console.log(text.search("JavaScript")); // Output: 6

let name15 = "John";
let age = 30;
console.log(`My name is ${name}, and I am ${age} years old.`);
// Output: My name is John, and I am 30 years old.

//Examples Combining Methods:
// Reverse a String:
let text16 = "JavaScript";
let reversed = text.split("").reverse().join("");
console.log(reversed); // Output: tpircSavaJ

// Check for Palindrome:
let text17 = "madam";
let reversed1 = text.split("").reverse().join("");
console.log(text17 === reversed1); // Output: true

// Validate Palindrome:
function isPalindrome(str) {
    let reversed3 = str.split("").reverse().join("");
    return str === reversed3;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// validate Email:
let email = "";
let isValid = email.includes("@") && email.includes(".");
console.log(isValid); // Output: true



// Count the Number of Vowels:
let text18 = "JavaScript";
let count1 = 0;
let vowels = "aeiou";
for (let char of text.toLowerCase()) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(count1); // Output: 3

//Count Word Occurrences:
let text19 = "JavaScript is great. JavaScript is versatile.";
let word = "JavaScript";
let count = text.split(word).length - 1;
console.log(count); // Output: 2

// Remove Duplicates:
let text20 = "JavaScript";
let unique = "";
for (let char of text) {
  if (!unique.includes(char)) {
    unique += char;
  }
}
console.log(unique); // Output: JavaScipt






