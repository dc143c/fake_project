const express = require ('express');
const mongoose = require('mongoose');
const routes = require ('./routes/routes');
const http = require('http');
const {setupWebSocket} = require('./socket');

var application = express();
const server = http.Server(application);
application.use(express.json());
application.use(routes);
require('./controllers/authController')(application);

const uri = "mongodb+srv://GerardWay:blackparade_isthebest@server.udgdk.mongodb.net/content?retryWrites=true&w=majority";

async function connect(){
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        server.listen(3333);
        console.log('Running on 3333')
      } catch (error) {
        throw error
    }
}

connect()