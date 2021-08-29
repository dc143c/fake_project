const mongoose = require ('mongoose');

const MessageSchema = new mongoose.Schema({
    dono: {
        type: String,
        required: true
    },
    recebido_por: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    },
    imagens: [],
    emojis: [],
    disponibilidade: {
        type: Boolean,
        default: true
    },
    favoritado: {
        type: Boolean,
        default: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('Message', MessageSchema);