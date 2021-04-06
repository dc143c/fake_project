const socketio = require('socket.io');

exports.setupWebSocket = (server) => {
    const io = socketio(server);
    io.on('Connection', socket => {
        console.log(socket.id);
    });
};