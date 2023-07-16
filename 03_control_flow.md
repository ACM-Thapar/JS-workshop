# Control Flow

## Conditional statements

Conditional statements execute different blocks of code based on conditions. For example:

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside");
} else if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cool outside");
}
```

## Loops

Loops are used to repeatedly execute code. JavaScript has for, while, and do...while loops. Here's an example using a for loop:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Break and continue statements

The break statement is used to exit a loop, while the continue statement skips the current iteration. Example:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
  if (i === 3) {
    break;
  }
}
```
