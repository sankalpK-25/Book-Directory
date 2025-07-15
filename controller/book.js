const express = require("express");

const Data = require("../data.json");

const Book =  require("../model/book")

const fs = require("fs");

const bookId = Math.floor(Math.random()*1000);

async function addNewBook(req,res) {
    const body = req.body;

    console.log(req);
    const newBook = {
        bookNo: bookId,
        title: body.title,
        genre: body.genre,
        author: body.author,
        year: body.year
    }
    
    Book.create(newBook);

    const books = await Book.find({})

    return res.render("home", {
        books: books,
    })
}

async function viewAllBooks(req,res) {
    const allBooks = await Book.find({});
    return res.render("home", {
        books: allBooks
    })
}

async function fectchBookById(req,res){
    const id = Number(req.params.id);

    const book = await Book.findOne({bookNo: id });

    if(book){

        return res.render("book", {
            book: book
        })
    }else{
        return res.status(404).json({msg: "Book Not Found"});
    }
}



module.exports = {
    addNewBook,
    viewAllBooks,
    fectchBookById,
}