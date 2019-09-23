const moment = require('moment');
const jwt = require('jwt-simple');

// Encode (from userid to token)
function encodeToken(userid, username) {
    const payload = {
        exp: moment().add(5, 'days').unix(),
        iat: moment().unix(),
        sub: userid,
        username: username
    };

    return jwt.encode(payload, process.env.secretKey, null, null)
}

// Decode (from token to userid)
function decodeToken(token, callback) {
    try {
        const payload = jwt.decode(token, process.env.secretKey, null, null);

        const now = moment.now();

        callback(null, payload);
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    encodeToken,
    decodeToken
};