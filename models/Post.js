const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        trim:true,
        required:true
    },
    content: {
        type: String,
        trim:true,
        required:true
    }
})

module.exports = mongoose.model('posts', PostSchema);