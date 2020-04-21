const express = require('express');
const path = require('path');

const app = express();

const posts = [
    {
        "username": "Coach",
        "text": "This site is gonna blow up I can feel it",
        "likes": 0
    },
    {
        "username": "Spaku",
        "text": "Guys you need to play Okami HD",
        "likes": 0
    },
    {
        "username": "Reb",
        "text": ":Something Sexual:",
        "likes": 0
    },
    {
        "username": "Tybol",
        "text": "Just completed FFVII!!!",
        "likes": 0
    },
    {
        "username": "FoSho",
        "text": "I- I saw these guys at work AND",
        "likes": 0
    },
    {
        "username": "Diffy",
        "text": "Persona 5R isnt as good as Monkey Ball 2 tbh",
        "likes": 0
    }
];

app.get('/api/feed', (req, res) => {
    res.json(posts);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));