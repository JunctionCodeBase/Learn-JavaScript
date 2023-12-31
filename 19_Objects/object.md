# Object
* In JavaScript everything is an object. 
* object is a key value pair.
* to create an object we will use two curly brackets.

# Creating an empty object
* An empty object
```js
const person = {}
```
# Creating an objecting with values
* person object has firstName, lastName, age, location, skills and isMarried properties
```js
const person = {
  firstName: 'devjunction',
  lastName: 'point',
  age: 250,
  country: 'India',
  city: 'mumbai',
  skills: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  isMarried: false
}
console.log(person)
```

# Getting values from an object

* We can access values of object using two methods:
* using . followed by key name if the key-name is a one word
* using square bracket and a quote

```js
const person = {
  firstName: 'devjunction',
  lastName: 'point',
  age: 250,
  country: 'India',
  city: 'mumbai',
  skills: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  isMarried: false
 
}
// accessing using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

// accessing using [] brackets with key name 
console.log(person['city'])
console.log(person['country'])
```

# Creating object methods

  ```js
  const person = {
  firstName: 'devjunction',
  lastName: 'point',
  age: 250,
  country: 'India',
  city: 'mumbai',
  skills: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  isMarried: false,
   // function inside the object is called object method
    //   this keyword refers to the object itself
  getFullName : function(){
    return `${this.firstName} ${this.lastName}`
  }
 
}
console.log(person.getFullName())
  ```
# Setting new key for an object

* An object is a mutable data structure and we can modify the content of an object after it gets created.

# Object Methods
* There are different methods to manipulate an object
## Object.assign: To copy an object without modifying the original object

```js
const copyPersonData = Object.assign({},person)
console.log(copyPersonData)
```

## Object.keys: To get the keys or properties of an object as an array

```js
const keys = Object.keys(copyObjectData);
console.log(keys);
```

## Object.values:To get values of an object as an array
```js
// 3. Object.values will give the value from the object.
const val = Object.values(copyObjectData);
console.log(val);
```

## Object.entries:To get the keys and values in an array

```js
  // 4. Object.entires will get the keys and values in an array
    const ent = Object.entries(copyObjectData);
    console.log(ent)
```

## hasOwnProperty: To check if a specific key or property exist in an object

```js
   // 5. hasOwnProperty: To check if a specific key or property exist in an object
     console.log(copyObjectData.hasOwnProperty('city'))
    console.log(copyObjectData.hasOwnProperty('cityx'))

```