// Array is collection of data types
// array allow to store duplicate element and different data type.


// Creating Array:

let arr = [10, 20, 30, 40, 50];
console.log(arr)
console.log(arr.length);

// Creating array in different form.

let array = new Array();
console.log(array);

// creating array with values.

let itemValue = [1, 2, 3, 4, 5, 6];
console.log("Item Value : ", itemValue);
console.log("item Value : ", itemValue.length);


//  array can have different data type:
const person = [
    'navin', 27,
    true
]
console.log(person);

// Accessing array items using index

let accessPersonDetails = person[0];
console.log(accessPersonDetails);

// Modifying array element

person[0] = "javascript";
console.log(person);

// looping over an array

let cities = ["mumbai", "delhi", "hyd", "kolkata", "orrisa"];

for (let i = 0; i < cities.length; i++) {
    console.log(` index value ${i} and ${cities[i]}`)
}

// for (item of cities) {
//     console.log(item);
// }

// Methods to manipulate array

// 1. Push () This Method is used to add the item at end of the array.

cities.push('bangalore');
console.log(cities);

// 2. pop() This Method is used to delete the item at the end of the array.

cities.pop();
console.log(cities);

// 3. shift() This method is used to delete starting of an array item.

cities.shift();
console.log(cities);

// 4. unshift(); This method is used to insert at starting of array item.

cities.unshift("bangalore");
console.log(cities);

// 5. slice() This method is used to cut the item in a range.
// it take two arguments (starting index and ending index).
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()); // it will copy all item.
console.log(numbers.slice(0)); // it will return all the item.
console.log(numbers.slice(2, 4)); // 3,4 output it will not include the ending index value.

// splice() -- It take three parameter starting and number of item need to removed and number of item to be added.

let rm = numbers.splice(0, 1);
console.log(rm); // removed the first item.

console.log(numbers.splice(3, 3, 7, 8, 9));

// Join() This method is used to join in the array and return as a string.
console.log(typeof numbers.join(","))

// toString is used to convert array into the string.

console.log(numbers.toString());

// include method is used to check the item is exists in array or not.

console.log(numbers.includes(2)); // true


