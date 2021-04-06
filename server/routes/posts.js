const express = require('express');
const Posts = require('../schemes/Posts');
const routes = express.Router();

routes.post('/cria_post', async (req,res) => {
    try { 
    const post = await Post.create(req.body);
    res.send(post)
    }
    catch(err){
        return res.status(200).send({error: 'Falha ao registrar.'});
    } 
});

routes.post('/buscaPostUser', async(req, res) => {    
    Post.find({dono: { $regex: '.*' + req.body.username + '.*' }}, function (err, docs) {
        if(err) console.log(err)
        else res.send(docs)
    });
})

module.exports = routes;