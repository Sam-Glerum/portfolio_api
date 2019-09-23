const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const authentication = require('../authentication/authentication');
const userRepo = require('../database/repository/userRepo');

router.get('/', (req, res) => {
    res.send('yeet');
});

router.post('/register', (req, res) => {
    let username = req.params.username;
    let password = req.params.password;
    let email = req.params.email;

    if (!userRepo.createUser(username, password, email)) {
        res.status(400).json("Something went wrong");
    }
    res.status(200).json("User has been succesfully created");

});

module.exports = router;
