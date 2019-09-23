const mongoose = require('mongoose');
const schema = mongoose.Schema;

let userSchema = new schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
});

let User = mongoose.model('User', userSchema);

module.exports = User;