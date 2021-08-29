const express = require('express')
const middleware = require('../middleware/middleware')
const router = express.Router()

module.exports = router

router.get('/', function (req, res) {
    if(req.session.user){
        return res.redirect('/home')
    }
    
    var user = req.session.user
    res.render('home', {
        user: user,
        active: 'feed'
    })
})

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/')
});

router.get('/home', function (req, res) {
    if(!req.session.user){
        return res.redirect('/')
    }
    var user = req.session.user
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
    try{
        var infos = await middleware.buscaUser(req.params.username)
        var posts = await middleware.buscaPostsUser(req.params.username)
    } catch (err) {
        console.log(err)
    }
    res.render('perfil', {
        user: user,
        infos: infos,
        posts: posts,
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