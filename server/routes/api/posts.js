const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let Post = require('../../models/post');

// Gets all post
router.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        if (err)  {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

// Get single post
router.get('/:id', (req, res) => {
    const found = posts.some(post => post.id === parseInt(req.params.id));

    if (found) {
        res.json(posts.filter(post => post.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'Post not found' });
    }
});

// Create post
router.post('/', (req, res) => {
    const newPost = {
        username: req.body.username,
        text: req.body.text,
        likes: 0
    }

    posts.push(newPost);
    res.json(posts);
});

// Delete post
router.delete('/:id', (req, res) => {
    const found = posts.some(post => post.id === parseInt(req.params.id));

    if (found){
        res.json({ msg: 'Post deleted', posts: posts.filter(post => post.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: 'Post not found' });
    }
});

module.exports = router;