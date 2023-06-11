import * as day1 from './day1.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// express server
const app = express();
const port = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// static files
app.use(express.static(path.join(__dirname, '../client')));

// routes

// /day1/puzzle1
app.post('/day1/puzzle1', (req, res) => {
  const body = req.body;
  console.log(body);
  
  const answer = day1.puzzle1(body.input);
  
  res.send({ answer: answer });
} );



