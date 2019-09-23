const mongoose = require('mongoose');
const schema = new mongoose.Schema();

let userSchema = new schema({
    username: {type: string, required: true, unique: true},
    password: {type: string, required: true},
    email: {type: string, required: true, unique: true}
});

let User = mongoose.model('User', userSchema);

module.exports = User;