const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat', msg);
    });
})


// app.listen(8000, () => {
//     console.log('Server start on port 8000 .......');
// })

server.listen(8000, () => {
    console.log('Server start at port 8000 .......');
})