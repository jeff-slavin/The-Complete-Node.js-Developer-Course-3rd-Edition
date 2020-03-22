// CRUD Operations - create, read, update, delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';  // type out the IP instead of 'localhost' as there are some weid issues if you type 'localhost'
const databaseName = 'task-manager';

// In video, he uses useNewUrlParser: True instead of the below
// Changes this based on the 'warning' I received about useNewUrlParser being deprecated in the future
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!');
    };

    //console.log('Connected correctly!');
    const db = client.db(databaseName); // if database does not exist, it gets created

    // select collection do we want to insert into - creates collection if does not exist
    db.collection('users').insertOne({
        name: 'Jeff',
        age: 38
    });


});