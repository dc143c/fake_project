const express = require ('express');
const mongoose = require('mongoose');
const routes = require ('./routes/routes');
const http = require('http');
const {setupWebSocket} = require('./socket');

const {DB_USERNAME,DB_PASSWORD,DB_DATABASE, SERVER_PORT} = process.env;
var application = express();
const server = http.Server(application);
application.use(express.json());
application.use(routes);

mongoose.connect(`mongodb+srv://GerardWay:wheniwasayoungboy@server.udgdk.mongodb.net/content?retryWrites=true&w=majority`, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false
});

require('./controllers/authController')(application);
server.listen(SERVER_PORT || 3333);
console.log('Running on 3333')