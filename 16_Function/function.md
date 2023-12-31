# Function
# What is a function? 

* A function is used to perform a specific task.
* A function is declared by a function key word followed by a name, followed by parentheses ().
* A parentheses can take a parameter. If a function take a parameter it will be called with argument. 
* A function can also take a default parameter. To store a data to a function, a function has to return certain data types.

* A function can be declared or created in couple of ways:
    * Declaration function
    * Expression function
    * Anonymous function
    * Arrow function

# Function Declaration

```js
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
```


# Function without a parameter and return
* Function can be declared without a parameter.
Example:
```js
// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 
```
# Function returning value
* Function can also return values, if a function does not return values the value of the function is undefined.
```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

# Function with a parameter
* In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

syntax:

```js
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed


```

Example:
```js
function square(number) {
  return number * number
}

console.log(square(10))
```
# Function with two parameters

syntax:

```js
// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed

```

```js
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))

```

# Function with many parameters

syntax:

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
```

```js
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));
```

# Function with unlimited number of parameters

* Sometimes we do not know how many arguments the user going to pass Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

## Unlimited number of parameters in regular function

* A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

```js
// Let us access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

Example:

```js
// function declaration
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

# Anonymous Function
* Anonymous function or without name

```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```

# Expression Function
* Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. 

```js

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```

# Self Invoking Functions
* Self invoking functions are anonymous functions which do not need to be called to return a value.
* Anonymous functions are often used as arguments to other functions

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

# Arrow Function
* Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
* Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['india', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// "INDIA", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('naveen', 'rapelly'))

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('naveen', 'rapelly'))
```

# Function with default parameters
* Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

Syntax:

```js
// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

```js
function generateFullName(firstName = 'naveen', lastName = 'ram') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```
* Let us see how we write the above functions with arrow functions
```js
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

```js
const greetings = (name = 'navin') => {
  let message = name + ', learn js'
  return message
}

console.log(greetings())
console.log(greetings('navin'))
```