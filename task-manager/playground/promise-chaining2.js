// Promise chaining example with MongoDB (and mongoose)
require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5e7d7f108acfe80c585725aa').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});