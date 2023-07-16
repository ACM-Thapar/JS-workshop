# Work with objects and arrays using Rest and Spread

You can expand an array, an object or a string using the spread operator ...

Let’s start with an array example. Given

```javascript
const a = [1, 2, 3]
```

you can create a new array using

```javascript
const b = [...a, 4, 5, 6]
```

You can also create a copy of an array using

```javascript
const c = [...a]
```

This works for objects as well. Clone an object with:

```javascript
const newObj = { ...oldObj }
```

Using strings, the spread operator creates an array with each char in the string:

```javascript
const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']
```

This operator has some pretty useful applications. The most important one is the ability to use an array as function argument in a very simple way:

```javascript
const f = (arg1, arg2) => {}
const a = [1, 2]
f(...a)
```

## Rest Properties

```javascript
[first, second, ...others] = [1, 2, 3, 4, 5]
```

```javascript
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}

first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }```