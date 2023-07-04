import * as day1 from './day1.js';
import * as day2 from './day2.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


// express server
const app = express();

// body parser
app.use(bodyParser.urlencoded({extended: true}));
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

    res.send(answer);
});

// /day2/puzzle1
app.post('/day2/puzzle1', (req, res) => {
    const body = req.body;
    console.log(body);

    try {
        const answer = day2.solvePuzzle1(body.input);
        res.send({paperArea: answer});
    } catch (e) {
        res.status(400).send({error: e.message});
    }

});


export {app};
