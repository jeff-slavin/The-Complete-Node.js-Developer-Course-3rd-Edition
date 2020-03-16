const request = require('request');

const url = 'https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/37.8267,-122.4233?';

request({ url: url, json: true}, (error, response) => {
    //console.log(error); // null if no error

    // since we have set 'json: true' in our argument, it means the response is already a JSON object, no need to parse
    //const data = JSON.parse(response.body); // parse the data

    //console.log(response.body.currently);

    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)

    //console.log(data.currently);
    //console.log(response);
});

console.log('Calling for weather data.');



// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);

// console.log('Stopping');