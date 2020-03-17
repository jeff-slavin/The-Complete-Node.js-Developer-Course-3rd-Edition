const https = require('https');

const url = 'xxxhttps://api.darksky.net/forecast/6006c02deeed9fafd051c34da1805c7f/40,-75';

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });


});

request.on('error', (error) => {
    console.log('Error: ', error);
});

request.end();