# Strings

* String is a sequence of character used to represent text.
* which can we written in the format of **_single_**  , **_double_** quote. 
* To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
* Let's see some examples of strings:

# Creating String
```js
let space = ' '           // an empty space string
let firstName = 'Naveen'
let lastName = 'Rapelly'
let country = 'India'
let city = 'Mumbai'
let language = 'JavaScript'
let job = 'SDE'
let quote = "The saying,'Seeing is Believing' is not correct in 2023."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

```
# String Concatenation

* Connecting two or more strings together is called concatenation.

```js 
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
// Naveen Rapelly
```
* We can concatenate strings in different ways.

# Concatenating Using Addition Operator

* Concatenating using the addition operator is an old way. 
* It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings.

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Naveen';
let lastName = 'Rapelly';
let country = 'India';
let city = 'Mumbai';
let language = 'JavaScript';
let job = 'SDE';
let age = 25;


let fullName = firstName + space + lastName;
let personInfo = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfo);

// Naveen Rapelly. I am 25. I live in India
```

# Long Literal Strings

* A string could be a single character or paragraph or a page. 
* If the string length is too big it does not fit in one line. We can use the backslash character (\\) at the end of each line to indicate that the string will continue on the next line.
**Example:**

```js
const paragraph = " simply dummy text of the printing and typesetting, text.\
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\
I hope you are enjoying too."

console.log(paragraph)
```

# Escape Sequences in Strings

In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")

```js
console.log('I hope everyone is enjoying the JavaScript.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```
Output in console:

```sh
I hope everyone is enjoying the JavaScript.
Do you ?
Days  Topics  Exercises
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2023
```

# Template Literals (Template Strings)

* To create a template strings, we use two back-ticks. 
* We can inject data as expressions inside a template string. 
* To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```
**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

```sh
The sum of 2 and 3 is 5.
```
* Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```
```sh
2 is greater than 3: false
```

# String Methods

* Everything in JavaScript is an object. 
* A string is a primitive data type that means we can not modify it once it is created. 
* The string object has many string methods. 
* There are different string methods that can help us to work with strings.

1. *length*: The string *length* method returns the number of characters in a string included empty space.


**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Naveen'
console.log(firstName.length)  // 6
```


2. *Accessing characters in a string*: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

  ![Accessing sting by index](./string_indexes.png)

  Let us access different characters in 'JavaScript' string.

  ```js
let string = 'JavaScript'
let firstLetter = string[0] 

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]     // v
let lastLetter = string[9]      // t

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9  // t
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: this method changes the string to uppercase letters.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Naveen'

console.log(firstName.toUpperCase())  // NAVEEN

let country = 'India'

console.log(country.toUpperCase())    // INDIA
```

4. *toLowerCase()*: this method changes the string to lowercase letters.


```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Naveen'

console.log(firstName.toLowerCase())  // naveen

let country = 'India'

console.log(country.toLowerCase())   // india
```
5. *substr()*: It takes two arguments, the starting index and number of characters to slice.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'India'
console.log(country.substr(3, 4))   // ia
```

6. *substring()*: It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'India'

console.log(country.substring(0, 3))   // Ind
console.log(country.substring(3, 7))   // ia
console.log(country.substring(3))      // ia
```

7. *split()*: The split method splits a string at a specified place.

```js
let string = 'Learn JavaScript'

console.log(string.split())     // Changes to an array -> ["Learn JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["Learn", "JavaScript"]

let firstName = 'Naveen'

console.log(firstName.split())    // Change to an array - > ["Naveen"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["N", "a", "v", "e", "e", "n"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```
8. *trim()*: Removes trailing space in the beginning or the end of a string.

```js
let string = '   learn JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Naveen '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
```

```sh
   learn JavasCript   
learn JavasCript
  Navene 
Naveen
```

9. *includes()*: It takes a substring argument and it checks if substring argument exists in the string. *includes()* returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

```js
let string = 'JavaScript'

console.log(string.includes('Java'))     // true
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

```
10. *replace()*: takes as a parameter the old substring and a new substring.

```js
Syntax: string.replace(oldsubstring, newsubstring)
```

```js
let string = 'JavaScript'
console.log(string.replace('JavaScript', 'Python')) // Python

let country = 'india'
console.log(country.replace('india', 'Love'))       // Love
```
11. *charAt()*: Takes index and it returns the value at that index

```js
Syntax: string.charAt(index)
```

```js
let string = 'JavaScript'
console.log(string.charAt(0))        // v

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Takes index and it returns char code (ASCII number) of the value at that index

```js
Syntax: string.charCodeAt(index)
```

```js
let string = 'JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 97

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```
13.  *indexOf()*: Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

```js
Syntax: string.indexOf(substring)
```

```js
let string = 'JavaScript'

console.log(string.indexOf('J'))          // 0
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 0
console.log(string.indexOf('Script'))     // -1
console.log(string.indexOf('script'))     // 4
```
14.  *lastIndexOf()*: Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1


```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: it takes many substrings and joins them.

```js
//Syntax
string.concat(substring, substring, substring)
```

```js
let string = 'Love'
console.log(string.concat( " JavaScript")) // Love JavaScript

let country = 'Love'
console.log(country.concat(" India")) // Love India
```
16. *startsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'India'

console.log(country.startsWith('Ind'))   // true
console.log(country.startsWith('ind'))   // false
console.log(country.startsWith('India'))  //  true
```

17. *endsWith*: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

```js
syntax: string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or  a regular expression pattern.

```js
syntax: string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```
19. *match*: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

```js
let txt = 'In 2019, I ran Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: it takes a number as argument and it returns the repeated version of the string.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Checking Data Types and Casting

### Checking Data Types

To check the data type of a certain variable we use the _typeof_ method.

**Example:**

```js
// Different javascript data types
// Let's declare different data types

let firstName = 'Naveen'      // string
let lastName = 'Rapelly'        // string
let country = 'India'         // string
let city = 'Mumbai'           // string
let age = 25                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Naveen')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Changing Data Type (Casting)

- Casting: Converting one data type to another data type. We use _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
#### String to Int

We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc.
We can convert string to number using the following methods:

- parseInt()
- Number()
- Plus sign(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```
#### String to Float

We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc.
We can convert string float to number using the following methods:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```
#### Float to Int

We can convert float numbers to integers.
We use the following method to convert float to int:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```
### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string characters to capital letters using __toUpperCase()__ method
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *JavaScript* from *JavaScript*.
8. Check if the string contains a word __Script__ using __includes()__ method
9. Split the __string__ into an __array__ using __split()__ method
10. Split the string JavaScript at the space using __split()__ method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
12. Change JavaScript to Python using __replace()__ method.
13. What is character at index 4 in 'JavaScript' string? Use __charAt()__ method.
14. What is the character code of J in 'JavaScript' string using __charCodeAt()__
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in Learn JavaScript
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in JavaScript.
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '.
21. Use __startsWith()__ method with the string *JavaScript* and make the result true
22. Use __endsWith()__ method with the string *JavaScript* and make the result true
23. Use __match()__ method to find all the __a__’s in JavaScript
24. Use __concat()__ and merge 'love' and 'JavaScript' to a single string, 'love JavaScript'
25. Use __repeat()__ method to print JavaScript 2 times

