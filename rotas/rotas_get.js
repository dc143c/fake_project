const express = require('express')
const router = express.Router()

module.exports = router


router.get('/', function (req, res) {
    res.render('home')
    return
})

router.get('/home', function (req, res) {
    res.render('index')
    return
})

router.get('/perfil', function (req, res) {
    res.render('perfil')
    return
})

router.get('/dm', function (req, res) {
    res.render('mensagens')
    return
})

router.get('/amigos', function (req, res) {
    res.render('amigos')
    return
})

router.get('/comunidades', function (req, res) {
    res.render('amigos')
    return
})

router.get('/configs', function (req, res) {
    res.render('configs')
    return
})