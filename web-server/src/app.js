const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Routes
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
        name: 'Jeff Slavin',
        helpText: 'This is some helpful text'
    })
});

app.get('/weather', (req, res) => {
    
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address.'
        });
    };
    
    res.send({
        location: 'Highlands Ranch',
        forecast: 'It is really nice outside!',
        address: req.query.address
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term.'
        });
    };
    console.log(req.query.search);
    res.send({
        products: []
    });
});

// Will match any page that starts with /help/ and then anything after that (that was not a match in the above app.get calls)
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jeff Slavin',
        errorMessage: 'Help article not found' 
    });
});

// 404 Page - must come last after all the other routes above
// * means match every request that has not been matched so far (has not been matched above)
app.get('*', (req, res) => {
    res.render('404', {
       title: '404',
       name: 'Jeff Slavin',
       errorMessage: 'Page not found' 
    });
});

// Start server at port 3000
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

