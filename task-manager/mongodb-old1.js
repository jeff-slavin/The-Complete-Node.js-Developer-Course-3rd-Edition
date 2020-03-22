// // CRUD Operations - create, read, update, delete

// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;

// // Can do the above via destructuring as well
// // Shorthand way of doing this and creating the consts
// const {MongoClient, ObjectID } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';  // type out the IP instead of 'localhost' as there are some weid issues if you type 'localhost'
// const databaseName = 'task-manager';

// // don't need to supply 'new' as the ObjectID has defensive programming to protect against calling it without
// // const id = new ObjectID();
// // console.log(id);
// // console.log(id.id);  // shows buffer
// // console.log(id.id.length);  // 12 byte length
// // console.log(id.toHexString());  // converting to hex string - string representation is 24 (double the actual length)
// // console.log(id.toHexString().length);   // length will be 24
// // The above is why you see 'ObjectID(xxxxx)' in the database. It's returning the string value, but it's wrapped in a function that converts the 12 byte length into a string. These are actually stored as binary to halve the storage, from 24 to 12
// // console.log(id.getTimestamp());

// // In video, he uses useNewUrlParser: True instead of the below
// // Changed this based on the 'warning' I received about useNewUrlParser being deprecated in the future
// // It recommended using useUnifiedTopology instead
// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if(error) {
//         return console.log('Unable to connect to database!');
//     };

//     //console.log('Connected correctly!');
//     const db = client.db(databaseName); // if database does not exist, it gets created

//     console.log('Inserting to database...');

//     // Inserting with our own created ID
//     // ID variable created above
//     // db.collection('users').insertOne({
//     //     _id: id,
//     //     name: 'Caleb',
//     //     age: 2
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert user');
//     //     }
//     //     console.log(result.ops);
//     // });

//     // select collection do we want to insert into - creates collection if does not exist
//     // Asynchronous call below
//     // db.collection('users').insertOne({
//     //     name: 'Jeff',
//     //     age: 38
//     // }, (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert user');
//     //     };

//     //     console.log(result.ops);
//     // });

//     // db.collection('users').insertMany([
//     //     {
//     //         name: 'Jenn',
//     //         age: 37
//     //     },{
//     //         name: 'Noah',
//     //         age: 4
//     //     }
//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert users');
//     //     };
//     //     console.log(result.ops);
//     // });

//     // db.collection('tasks').insertMany([
//     //     {
//     //         description: 'Clean the house',
//     //         completed: true
//     //     },{
//     //         description: 'Renew inspection',
//     //         completed: false
//     //     },{
//     //         description: 'Pot plants',
//     //         completed: false
//     //     }
//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert tasks');
//     //     };

//     //     console.log(result.ops);
//     // });

//     console.log('End of code');
// });