'use strict';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();
const port = process.env.PORT || 8181;

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.listen(port, () => {
    console.log('Started server on port:', port);
    console.log('XSS endpoint:', `GET /${id}/...`);
});

app.get(`/${id}/:data`, (req, res) => {
    const data = req.params.data;
    console.log('Got data:', data);
    res.send('Acknowledged.').status(200);
});
