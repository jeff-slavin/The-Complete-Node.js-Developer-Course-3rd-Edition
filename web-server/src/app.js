const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<H1>Weather</H1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Jeff',
        age: 38
    }, {
        name: 'Jenn',
        age: 37
    }]);
});

app.get('/about', (req, res) => {
    res.send('<H1>About</H1>');
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Highlands Ranch',
        forecast: 'It is really nice outside!'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});