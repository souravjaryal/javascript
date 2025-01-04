// fullName="Sourav Jaryal";
// console.log(fullName);

// Variables
// x = 2;

// Global Scope Variables 
// Avoid using Var and use let instead and const when value doesn't change
var a = 21;
var b = "Sourav Jaryal"
var c = null
var d = undefined

const author = "Sourav Jaryal"

// let author = "6" // this will throws an error because constant can't be changed and not allowed
// var author = "6" // this will throws an error because constant can't be changed and not allowed
// author = "6" // we also can't do this because constant can't be changed and not allowed
console.log(b)
console.log(author)

// Global Scope Variable
// {
//     var b = "Hey!"
//     console.log(b)
// }

// Block Scope Variable
// {
//     let b = "Hey!"
//     console.log(b)
// }

// console.log(b)



// let fullName = "Sourav Jaryal";
// let age = 24;
// let totalPrice = 100;  


// console.log(fullName);


// We can write this in let

// let a;
// a = 6;

// console.log(a);

// but we can't write like this
// const a = 10;
// a = 20 we can't write this
// const a;  // we can't write this because we need to initialize the value to const

// console.log(a);


// Example of let, var and const

const accountId = 112;
let accountEmail = "souravjaryal@gmail.com";
var accountPassword = "123456";
accountCity = "Dharamshala";
let accountState

// Prefer not to use var and use let instead because of issue in global scope and functional scope and var is global scope and let is block scope

// accountId = 12; // we can't change the value of const
accountEmail = "sourav@gmail.com";
accountPassword = "1234567";
accountCity = "Dharamshala, Himachal Pradesh";


console.log(accountId);
// console.log([accountEmail, accountPassword, accountCity]);
console.table([accountEmail, accountPassword, accountCity, accountState]); // we can't see the accountState because it is not initialized



