let mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
});

let Post = module.exports = mongoose.model('Post', postSchema);