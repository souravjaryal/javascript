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

// Non-Primitive Data Types (Reference Type) (Call by Reference: means that whenever you copy a value from one variable to another, a reference to the value is created. If you change the value of the new variable, the original variable also changes.):
// 1. Object: It is used to store key-value pairs.
// 2. Array: It is used to store a list of elements.
// 3. Function: It is used to store reusable code.

// JavaScript is a dynamically typed language. This means that you don't have to specify the data type of a variable when you declare it. The data type of the variable is determined by the value of the variable. You can change the value of a variable to a different data type. JavaScript is a loosely typed or a dynamically typed language. This means that you don't have to specify the data type of a variable when you declare it. The data type of the variable is determined by the value of the variable. You can change the value of a variable to a different data type.
