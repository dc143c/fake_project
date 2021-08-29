const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../schemas/User');
const Post = require('../schemas/Post');
const generateToken = require('../controllers/authController');
const routes = express.Router();

routes.post('/login', async (req,res) => {
    const {username, senha} = req.body;
    const user = await User.findOne({username}).select('+senha');
    //Verifica se o usuário existe.
    if (!user)
    return res.status(200).send({error: 'Usuário não cadastrado.'});
    //Decriptação e verificação da senha.
    if (!await bcrypt.compare(senha, user.senha))
    return res.status(200).send({error: 'Senha incorreta.'});

    user.senha = undefined;
    res.send({user, token: generateToken({id:user.id})});
});

routes.post('/register', async (req,res) => {
    const {username} = req.body;
 try { 
    if (await User.findOne({username}))
        return res.status(200).send({error: 'Usuário já cadastrado.'});
        
    const user = await User.create(req.body);

    user.senha = undefined;

    return res.send({ user, token: generateToken({id:user.id})});
}
    catch(err){
        console.log(err)
        return res.status(200).send({error: 'Falha ao registrar.'});
} 
});

routes.post('/busca', async(req, res) => {
    if(req.body.username){
        try {
            User.find({username: req.body.username}, function (err, docs) {
                if(err) console.log(err)
                else res.send(docs)
            });
        }
        catch(err){
            return res.status(200).send({error: 'Falha ao buscar usuário.'});
        } 
    } else {
        try {
            User.find({nome: new RegExp('^'+req.body.nome+'$', "i")}, function (err, docs) {
                if(err) console.log(err)
                else res.send(docs)
            });
        }
        catch(err){
            return res.status(200).send({error: 'Falha ao buscar usuário.'});
        } 
    }
    
})

routes.post('/buscar_posts', async(req, res) => {    
    try {
        Post.find({dono: req.body.username}, function (err, docs) {
            if(err) {
                console.log(err)
                res.status(200).send({error: 'Falha ao buscar posts do usuário.'})
                return 
            }
            res.send(docs)
        });
    } catch(err){
        return res.status(200).send({error: 'Falha ao buscar posts do usuário.'});
    } 
})

routes.post('/loginstatus', async(req, res) => {
    if(req.body.tipo == 'in'){
        try {
            User.findOneAndUpdate({_id: req.body.user._id}, {online: true} ,function(error,result){
                if(error){
                    return res.status(200).send({error: 'Falha ao logar usuário.'});
                }else{
                  res.send()
                }
              });
        }
        catch(err){
            return res.status(200).send({error: 'Falha ao logar usuário.'});
        } 
    } else {
        try {
            User.findOneAndUpdate({_id: req.body.user._id}, {online: false} ,function(error,result){
                if(error){
                    return res.status(200).send({error: 'Falha ao deslogar usuário.'});
                }else{
                  res.send()
                }
              });
        }
        catch(err){
            return res.status(200).send({error: 'Falha ao deslogar usuário.'});
        } 
    }    
})

module.exports = routes;