const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jeff Slavin'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jeff Slavin'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text'
    })
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

// app.get('', (req, res) => {
//     res.send('<H1>Weather</H1>');
// });

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Jeff',
//         age: 38
//     }, {
//         name: 'Jenn',
//         age: 37
//     }]);
// });

// app.get('/about', (req, res) => {
//     res.send('<H1>About</H1>');
// });

