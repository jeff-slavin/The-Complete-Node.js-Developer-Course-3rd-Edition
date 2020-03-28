// Promise chaining example with MongoDB (and mongoose)

require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5e7d8b593f67af3c541ec838', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Using async and await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });

    return count;
};

updateAgeAndCount('5e7d8b593f67af3c541ec838', 2).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});