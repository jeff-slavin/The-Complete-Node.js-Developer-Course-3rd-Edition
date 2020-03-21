const request = require('request');

const forecast = (latitude, longitude, callback) => {
    //const url = `https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/${latitude},${longitude}`;
    const url = 'https://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${Math.round(body.currently.temperature)} degrees out. The high today is ${Math.round(body.daily.data[0].temperatureHigh)} with a low of ${Math.round(body.daily.data[0].temperatureLow)}. There is a ${Math.round(body.currently.precipProbability)}% chance of rain.`);
        };
    });
};

module.exports = forecast;