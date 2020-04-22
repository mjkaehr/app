const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let Post = require('../../models/post');

// Gets all post
router.get('/', (req, res) => {
    Post.find((err, posts) => {
        if (err)  {
            return console.error(err);
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
    const newPost = new Post ({
        username: req.body.username,
        text: req.body.text,
        likes: 0
    })

    newPost.save((err, newPost) => {
        if (err) {
            return console.error(err);
        } else {
            res.json({ msg: 'post created'});
        }
    });
});

// Delete post
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, data) =>{
        if (err) {
            return console.error(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;