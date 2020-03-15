const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

//const bookJSON = JSON.stringify(book);

//fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');

//console.log(dataBuffer);  // data that comes back is not the data, need to conver to string below
// console.log(dataBuffer.toString());
// const dataJSON = dataBuffer.toString(); // get the string data from the buffer
// const data = JSON.parse(dataJSON);  // convert to JavaScript object
// console.log(data.title);        // read in property, Title

// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// Challenge Area
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);

data.name = 'Jeff';
data.age = 38;

console.log(data);

fs.writeFileSync('1-json.json', JSON.stringify(data));
