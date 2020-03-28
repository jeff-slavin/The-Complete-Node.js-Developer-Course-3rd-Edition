const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// Not ideal below - promise chaining is better
// add(1, 2).then((sum) => {
//     console.log(sum);
//     add(sum, 5).then((sum2) => {
//         console.log(sum2);
//     }).catch((error) => {
//         console.log(error);
//     });
// }).catch((error) => {
//     console.log(error);
// });

// Promise Chaining - returning a promise from our first then, allowing us to chain on another then call.
// Easier to read, less nested
// Only need to write 1 catch statement
add(1, 1).then((sum) => {
    console.log(sum);
    return add(sum, 4);     // return a promise
}).then((sum2) => {
    console.log(sum2);
}).catch((error) => {
    console.log(error);
});

// compare against 4-callbacks.js

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7, 4, 1]);
//         reject('Things went wrong!');
//     }, 2000);
// });

// doWorkPromise.then((result) => {
//     console.log('Success: ', result);
// }).catch((error) => {
//     console.log('Error: ', error);
// });