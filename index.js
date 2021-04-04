var express = require("express");
var app = express();
var body_parser = require("body-parser");
var session = require('express-session')

app.use(body_parser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(body_parser.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.use(session({
    secret: '#C4tf1sh!',
    resave: true,
    saveUninitialized: true
}));

//Routes
app.use(require('./rotas/rotas_get.js'))
app.use(require('./rotas/rotas_post.js'))

var porta = 80

app.get('/', function (req, res) {
    res.render('index')
    return
})

app.get('/home', function (req, res) {
    res.render('home')
    return
})
app.listen(porta, function (err) {
    if (err) console.log(err);
    console.log("Online on Port = " + porta);
});