// aync; // cpp -> staticlly typed -> data types are required
// js -> dynamically typed -> data types are not required

// await; // var -> globally scoped
// let -> block scoped
// const -> block scoped + value cannot be changed

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log (c);
// }

// let b = 40;
// b = 50;
// console.log (b);

// const c = 60;
// c = 70;
// console.log (c);

// console.log (a);
// console.log (b);

//  key-value pair

// let person = {
//   name: 'John',
//   age: 25,
//   isStudent: true,
// };

// var x = 10;
// var y = '10';

// console.log (x === y);

// === -> strictly equal to operator

// function greet (name) {
//   console.log ('Hello, ' + name + '!');
// }

// greet ('John');

// const greet = name => {}; -> arrow function

// const add = (a, b) => a + b;

// difference in normal and arrow functions

// 1) syntax
// 2) no return statement required
// 3) no curly braces required if only one statement is there
// 4) hoisting doesn't works in arrow function
// 5) this keyword behaves differently in arrow function

// add (10, 20);

// const add = (a, b) => {
//   console.log (a + b);
// };

// console.log (x);
// var x = 10; // undefined

// const x = 10;

// variables defined with let and const go to temporal dead zone instead of going up in hoisting

// let fruits = ['apple', 'banana', 'orange'];
// console.log (fruits);
// fruits.push ('grape');
// console.log (fruits);
// fruits.pop ();
// console.log (fruits);

// let person = {
//   name: 'John',
//   age: 25,
//   isStudent: true,
// };
// console.log (person.name);

// let element = document.getElementById ('1');
// element.innerText = 'hello';
// element.innerHTML = '<h1>hello</h1>';

// let elements = document.querySelectorAll (div);
// elements.innerHTML[0] = '<h1>hello</h1>';

// function fetchData (x) {
//   setInterval (function () {
//     console.log (x);
//   }, 2000);
// }

// fetchData (10);

// import {greet} from './module';
// greet ('John');

// applicaton -> frontend ,backend -> api = application programming interface

// var x = 10;
// //interpolation

// var y = `heloo ${x}`;
// console.log (y);

// ${x} - > internpolation -> template literals

// const a = [1, 2, 3]; -> initial cart

// ... => spread operator

// const b = [...a, 4, 5]; -> final cart
// ...a -> spreaded a

// const hey = 'hey';
// const arrayized = [...hey];

// console.log (arrayized);

// const [one, two, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log (others);

// const person = {
//   firstName: 'Tom',
//   lastName: 'Cruise',
//   actor: true,
//   age: 54, //made up
// };

// const {firstName: name, age} = person;

// console.log (name);
