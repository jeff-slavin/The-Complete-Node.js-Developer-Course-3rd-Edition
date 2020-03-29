// Async forces function to return a promise (return value means fulfilling, throwing error means failing the promise - going to catch)
// Await can only be used with a promise

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('Error: Numbers must be non-negative');
            }
            resolve(a + b);
        }, 2000);
    });
};

// const doWork = async () => {
//     return 'Jeff';
// };

// console.log(doWork());

// const doWork = async () => {
//     const sum = await add(1, 99)    // this now looks like a standard synchronous function
//     return sum;
// }

// The below also allows it to be easier to have access to all of the variables in the same function
// I have access to all results (sum, sum2, sum3) in the same function
const doWork = async () => {
    const sum = await add(1, -99)    // this now looks like a standard synchronous function
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, -3);
    return sum3;
}

// const doWork = async () => {
//     throw new Error('Something went wrong');    // failing the promise
//     return 'Jeff';  // fulfills the promise
// };

doWork().then((result) => {
    console.log('Result', result);
}).catch((error) => {
    console.log(error);
})