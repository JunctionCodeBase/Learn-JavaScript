// Arithmetic Operators

// let numOne = 4
// let numTwo = 3
// let sum = numOne + numTwo
// let diff = numOne - numTwo
// let mult = numOne * numTwo
// let div = numOne / numTwo
// let remainder = numOne % numTwo
// let powerOf = numOne ** numTwo

// console.log(sum, diff, mult, div, remainder, powerOf)


// Comparison Operators
/*
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

*/


//Logical Operators

// && ampersand operator example
/*
const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

// Negotiation examples

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

*/

// Increment Operator

// Pre-increment

// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1

// Post-increment

// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1

// Decrement Operator

// Pre-decrement
// let count = 0
// console.log(--count) // -1
// console.log(count)  // -1

//Post-decrement
// let count = 0
// console.log(count--) // 0
// console.log(count)   // -1

// Ternary Operators

// let isRaining = true

// isRaining = true ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')
// isRaining = false ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')


// Excerise Solution:

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = 'naveen';
// let lastName = 'rapelly';
// let country = 'india';
// let city = 'mumbai';
// let age = 25;
// let year = 2023;
// let isMarried = false;

// console.log(typeof (firstName));
// console.log(typeof (lastName));
// console.log(typeof (country));
// console.log(typeof (city));
// console.log(typeof (age));
// console.log(typeof (year));
// console.log(typeof (isMarried))

// 2. Check if type of '10' is equal to 10

// console.log('10' == 10); // true

// 3. Check if parseInt('9.8') is equal to 10

// console.log(parseInt('9.8') == 10) // false

// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

let isLightOn = true
let isRaining = false
let isHungry = false

console.log(isRaining == isRaining) // true

let str1 = ''
let str2 = ''
console.log(str1 == str2) // true




