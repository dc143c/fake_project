const express = require ('express');
const http = require('http');

var application = express();
application.use(express.json());
application.use(routes);

const server = http.Server(application);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost",
    },
});
  
io.onAny((event, ...args) => {
  console.log(event, args);
});

module.exports = {io}