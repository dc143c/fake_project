const express = require('express')
const router = express.Router()
const middleware = require('../middleware/middleware')

router.post('/login', async (req, res) => {
    try{
        let response = await middleware.postLogin(req.body)
        res.send(response)
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