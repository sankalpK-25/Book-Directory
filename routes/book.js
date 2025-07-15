const express = require("express");

const router = express.Router()

const { addNewBook,viewAllBooks, fectchBookById } = require("../controllers/book");


router.get("/", viewAllBooks);
router.post("/", async (req,res) => {
    return res.render("addbooks");
});

router.post("/book", addNewBook);

router.get("/book/:id",fectchBookById);



module.exports = router;
