// // CRUD Operations - create, read, update, delete

// // NOTE: to start mongodb, run this on command line:
// // /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data

// const {MongoClient, ObjectID } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if(error) {
//         return console.log('Unable to connect to database!');
//     };

//     const db = client.db(databaseName);

//     db.collection('tasks').findOne({ _id: new ObjectID('5e76fe77f78a3a3560da75c6') }, (error, task) => {
//         console.log(task);
//     });

//     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//         console.log(tasks);
//     });

// });