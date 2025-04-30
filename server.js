const express = require('express');

// Create an Express application
const app = express();

// Define the port the server will run on
// Use the PORT environment variable if available, otherwise default to 3000
const port = process.env.PORT || 3000;

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
