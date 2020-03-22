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

    console.log('Inserting to database...');

    // select collection do we want to insert into - creates collection if does not exist
    // Asynchronous call below
    // db.collection('users').insertOne({
    //     name: 'Jeff',
    //     age: 38
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     };

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jenn',
    //         age: 37
    //     },{
    //         name: 'Noah',
    //         age: 4
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert users');
    //     };
    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert tasks');
        };

        console.log(result.ops);
    });

    console.log('End of code');
});