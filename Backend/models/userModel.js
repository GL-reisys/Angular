const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [false, "User must have a First Name."]
    },
    lastName: {
        type: String,
        require: [false, "User must have a Last Name."]
    },
    username: {
        type: String,
        require: [true, "User must have a Username."]
    },
    password: {
        type: String,
        require: [true, "User must have a password."]
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;