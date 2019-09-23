const express = require('express');
const router = express.Router();
const mongoose = requier('mongoose');

const authentication = require('authentication/authentication');

router.get('/', (req, res) => {
    res.send('yeet');
});

router.post('/register', (req, res) => {
    let username = req.params.username;
    let password = req.params.password;
    let email = req.params.email;

});

module.exports = router;
