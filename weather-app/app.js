const request = require('request');

const url = 'https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/37.8267,-122.4233';

request({ url: url}, (error, response) => {
    //console.log(error);
    const data = JSON.parse(response.body); // parse the data
    console.log(data.currently);
    //console.log(response);
});



// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);

// console.log('Stopping');