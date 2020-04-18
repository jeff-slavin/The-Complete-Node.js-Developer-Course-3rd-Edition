const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
    console.log('New web socket connection');

    socket.emit('message', 'Welcome!'); // send only to the specific client

    socket.broadcast.emit('message', 'A new user has joined!'); // send to all clients except the current one

    // callback we call to acknowledge the reception
    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter();

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!');
        };

        io.emit('message', message);    // send to all connected clients
        callback();
    });

    socket.on('sendLocation', (coords, callback) => {
        //io.emit('message', `Location: ${coords.latitude}, ${coords.longitude}`);
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
        callback();
    });

    socket.on('disconnect', () => {
        // Client has already been disconnected
        // so don't need to use 'broadcast', can just send the message to all clients still connected
        io.emit('message', 'A user has left!');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});