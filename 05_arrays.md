# Arrays

## Array creation and manipulation

Arrays store multiple values in a single variable. Here's an example of creating and manipulating an array:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");  // add element to the end
fruits.pop();  // remove element from the end
fruits[0] = "pear";  // update an element
```

## Accessing array elements

You can access array elements using their index. Example:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);  // Output: "banana"
```

## Array methods

JavaScript provides a variety of built-in methods to manipulate and work with arrays. These methods offer convenient ways to add, remove, or transform array elements. Here are some commonly used array methods:

- `push()` : Adds one or more elements to the end of an array.
  
```javascript
let fruits = ["apple", "banana"];
fruits.push("orange", "kiwi");
console.log(fruits);  // Output: ["apple", "banana", "orange", "kiwi"]
```

- `pop()` : Removes the last element from an array and returns it.
  
```javascript
  let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(removedFruit);  // Output: "orange"
console.log(fruits);  // Output: ["apple", "banana"]
```

- `shift()`: Removes the first element from an array and returns that element.
  
```javascript
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.shift();
console.log(removedFruit);  // Output: "apple"
console.log(fruits);  // Output: ["banana", "orange"]
```

- `unshift()`: Adds one or more elements to the beginning of an array.

```javascript
let fruits = ["banana", "orange"];
fruits.unshift("apple", "kiwi");
console.log(fruits);  // Output: ["apple", "kiwi", "banana", "orange"]
```

- `splice()`: Changes the contents of an array by removing, replacing, or adding elements.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "kiwi");
console.log(fruits);  // Output: ["apple", "kiwi", "orange"]
```

- `slice()`: Extracts a portion of an array into a new array.

```javascript
let fruits = ["apple", "banana", "orange", "kiwi"];
let citrus = fruits.slice(1, 3);
console.log(citrus);  // Output: ["banana", "orange"]
```

## Iterating Arrays

Iterating over arrays allows you to perform operations on each element or access specific elements based on certain conditions. Here are some common approaches to iterate arrays:

- Using a `for` loop:

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

- `forEach()` : Executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```

- `map()` : Creates a new array by applying a function to each element of an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(number) {
  return number * number;
});
console.log(squares);
```

- `filter()` : Creates a new array with elements that pass a test specified by a function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
```

- `reduce()` : Applies a function to reduce the array to a single value (from left to right).

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(x, number) {
  return x + number;
}, 0);
console.log(sum);  // Output: 15
```

- Using a `for...of` loop (ES6):
  
```javascript
let numbers = [1, 2, 3, 4, 5];
for (let x of numbers) {
  console.log(x);
}
```

These methods and techniques provide flexibility when working with arrays and allow you to perform various operations efficiently.
