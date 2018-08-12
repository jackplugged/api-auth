const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/api-auth";

const options = {
    useNewUrlParser: true
};

mongoose.connect(uri, options, function(err) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

module.exports = mongoose;