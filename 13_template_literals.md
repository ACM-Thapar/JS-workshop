# Template literals

Template Literals are a new ES2015 / ES6 feature that allows you to work with strings in a novel way compared to ES5 and below.

The syntax at a first glance is very simple, just use backticks instead of single or double quotes:

```javascript
const a_string = `something`
```

They are unique because they provide a lot of features that normal strings built with quotes do not, in particular:

- They offer a great syntax to define multiline strings
- They provide an easy way to interpolate variables and expressions in strings
- They allow you to create DSLs with template tags (DSL means domain specific language, and it’s for example used in React by Styled Components, to define CSS for a component)

Let’s dive into each of these in detail.

## Multiline strings

Pre-ES6, to create a string spanning over two lines you had to use the \ character at the end of a line:

```javascript
const string =
  'first part \
second part'
```

This allows to create a string on 2 lines, but it’s rendered on just one line:

`first part second part`

To render the string on multiple lines as well, you explicitly need to add \n at the end of each line, like this:

```javascript
const string =
  'first line\n \
second line'
```

or

```javascript
const string = 'first line\n' + 'second line'
```

Template literals make multiline strings much simpler.

```javascript
const string = `Hey
this

string
is awesome!`
```

## Interpolation

Template literals provide an easy way to interpolate variables and expressions into strings.

You do so by using the ${...} syntax:

```javascript
const myVariable = 'test'
const string = `something ${myVariable}` //something test
```

inside the ${} you can add anything, even expressions:

```javascript
const string = `something ${1 + 2 + 3}`
const string2 = `something ${doSomething() ? 'x' : 'y'}`
```

## Template tags

In Styled Components template tags are used to define CSS strings:

```javascript
const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`
```

Similarly in Apollo template tags are used to define a GraphQL query schema
