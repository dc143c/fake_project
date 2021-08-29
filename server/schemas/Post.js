const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema({
    dono: {
        type: String,
        required: true
    },
    recebido_por: {
        type: String,
        default: 'anon'
    },
    descricao: {
        type: String,
    },
    imagens: [],
    likeCount: {
        type: Number,
        default: 0
    },
    likes: [],
    commentCount: {
        type: Number,
        default: 0
    },
    comentarios: [],
    disponibilidade: {
        type: Boolean,
        default: true
    },
    favoritado: {
        type: Boolean,
        default: false
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('Post', PostSchema);