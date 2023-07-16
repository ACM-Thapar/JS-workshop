# Error Handling

## Handling runtime errors

JavaScript provides mechanisms to handle runtime errors using try/catch blocks. Example:

```javascript
try {
  // Code that may throw an error
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Error:", error);
}
```

## Throwing and catching exceptions

You can throw custom exceptions using the `throw` keyword and catch them using try/catch blocks. Example:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error);
}
```
