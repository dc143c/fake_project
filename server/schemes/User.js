const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    sobrenome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    senha: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
        select:false
    },
    trabalho: {
        type: String,
        minlength: 1,
        maxlength: 100,
        select:true
    },
    cidade: {
        type: String,
        minlength: 1,
        maxlength: 100,
        select:true
    },
    race: {
        type: String,
        minlength: 1,
        maxlength: 100,
        select:true
    },
    habilidades: {
        type: String,
        minlength: 1,
        maxlength: 100,
        select:true
    },
    email: {
      type: String,
      select: true
    },
    username: {
      type: String,
      select: true,
      required: true
    },
    genero: {
      type: String,
      select: true,
      required: true
    },
    nascimento: {
      type: Date,
      required: true
    },
    CreatedAt: {
        type:Date,
        default:Date.now,
    },
    role: {
      type:String,
      default: 'user',
    },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  
  next();
});

module.exports=mongoose.model('User', UserSchema);