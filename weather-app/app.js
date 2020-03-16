const request = require('request');

const url = 'https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/37.8267,-122.4233?';
// invalid URL for error handling
//const url = 'https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/37.8267';

request({ url: url, json: true}, (error, response) => {
    //console.log(error); // null if no error

    // since we have set 'json: true' in our argument, it means the response is already a JSON object, no need to parse
    //const data = JSON.parse(response.body); // parse the data

    //console.log(response.body.currently);

    //adding error handling in case the darksky request comes back as undefined (and there is an error)
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    };

    
    //console.log(data.currently);
    //console.log(response);
});

//Geocoding Service - converting a location to a lat/long
//user Provide address -> API converts to lat/long -> use with DarkSky API to get weather data (user does not need to know we converted to lat/long)

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Denver.json?access_token=pk.eyJ1IjoiamVmZnNsYXZpbiIsImEiOiJjazd1MTZncGQwMnY2M3FwYXlhYXpzNzVnIn0.m4xObm7BEugqQk1jMAntFA&limit=1';
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiamVmZnNsYXZpbiIsImEiOiJjazd1MTZncGQwMnY2M3FwYXlhYXpzNzVnIn0.m4xObm7BEugqQk1jMAntFA&limit=1';

request({url: geocodeURL, json: true}, (error, response) => {

    if(error) {
        console.log('Unable to connect to geocoding service');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find goecode location. Try another search.');
    } else {
        console.log(`Latitude: ${response.body.features[0].center[1]} - Longitude: ${response.body.features[0].center[0]}`);
    };
});

// console.log('Calling for weather data.');   // just showing this prints first while the weather data is waiting to come back (async)



// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);

// console.log('Stopping');