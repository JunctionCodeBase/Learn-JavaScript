// Equal to Operator

const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

// == evaluates to true if the operands are equal.


// Not Equal to Operator


const a = 3, b = 'hello';

// not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // true


// Strict Equal to Operator

const a = 2;

// strict equal operator
console.log(a === 2); // true
console.log(a === '2'); // false

// Strict Not Equal to Operator

const a = 2, b = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true


// Greater than Operator

const a = 3;

// greater than operator
console.log(a > 2); // true

// Greater than or Equal to Operator

const a = 3;

// greater than or equal operator
console.log(a >= 3); //true

// Less than Operator

const a = 3, b = 2;

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true


// Less than or Equal to Operator

const a = 2;

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true


// Logical AND Operator

const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

// Logical OR Operator

const a = true, b = false, c = 4;


// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c > 2) || (c < 2)); // true

// Logical NOT Operator

const a = true, b = false;

// logical NOT
console.log(!a); // false
console.log(!b); // true
