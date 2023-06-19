import * as day1 from './day1.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';



// express server
const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());


// static files
app.use(express.static('src/client'));

// routes

// /day1/puzzle1
app.post('/day1/puzzle1', (req, res) => {
    const body = req.body;
    console.log(body);

    const answer = day1.puzzle1(body.input);

    res.send({ answer: answer });
} );


export { app };
