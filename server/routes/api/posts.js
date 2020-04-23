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
    Post.findById(req.params.id, (err, data) => {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    });
});

// Upvote a post
router.put('/:id/like', (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {$inc: { likes: 1 } },
        (err, data) => {
            if (err) {
                return console.error(err);
            } else {
                res.send(data);
            }
        });
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
    Post.findByIdAndDelete(
        req.params.id,
        (err, data) =>{
        if (err) {
            return console.error(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;