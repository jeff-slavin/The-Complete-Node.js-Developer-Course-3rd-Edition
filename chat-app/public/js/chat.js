const socket = io();

socket.on('message', (msg) => {
    console.log(msg);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const message = e.target.elements.message.value;    // e is the form, message is the name of the element (the one we set)

    //socket.emit('sendMessage', message);
    // Last argument is a function that runs when the acknowledgement is received
    socket.emit('sendMessage', message, (error) => {
        if (error) {
            return console.log(error);
        };

        console.log('Message delivered!');
    });
});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {   // checks that the browser supports this
        return alert('Gelocation is not supported by your browser.');
    };

    // function below does not support promises (async await)
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared!');
        });
    });
});