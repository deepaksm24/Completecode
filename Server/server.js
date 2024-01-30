const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware



const app = express();

const port = 5000;

// Use middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Import the newproject route
const newProjectRouteCML5480 = require('./Routes/CML5480/NewprojectCML5480');

const Loremir96gc1 = require('./Routes/Ir96rgigc1');


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

// Use the newproject route middleware for the '/newproject' path
app.use('/newprojectCML5480', newProjectRouteCML5480);

app.use('/ir96gc1',Loremir96gc1 );



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
