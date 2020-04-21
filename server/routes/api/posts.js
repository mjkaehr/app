const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const posts = [
    {
        "id": 0,
        "username": "Coach",
        "text": "This site is gonna blow up I can feel it",
        "likes": 0
    },
    {
        "id": 1,
        "username": "Spaku",
        "text": "Guys you need to play Okami HD",
        "likes": 0
    },
    {
        "id": 2,
        "username": "Reb",
        "text": ":Something Sexual:",
        "likes": 0
    },
    {
        "id": 3,
        "username": "Tybol",
        "text": "Just completed FFVII!!!",
        "likes": 0
    },
    {
        "id": 4,
        "username": "FoSho",
        "text": "I- I saw these guys at work AND",
        "likes": 0
    },
    {
        "id": 5,
        "username": "Diffy",
        "text": "Persona 5R isnt as good as Monkey Ball 2 tbh",
        "likes": 0
    }
];

// Gets all post
router.get('/', (req, res) => {
    res.json(posts);
});

// Get single post
router.get('/:id', (req, res) => {
    const found = posts.some(post => post.id === parseInt(req.params.id));

    if (found){
        res.json(posts.filter(post => post.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'Post not found' });
    }
});

// Create post
router.post('/', (req, res) => {
    const newPost = {
        id: uuid.v4(),
        username: req.body.username,
        text: req.body.text,
        likes: 0
    }

    posts.push(newPost);
    res.json(posts);
});

module.exports = router;