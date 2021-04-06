const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../schemes/User');
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
        return res.status(200).send({error: 'Falha ao registrar.'});
} 
});

routes.post('/busca', async(req, res) => {    
    User.find({nome: { $regex: '.*' + req.body.user_name + '.*' }}, function (err, docs) {
        if(err) console.log(err)
        else res.send(docs)
    });
})

routes.post('/busca_posts', async(req, res) => {    
    Posts.find({dono: { $regex: '.*' + req.body.user_name + '.*' }}, function (err, docs) {
        if(err) console.log(err)
        else res.send(docs)
    });
})

module.exports = routes;