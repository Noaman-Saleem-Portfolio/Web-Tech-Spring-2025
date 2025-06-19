import express from "express"
import {createBook, home, newBook} from "../controller/booksController.js"

const router = express.Router()

// index/home
router.route("/").get(home)

// new book form
router.route("/book/new").get(newBook)

// create book
router.route("/book").post(createBook)

 
export default router