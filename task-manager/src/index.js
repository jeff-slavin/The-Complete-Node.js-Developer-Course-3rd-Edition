// To start up mongo server
// /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data
const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());    // automatically parses incoming data as JSON to an object
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' });    // 2nd argument is a secret key, can be anything
    // tokens is 3 sections (separated by a .)
    // example output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1ODU1NDE3Nzl9.lLMa7CLYlcFk7Iaw3JFIPoDQcqV6DwlsaCyk4q0qKpQ
    // first section is header (has information like it's a jwt token and what algorithm was used)
    // second section is the data (in our case the ID from above)
    // last section is the signature (to verify the token)
    console.log(token);

    const data = jwt.verify(token, 'thisismynewcourse');
    console.log(data);
};

myFunction();