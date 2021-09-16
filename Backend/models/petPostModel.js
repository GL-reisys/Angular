const mongoose = require('mongoose');

const petPostSchema = new mongoose.Schema({
    petName: String,
    listingType: String,
    description: String,
    available: {type: Boolean, default: true},
    postDate: {type: Date, default: Date.now},
    pictureUrl: String,
    postUser: mongoose.ObjectId
});

const Pet = mongoose.model("Pet",petPostSchema);

module.exports = Pet;