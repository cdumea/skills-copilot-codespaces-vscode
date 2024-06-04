// Create web server
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Path: comments.js
// Create a route to handle POST requests
app.post('/comments', (req, res) => {
  res.send('Thanks for your comment!');
});

// Path: comments.js
// Create a route to handle GET requests
app.get('/comments', (req, res) => {
  res.send('Comments will go here!');
});

// Path: comments.js
// Create a route to handle DELETE requests
app.delete('/comments', (req, res) => {
  res.send('Comment deleted!');
});

// Path: comments.js
// Create a route to handle PUT requests
app.put('/comments', (req, res) => {
  res.send('Comment updated!');
});

// Path: comments.js
// Create a route to handle PATCH requests
app.patch('/comments', (req, res) => {
  res.send('Comment patched!');
});

// Path: comments.js
// Create a route to handle OPTIONS requests
app.options('/comments', (req, res) => {
  res.send('Options available!');
});

// Path: comments.js
// Create a route to handle HEAD requests
app.head('/comments', (req, res) => {
  res.send('Header sent!');
});

// Path: comments.js
// Create a route to handle TRACE requests
app.trace('/comments