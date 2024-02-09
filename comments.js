// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server
// node comments.js
// Go to the URL: http://localhost:3000

// Output: Hello World!

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server
// node comments.js
// Go to the URL: http://localhost:3000

// Output: Hello World!