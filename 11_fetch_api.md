# Fetch API and AJAX

## Making HTTP requests

The Fetch API is used to make HTTP requests and handle responses. Example:

```javascript
fetch("https://api.example.com/data")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Received data:", data);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
```

## Handling responses

You can handle the response from an HTTP request using the `then` method. Example:

```javascript
fetch("https://api.example.com/data")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: " + response.status);
    }
  })
  .then(function(data) {
    console.log("Received data:", data);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
```

## Fetch API vs. XMLHttpRequest

The Fetch API is a newer, more modern approach to making HTTP requests compared to the older XMLHttpRequest. It provides a simpler and more flexible API.
