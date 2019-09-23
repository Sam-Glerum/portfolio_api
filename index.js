const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const server = express();

server.use(bodyParser.json());


server.use('/api', require('./routes/autenthication_routes'));


server.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

module.exports = server;