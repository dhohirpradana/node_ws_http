const WebSocket = require('ws');

const socket = new WebSocket('wss://sjf:20000', {
    rejectUnauthorized: false,
});

socket.on('open', () => {
    console.log('connected');
});

socket.on('message', (data) => {
    console.log(data);
});

socket.on('close', () => {
    console.log('disconnected');
});

socket.on('error', (err) => {
    console.log(err);
});