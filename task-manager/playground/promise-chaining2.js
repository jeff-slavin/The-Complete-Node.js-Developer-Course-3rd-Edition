// Promise chaining example with MongoDB (and mongoose)
require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e7d7f108acfe80c585725aa').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Using Async Await
const deleteTaskAndCount = async (id) => {
    //const task = await Task.findByIdAndDelete(id);
    await Task.findByIdAndDelete(id);   // since i don't use 'task' variable, i can call it this way
    const count = await Task.countDocuments({ completed: false });

    return count;
};

deleteTaskAndCount('5e7ebd8a07aa0e1f2823c6c8').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error);
});