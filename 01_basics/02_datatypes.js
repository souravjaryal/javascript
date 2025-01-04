"use strict"; // treat all JS code as new version

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
