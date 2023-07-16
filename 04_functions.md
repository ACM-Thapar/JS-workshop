# Functions

## Function declaration and invocation

Functions are blocks of reusable code. Here's an example of declaring and invoking a function:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");  // Output: "Hello, John!"
```

## Parameters and arguments

Functions can have parameters, which act as placeholders for values passed as arguments. Example:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(3, 5);  // sum equals 8
```

## Return statements

The return statement is used to specify the value returned by a function. Example:

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 6);  // result equals 24
```

## Scope

Variables in JavaScript have either global or local scope. Example:

```javascript
let globalVariable = "I'm global";

function myFunction() {
  let localVariable = "I'm local";
  console.log(globalVariable);  // accessible
  console.log(localVariable);  // accessible
}

console.log(globalVariable);  // accessible
console.log(localVariable);  // not accessible
```

## Function expressions and arrow functions

Functions can also be assigned to variables or written as arrow functions. Example:

```javascript
let greet = function(name) {
  console.log("Hello, " + name + "!");
};

let multiply = (a, b) => a * b;
```
