const express = require('express');
const router = express.Router();

let User = require('../../models/user');

router.post('/register', (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ message: "Bad Request: Register user data is incomplete" });
        return; 
    }

    let userData = req.body;
    let user = new User ({
        username: userData.username,
        password: userData.password
    })

    user.save((err, registeredUser) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(registeredUser);
        }
    })
});

module.exports = router;