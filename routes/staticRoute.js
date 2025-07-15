const express = require("express");
const router = express.Router();

const Book = require("../model/book");

router.get("/", async (req,res) => {
    const allBooks = await Book.find({});
    return res.render("home", {
        books: allBooks,
    });
});

router.get("/signup", (req,res) => {
    return res.render("signup")
})

router.get("/login", (req,res) => {
    return res.render("login")
})

module.exports = router;