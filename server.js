'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 9000;

let iteration = 0;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
  console.log(`hi ${++iteration}`)
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
