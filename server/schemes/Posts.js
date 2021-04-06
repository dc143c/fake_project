const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');

const PostSchema = new mongoose.Schema({
    dono: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    body: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    likes: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    comentarios: {
        type: Number,
        minlength: 1,
        maxlength: 100
    },
    CreatedAt: {
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model('Post', PostSchema);