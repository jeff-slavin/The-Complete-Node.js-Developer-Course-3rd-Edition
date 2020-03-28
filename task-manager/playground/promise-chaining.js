// Promise chaining example with MongoDB (and mongoose)

require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5e7d8b593f67af3c541ec838', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});