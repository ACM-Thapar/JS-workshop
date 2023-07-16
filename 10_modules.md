# Modules and ES6 Imports/Exports

## Organizing code into modules

Modules are used to organize code into separate files, each with its own scope and exports.

## Exporting and importing modules

You can export and import functionality between modules using the `export` and `import` keywords. Example:

### Module A

```javascript
export function greet(name) {
  console.log("Hello, " + name + "!");
}
```

### Module B

```javascript
import { greet } from "./moduleA.js";

greet("John");  // Output: "Hello, John!"
```
