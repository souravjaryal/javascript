// Dates
// Date is an object in js

// Month is 0 based index
let myDate = new Date()
console.log(myDate); // 2025-01-16T19:21:04.311Z
console.log(myDate.toString()); // Fri Jan 17 2025 00:51:04 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2025-01-16T19:21:04.311Z
console.log(myDate.toJSON()); // 2025-01-16T19:21:04.311Z
console.log(myDate.toDateString()); // Fri Jan 17 2025
console.log(myDate.toTimeString()); // 00:51:04 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); // 17/01/2025
console.log(myDate.toLocaleString()); // 17/01/2025, 00:51:04
console.log(typeof myDate);

// To Create specific date
let myCreatedDate = new Date(2025, 0, 18)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2025, 0, 18, 21, 9)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2025-01-12")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-01-12")
console.log(myCreatedDate3.getFullYear());

let myCreatedDate4 = new Date("01-12-2025")
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

`${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}` // 17/0/2025
`${newDate.getDate()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}` // 17 and the time is 0:51

// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate1 = new Date();
console.log(myDate1) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate1.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate1.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate1.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate1.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate1.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate1.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate1.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate1.toJSON()) //Output : 2023-10-09T14:40:58.495Z


newDate12.toLocaleString('default', { 
    month: 'long', // October
    day : 'numeric', // 9
    weekday: 'long', // Monday
})