const express = require ('express');
const mongoose = require('mongoose');
const routes = require ('./routes/routes');
const http = require('http');

var application = express();
application.use(express.json());
application.use(routes);
require('./controllers/authController')(application);
const server = http.Server(application);

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://GerardWay:blackparade_isthebest@server.udgdk.mongodb.net/content?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
      } catch (error) {
        throw error
    }
}

connect()
server.listen(3333);
console.log('Running on 3333')