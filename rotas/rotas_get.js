const express = require('express')
const middleware = require('../middleware/middleware')
const router = express.Router()

module.exports = router

router.get('/', function (req, res) {
    if(req.session.user){
        return res.redirect('/home')
    }
    
    let user = {}
    if(req.session.user){
        user = req.session.user
    } 

    res.render('home', {
        user: user,
        active: 'feed'
    })
})

router.get('/logout', async function (req, res) {
    let user = req.session.user
    middleware.setLogged({user: user, tipo: 'out'}).then((respp) => {
        req.session.destroy();
        res.redirect('/')
    }).catch((error) => {
        console.log('error on login status')
        console.log(error)
        res.status(400).send(error)
    })
});

router.get('/home', function (req, res) {
    if(!req.session.user){
        return res.redirect('/')
    }
    let user = req.session.user
    res.render('index', {
        user: user,
        active: 'feed'
    })
})

router.get('/perfil/:username', async function (req, res) {
    let user = {}
    if(req.session.user){
        user = req.session.user
    } 

    let infos = await middleware.buscaUser({"username": req.params.username})
    var posts = await middleware.buscaPostsUser({"username": req.params.username})
    res.render('perfil', {
        user: user,
        infos: infos[0],
        posts_user: posts,
        active: 'perfil'
    })
})

router.get('/dm', function (req, res) {
    if(!req.session.user){
        return res.render('/')
    }
    var user = req.session.user
    res.render('mensagens', {
        user: user,
        active: 'dm'
    })
})

router.get('/amigos', function (req, res) {
    if(!req.session.user){
        return res.render('/')
    }
    var user = req.session.user
    res.render('amigos', {
        user: user,
        active: 'amigos'
    })
})

router.get('/comunidades', function (req, res) {
    if(!req.session.user){
        return res.render('/')
    }
    var user = req.session.user
    res.render('amigos', {
        user: user,
        active: 'comunidades'
    })
})

router.get('/configs', function (req, res) {
    if(!req.session.user){
        return res.render('/')
    }
    var user = req.session.user
    res.render('configs', {
        user: user,
        active: 'configs'
    })
})