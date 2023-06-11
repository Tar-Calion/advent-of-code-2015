
// express server
const express = require('express');
const app = express();
const port = 3000;

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
const cors = require('cors');
app.use(cors());

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// static files
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));



