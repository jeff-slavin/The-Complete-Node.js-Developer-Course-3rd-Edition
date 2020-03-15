// const square = function(x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// }

// const square = (x) =>  x * x;

// console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: ['Jeff', 'Jenn', 'Noah', 'Caleb', 'Larry'],
    // More concise syntax - can access 'this' as a method
    printGuestList() {
        console.log(`Guest list for ${this.name}`);
        // arrow function does not define it's own 'this', it inherits the parent 'this'
        this.guestList.forEach( (guest) => {
            console.log(`${guest} is attending ${this.name}`);
        });
    }

    // Long form - need 'function' keyword so we can access 'this' as a method
    // printGuestList: function () {
    //     console.log(`Guest list for ${this.name}:`)
    // }

    // As a method, cannot access "this"
    // printGuestList: () => {
    //     console.log(`Guest list for ${this.name}:`)
    // }
};

event.printGuestList();