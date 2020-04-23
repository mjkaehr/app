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

// Like a post
router.put('/like', (req, res) => {
    console.log(req.body);
    if (!req.body.postId) {
        res.status(400).send('Bad Request: no post id in request')
        return;
    }
    Post.findByIdAndUpdate(
        req.body.postId,
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