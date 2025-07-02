import express from "express";
import {
  createBook,
  home,
  newBook,
  showAll,
  showOne,
  updateBook,
  updateForm,
} from "../controller/booksController.js";

const router = express.Router();

// index/home
router.route("/").get(home);

// new book form
router.route("/book/new").get(newBook);

// create book
router.route("/book").post(createBook);

// read all books
router.route("/book").get(showAll);

// render update form
router.route("/book/:id/edit").get(updateForm); 

// read one book
router.route("/book/:id").get(showOne); 

// update book
router.route("/book/:id").put(updateBook); 

// RESTFUL Routing
// Read GET  ---> HTTP Verb
// Create POST
// Update PUT/PATCH
// delete DELETE

export default router;
