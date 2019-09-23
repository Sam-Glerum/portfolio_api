const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const authentication = require('../../authentication/authentication');
const User = require('../schema/userSchema');

module.exports = class userRepo {

    static async createUser(usernameParam, passwordParam, emailParam) {

        let BCRYPT_SALT_ROUNDS = 12;
        await User.FindOne({username: usernameParam})
        .then((user) => {
            if (user === null) {
                bcrypt.hash(passwordParam, BCRYPT_SALT_ROUNDS)
                    .then((hashedPassword) => {
                        const newUser = new User({
                            username: usernameParam,
                            password: hashedPassword,
                            email: emailParam
                        });
                        newUser.save();
                        return true;
                    })
                    .catch(() => {
                        return false;
                    })
            }
        })
            .catch(() => {
                return false;
            })
    }
};
