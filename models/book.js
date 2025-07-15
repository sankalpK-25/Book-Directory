const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookNo : {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    }
});

const model = mongoose.model("book", bookSchema);

module.exports = model;