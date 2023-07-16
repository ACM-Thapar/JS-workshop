# JSON

## JavaScript Object Notation

JSON is a lightweight data interchange format commonly used for data transmission between a server and a web application.

## Parsing JSON

You can parse JSON data into JavaScript objects using the `JSON.parse()` method. Example:

```javascript
let jsonString = '{"name": "John", "age": 25}';
let obj = JSON.parse(jsonString);
console.log("Name:", obj.name);  // Output: "John"
```

## Stringifying JavaScript objects

You can convert JavaScript objects to JSON strings using the `JSON.stringify()` method. Example:

```javascript
let obj = {
  name: "John",
  age: 25
};
let jsonString = JSON.stringify(obj);
console.log("JSON String:", jsonString);
```
