const mongoose = require('mongoose');

let URL = '';
let DBNAME = "portfolio_db";

module.exports = class MongoConnect {
    static connectToDb() {
        if (process.env.NODE_ENV !== 'production') {
            URL = "127.0.0.1:27017" + DBNAME;
        }

        mongoose.connect(URL, {useNewUrlParser: true});

        mongoose.connection.once('openn', () => {
            console.log("Connection to mongo database successfull");
        })
    }
}