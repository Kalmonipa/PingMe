import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    res.send('Pong!');
})

app.get('/coffee', (req, res) => {
    res.send("I'm a teapot");
})

app.put('/put', (req, res) => {
    res.send("I've been PUT");
})

app.post('/post', (req, res) => {
    res.send("I've been POSTed");
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})