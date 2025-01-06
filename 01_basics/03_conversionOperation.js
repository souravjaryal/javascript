//let score = "40"; // If we use this line, we will get string as output
//let score = 42; // If we use this line, we will get number as output
let score = 48.36; // If we use this line, we will get float as output
//let score = "26sr"; // If we use this line, we will get NaN as output
//let score = true; // If we use this line, we will get 1 as output
//let score = false; // If we use this line, we will get 0 as output
//let score = null; // If we use this line, we will get 0 as output
//let score = undefined; // If we use this line, we will get NaN as output
//let score = ""; // If we use this line, we will get 0 as output
//let score = " "; // If we use this line, we will get 0 as output


// const {score} =  req.body // In this line we don't know whether score is a string or a number

console.log(typeof score); // number;
console.log(typeof (score)); // number;

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number;

console.log(valueInNumber);

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



// Operations
let value= 6
let negativValue = -value;
console.log(negativValue); // -6

let string1 = "Hello";
let string2 = " World";
let string3 = string1 + string2;
console.log(string3); // HelloWorld

console.log("1" + 1); // 11
console.log(1 + "1"); // 11
console.log(1 + 1); // 2
console.log("1" + "1"); // 11
console.log(1 + 1 + "1"); // 21
console.log("1" + 1 + 1); // 111

console.log(1 + 2 + "3" + 4 + 5); // 3345

console.log(true + true); // 2
console.log(true); // true
console.log(+true); // 1
console.log(+false); // 0
console.log(true + false); // 1
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(true + "1"); // true1
console.log(false + "1"); // false1
console.log(true + "true"); // truetrue
console.log(false + "false"); // falsefalse
console.log(true + "false"); // truefalse
console.log(false + "true"); // falsetrue
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 5 + 5;

let gameCounter = 100;
gameCounter += 10;
console.log(gameCounter); // 110

let gameCounter1 = 100;
gameCounter1 -= 10;
console.log(gameCounter1); // 90

let gameCounter2 = 100;
++gameCounter2;
console.log(gameCounter2); // 101

let gameCounter3 = 100;
gameCounter3++;
console.log(gameCounter3); // 101


// Postfix and prefix increment and decrement operators

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"




let value0 = 5;
let value00 = 10;
let isEqual = value0 == value00;
console.log(isEqual); // false

let value000 = 5;
let value0000 = 5;
let isEqual1 = value000 == value0000;
console.log(isEqual1); // true

let value00000 = 5;
let value000000 = "5";
let isEqual2 = value00000 == value000000;
console.log(isEqual2); // true



let value1 = 5;
let value2 = 10;
let sum = value1 + value2;
console.log(sum); // 15

let value3 = 5;
let value4 = 10;
let sub = value4 - value3;
console.log(sub); // 5

let value5 = 5;
let value6 = 10;
let mul = value5 * value6;
console.log(mul); // 50

let value7 = 5;
let value8 = 10;
let div = value8 / value7;
console.log(div); // 2

let value9 = 5;
let value10 = 10;
let mod = value10 % value9;
console.log(mod); // 0

let value11 = 5;
let value12 = 10;
let pow = value11 ** value12;
console.log(pow); // 9765625

let value13 = 5;
let value14 = 10;
let inc = value13++;
console.log(inc); // 5

let value15 = 5;
let value16 = 10;
let dec = value15--;
console.log(dec); // 5

let value17 = 5;
let value18 = 10;
let inc1 = ++value17;
console.log(inc1); // 6

let value19 = 5;
let value20 = 10;
let dec1 = --value19;
console.log(dec1); // 4

let value21 = 5;
let value22 = 10;
let add = value21 += value22;
console.log(add); // 15

let value23 = 5;
let value24 = 10;
let sub1 = value23 -= value24;
console.log(sub1); // -5

let value25 = 5;
let value26 = 10;
let mul1 = value25 *= value26;
console.log(mul1); // 50

let value27 = 5;
let value28 = 10;
let div1 = value27 /= value28;
console.log(div1); // 0.5

let value29 = 5;
let value30 = 10;
let mod1 = value29 %= value30;
console.log(mod1); // 5

let value31 = 5;
let value32 = 10;
let pow1 = value31 **= value32;
console.log(pow1); // 9765625

let value33 = 5;
let value34 = 10;
let and = value33 & value34;
console.log(and); // 0

let value35 = 5;
let value36 = 10;
let or = value35 | value36;
console.log(or); // 15

let value37 = 5;
let value38 = 10;
let xor = value37 ^ value38;
console.log(xor); // 15

let value39 = 5;
let value40 = 10;
let leftShift = value39 << value40;
console.log(leftShift); // 5120

let value41 = 5;
let value42 = 10;
let rightShift = value41 >> value42;
console.log(rightShift); // 0

let value43 = 5;
let value44 = 10;
let rightShift1 = value43 >>> value44;
console.log(rightShift1); // 0

let value45 = 5;
let value46 = 10;
let not = ~value45;
console.log(not); // -6

let value47 = 5;
let value48 = 10;
let not1 = !value47;
console.log(not1); // false

let value49 = 5;
let value50 = 10;
let and1 = value49 && value50;
console.log(and1); // 10

let value51 = 5;
let value52 = 10;
let or1 = value51 || value52;
console.log(or1); // 5

let value53 = 5;
let value54 = 10;
let or2 = value53 || value54;
console.log(or2); // 5

