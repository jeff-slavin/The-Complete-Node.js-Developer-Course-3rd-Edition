// To start up mongo server
// /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data
const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Register middleware function to run
// We are now passing a function to app.use (must be above our other .use calls below)
// This creates a middleware function.
// This will run before any of the route handlers (app.use) below
// Need to call next() to tell express we are done with this function and to continue with the route handler
// app.use((req, res, next) => {
//     //console.log(req.method, req.path);  // shows us the call (was it GET/PATCH/etc. and what path '/users' for example)
//     //next(); // let's express know that this function is done

//     // allows us to allow certain calls to get all the way through, versus rejecting right away
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled');
//     } else {
//         next(); // continue
//     };
// });

// Challenge: Create a middleware function for 'maintenance' disabling all calls and sending a maintenance message with 503 error
app.use((req, res, next) => {
    res.status(503).send('Site is currently under maintenance. Check back soon');
});

// These lines need to be below any middleware functions defined (like above)
app.use(express.json());    // automatically parses incoming data as JSON to an object
app.use(userRouter);
app.use(taskRouter);

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' });    // 2nd argument is a secret key, can be anything
//     // tokens is 3 sections (separated by a .)
//     // example output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1ODU1NDE3Nzl9.lLMa7CLYlcFk7Iaw3JFIPoDQcqV6DwlsaCyk4q0qKpQ
//     // first section is header (has information like it's a jwt token and what algorithm was used)
//     // second section is the data (in our case the ID from above)
//     // last section is the signature (to verify the token)
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// };

// myFunction();