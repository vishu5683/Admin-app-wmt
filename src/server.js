const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Use the routes defined in the routes folder
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
