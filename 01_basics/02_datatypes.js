"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser so this won't run

let name = "Sourav"
let age = 26
let isMale = true
let height = 5.5
let weight = 66
let isLoggedIn = false
let country;
// let country = undefined
let state = null



// Number // integer, float, double
// BigInt // 9007199254740991n
// String // "Hello World"
// Boolean // true, false
// Undefined // undefined
// Null // null  //standalone value
// Symbol // unique value
// Object // {key: value}
// Array // [1, 2, 3]
// Function // function() {}

console.log(typeof name) // string
console.log(typeof "Sourav") // string
console.log(typeof age) // number
console.log(typeof height) // number
console.log(typeof null) // object  // bug in JS
console.log(typeof undefined) // undefined

// Datatype: Datatype is a classification of data which tells the compiler or interpreter how the programmer intends to use the data. Data types are used to define a variable before to use in a program. Data types also determine the type of data that can be stored inside a variable. Data types in JavaScript are dynamic, which means that the same variable can be used to hold different data types. Data types in JavaScript are mainly classified in two categories: Primitive data type and Non-primitive data type. Primitive data types are predefined data types in JavaScript. Non-primitive data types are not defined by the programming language but are created by the programmer. Primitive data types are immutable (data that is not changeable). Non-primitive data types are mutable (data that is changeable). 
// Categorization of Data types is done on the basis of how data is stored in the memory and how you can access this data. 

// Primitive Data Types (Call by Value: means that whenever you copy a value from one variable to another, a new copy of the value is created. If you change the value of the new variable, the original variable remains unchanged.):
// 1. Number: It is used to store numeric values. It can be integer or floating-point.
// 2. String: It is used to store a sequence of characters.
// 3. Boolean: It is used to store true or false.
// 4. Undefined: It is used to store an undefined value.
// 5. Null: It is used to store null value.
// 6. Symbol: It is used to store unique values.
// 7. BigInt: It is used to store big integers.

// Examples of Primitive Data Types:
// let num = 10; // Number
// let name = "John"; // String
// let isMale = true; // Boolean
// let userEmail = undefined; // Undefined
// let userEmail; // Undefined
// let y = null; // Null
// let sym = Symbol("symbol"); // Symbol
// let id = Symbol("123"); // Symbol return type is another data type which is Symbol
// let anotherId = Symbol("123"); // Symbol
// console.log(id === anotherId); // false
// console.log(typeof id); // symbol
// console.log(typeof anotherId); // symbol
// let bigInt = 9007199254740991n; // BigInt n represents BigInt

// Non-Primitive Data Types (Reference Type) (Call by Reference: means that whenever you copy a value from one variable to another, a reference to the value is created. If you change the value of the new variable, the original variable also changes.):
// 1. Object: It is used to store key-value pairs.
// 2. Array: It is used to store a list of elements.
// 3. Function: It is used to store reusable code.

// JavaScript is a dynamically typed language. This means that you don't have to specify the data type of a variable when you declare it. The data type of the variable is determined by the value of the variable. You can change the value of a variable to a different data type. JavaScript is a loosely typed or a dynamically typed language. This means that you don't have to specify the data type of a variable when you declare it. The data type of the variable is determined by the value of the variable. You can change the value of a variable to a different data type.

// Array Example:

const legends = ["Sourav", "Rahul", "Sachin"]
console.log(typeof legends) // object
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function() {}) // function
console.log(typeof new Date()) // object
console.log(typeof new RegExp()) // object

// Object Example:

const person = {
    name: "Sourav",
    age: 26,
    isMale: true
}
console.log(typeof person) // object

// Function Example:

function greet() {
    console.log("Hello World")
}
console.log(typeof greet) // function

const myFunction = function() {
    console.log("Hello World")
} 
console.log("Hello World") // function

// Data type of non primitive type always returns function

// Type of memory allocation:
// Primitive data types are stored in the stack
// Non-primitive data types are stored in the heap

let myYoutubeName = "CodeWithSourav"
let myYoutubeName2 = myYoutubeName
console.log(myYoutubeName, myYoutubeName2) // CodeWithSourav CodeWithSourav
myYoutubeName = "CodeWithSourav2"
console.log(myYoutubeName, myYoutubeName2) // CodeWithSourav2 CodeWithSourav


let myYoutubeName3 = {
    name: "CodeWithSourav"
}
let myYoutubeName4 = myYoutubeName3
console.log(myYoutubeName3, myYoutubeName4) // { name: 'CodeWithSourav' } { name: 'CodeWithSourav' }
myYoutubeName3.name = "CodeWithSourav2"
console.log(myYoutubeName3, myYoutubeName4) // { name: 'CodeWithSourav2' } { name: 'CodeWithSourav2' }

// Primitive data types are stored in the stack, whereas non-primitive data types are stored in the heap. When you assign a primitive data type to a variable, the value is copied from the stack to the new variable. When you assign a non-primitive data type to a variable, the reference is copied from the stack to the new variable. This means that when you change the value of the new variable, the original variable also changes.

let myYoutubeName5 = "souravjaryal"
let anotherName = myYoutubeName5
anotherName = "souravjaryavlogs"

console.log(myYoutubeName5) // souravjaryal
console.log(anotherName) // souravjaryavlogs

let userOne = {
    name: "Sourav",
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.name = "Rahul"

console.log(userOne.name) // Rahul
console.log(userTwo.name) // Rahul