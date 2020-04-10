// To start up mongo server
// /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data
const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});