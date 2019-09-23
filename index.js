const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const server = express();

server.use(bodyParser.json());


server.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

module.exports = server;