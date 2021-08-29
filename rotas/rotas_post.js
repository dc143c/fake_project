const express = require('express')
const session = require('express-session')
const router = express.Router()
const middleware = require('../middleware/middleware')

router.post('/login', async (req, res) => {
    try{
        middleware.postLogin(req.body).then((response) => {
            req.session.user = response.user;
            req.session.token = response.token;
            res.send(response)
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

module.exports = router