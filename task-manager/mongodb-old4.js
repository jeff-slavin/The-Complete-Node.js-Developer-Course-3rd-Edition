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

//     db.collection('tasks').updateMany({
//         completed: false
//     }, {
//         $set: {
//             completed: true
//         }
//     }).then((result) => {
//         console.log(result.modifiedCount);
//     }).catch((error) => {
//         console.log(error);
//     });

//     // db.collection('users').updateOne({
//     //     _id: new ObjectID('5e76fa00345a1e1e306ab88e')
//     // }, {
//     //     $inc: {
//     //         age: 1
//     //     }
//     // }).then((result) => {
//     //     console.log(result);
//     // }).catch((error) => {
//     //     console.log(error);
//     // });

// });