# Objects

## Object literals and properties

Objects in JavaScript are collections of key-value pairs. Here's an example:

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: true
};
console.log(person.name);  // Output: "John"
```

## Accessing object properties

You can access object properties using dot notation or bracket notation. Example:

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: true
};
console.log(person.age);  // Output: 25
console.log(person["isStudent"]);  // Output: true
```

## Object methods

Objects can contain functions as properties, which are called object methods. Example:

```javascript
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};
person.greet();  // Output: "Hello, John!"
```

## Object destructuring

Object destructuring allows you to extract object properties into separate variables. Example:

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: true
};
let { name, age } = person;
console.log(name);  // Output: "John"
console.log(age);  // Output: 25
```

## Classes and Objects

### Creating classes and objects

Classes are used to define object blueprints. Here's an example of creating a class and an object instance:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name + "!");
  }
}

let john = new Person("John", 25);
john.greet();  // Output: "Hello, John!"
```

### Constructor functions

Constructor functions are used to create objects. Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name + "!");
  };
}

let john = new Person("John", 25);
john.greet();  // Output: "Hello, John!"
```

### Prototypes and inheritance

JavaScript uses prototypes for inheritance. Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name + "!");
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let john = new Student("John", 20, "Computer Science");
john.greet();  // Output: "Hello, John!"
```

## ES6 classes

ES6 introduced a simpler syntax for creating classes. Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name + "!");
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
}

let john = new Student("John", 20, "Computer Science");
john.greet();  // Output: "Hello, John!"
```
