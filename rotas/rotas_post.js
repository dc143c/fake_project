const express = require('express')
const session = require('express-session')
const router = express.Router()
const middleware = require('../middleware/middleware')

router.post('/login', async (req, res) => {
    try{
        middleware.postLogin(req.body).then((response) => {
            req.session.user = response.user;
            req.session.token = response.token;
            middleware.setLogged({user: req.session.user, tipo: 'in'}).then((respp) => {
                res.send(response)
            }).catch((error) => {
                console.log('error on login status')
                console.log(error)
                res.status(400).send(error)
            })
        }).catch((error) => {
            console.log('error on login')
            console.log(error)
            res.status(400).send(error)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/register', async (req, res) => {
    try{
        let response = await middleware.postRegister(req.body)
        res.send(response)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/busca', async (req, res) => {
    middleware.buscaUser(req.body).then((results) => {
        res.send(results)
    }).catch((error) => {
        console.log('Erro na busca')
        res.status(400).send(error)
    })
})

router.post('/cria_post', async (req, res) => {
    middleware.createPost(req.body).then((results) => {
        res.send(results)
    }).catch((error) => {
        console.log('Erro na criação de postagem')
        console.log(error)
        res.status(400).send(error)
    })
})

module.exports = router