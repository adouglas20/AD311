const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About page');
});


app.get('/foo', (req, res, next) => {
    if (Math.random() > 0.5) {
        res.send('sometimes this');
    } else {
        next();
    }
});


app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});


app.get(/\/user(name)?/, (req, res) => {
    res.send('User route matched via regex');
});


app.get('/user/:username', (req, res) => {
    const name = req.params.username;
    res.send(`Hello ${name}`);
});


app.get('/get', (req, res) => {
    console.log('Query parameters received:', req.query);
    res.send('Query logged to console');
});


app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


app.listen(port, () => {
    console.log(`Server successfully started on http://localhost:${port}`);
});