// // CRUD Operations - create, read, update, delete

// const {MongoClient, ObjectID } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if(error) {
//         return console.log('Unable to connect to database!');
//     };

//     const db = client.db(databaseName);

//     // returns 'null' if a document does not exist
//     // findOne only returns a single document (if there are more than 1 match, only returns the first one found)
//     //db.collection('users').findOne({ name: 'Jenn', age:100 }, (error, user) => {

//     // search by ID
//     // should provide 'new', but ObjectID has defensive programming to protect against the chance you don't provide 'new'
//     // db.collection('users').findOne({ _id: new ObjectID('5e76fcf62b582824bc5f68cb') }, (error, user) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch user');
//     //     };

//     //     console.log(user);
//     // });

//     // // 'find' returns a cursor (so you can do a lot more w/ the response)
//     // db.collection('users').find({ age: 38 }).toArray( (error, users) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch users');
//     //     };

//     //     console.log(users);
//     // });

//     // // don't want all the data back, just want a count
//     // // avoids storing all the return in memory, just gives us a count back (a single integer)
//     // db.collection('users').find({ age: 38 }).count( (error, count) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch users');
//     //     };

//     //     console.log(count);
//     // });

//     db.collection('tasks').findOne({ _id: new ObjectID('5e76fe77f78a3a3560da75c6') }, (error, task) => {
//         console.log(task);
//     });

//     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//         console.log(tasks);
//     });

// });