// Import the Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Endpoint 1: Root path returning "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Endpoint 2: Evening greeting path returning "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/ (returns "Hello world")`);
  console.log(`  - http://localhost:${PORT}/evening (returns "Good evening")`);
});
