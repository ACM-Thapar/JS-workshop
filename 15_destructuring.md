# Destructuring Objects and Arrays in JavaScript

Given an object, using the destructuring syntax you can extract just some values and put them into named variables:

```javascript
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}

const { firstName: name, age } = person //name: Tom, age: 54
```

name and age contain the desired values.

The syntax also works on arrays:

```javascript
const a = [1, 2, 3, 4, 5]
const [first, second] = a //first: 1, second: 2
```

This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array a:

```javascript
const [first, second, , , fifth] = a
```
