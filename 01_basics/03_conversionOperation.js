let score = "33";
//let score = "33ff"; // If we use this line, we will get NaN as output
//let score = true; // If we use this line, we will get 1 as output
//let score = false; // If we use this line, we will get 0 as output
//let score = null; // If we use this line, we will get 0 as output
//let score = undefined; // If we use this line, we will get NaN as output
//let score = ""; // If we use this line, we will get 0 as output
//let score = " "; // If we use this line, we will get 0 as output


// const {score} =  req.body // In this line we don't know wheter score is a string or a number

console.log(typeof score); // number;
console.log(typeof (score)); // number;

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number;

console.log(valueInNumber); // NaN

//let isLoggedIn = 1; //true
// let isLoggedIn = 0; //false
//let isLoggedIn = true; //true
// let isLoggedIn = false; //false
// let isLoggedIn = null; //false
// let isLoggedIn = undefined; //false
// let isLoggedIn = " "; //true
// let isLoggedIn = ""; //false
let isLoggedIn = "sourav"; //false

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // This will print true for 1 and false for 0

let someNumber = 33;
let stringNumber = String(someNumber);
// let stringNumber = someNumber.toString();
console.log(typeof stringNumber); // string
console.log(stringNumber); // 33
