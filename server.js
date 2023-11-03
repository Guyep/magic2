const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize a variable to store the user's input
let userInput = '';

// Serve HTML page with a text input and a submit button
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Simple Node.js Web App</h1>
        <form action="/update" method="post">
          <input type="text" name="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <p>User Input: ${userInput}</p>
      </body>
    </html>
  `);
});

// Handle POST request to update the variable with user input
app.post('/update', (req, res) => {
  userInput = req.body.text;
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
