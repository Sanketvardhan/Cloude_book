const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to DB successfully');
        })
        .catch((err) => {
            console.error('Failed to connect to DB', err);
        });
};

module.exports = connectToMongo;
