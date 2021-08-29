const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        minlength: 3
    },
    sobrenome: {
        type: String,
        required: true,
        minlength: 3
    },
    senha: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
        select:false
    },
    email: {
        type: String,
        minlength: 1,
        maxlength: 80,
    },
    pushToken: {
        type: String
    },
    cidade: {
        type: String,
    },
    background: {
        type: String,
    },
    genero: {
        type: String,
    },
    race: {
        type: String,
    },
    status: {
        type: String,
    },
    configs: {
        type: String,
    },
    habilidades: [],
    amigos: [],
    bloqueados: [],
    role: {
      type: String,
      default: 'user',
    },
    configs: {
      type: String,
    },
    online: {
      type: Boolean,
      default: true,
    },
    disponibilidade: {
      type: Boolean,
      default: true,
    },
    visto_ultimo: {
      type: Date,
      default: Date.now,
    },
    reputacao: {
        icon: {
            type: String,
            default: 'circle notch'
        },
         alt: {
            type: String,
            default: 'New person'
        },
        color: {
            type: String,
            default: 'green'
        }
    },
    configs: {
        status: {
            type: String,
            required: true,
            default: "public"
        },
        perfil: {
            type: String,
            required: true,
            default: "public"
        },
        call: {
            type: String,
            required: true,
            default: "friends"
        },
        posts: {
            type: String,
            required: true,
            default: "public"
        },
        messages: {
            type: String,
            required: true,
            default: "public"
        }
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  
  next();
});

module.exports=mongoose.model('User', UserSchema);