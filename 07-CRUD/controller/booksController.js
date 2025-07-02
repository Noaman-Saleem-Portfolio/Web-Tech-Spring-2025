import Book from "../model/bookModel.js";

export const home = (req, res) => {
  res.render("home");
};

export const newBook = (req, res) => {
  res.render("new");
};

// CRUD

// create
export const createBook = async (req, res) => {
  try {
    // console.log(req.body);
    const book = new Book(req.body);
    await book.save();
    res.redirect("/");
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
  }
};

// read all
export const showAll = async (req, res) => {
  try {
    const books = await Book.find();
    // console.log(books);

    res.render("showAll", { books });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
  }
};
 
// read one
export const showOne = async (req, res) => {
  try {
    const { id } = req.params; // object destructring

    const book = await Book.findById(id);
    // console.log(book);

    res.render("showOne", { book });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
  }
};

// render update form
export const updateForm = async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.findById(id)
    // console.log(book);
    
    res.render("updateForm.ejs",{book})
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
  }
  
};

// update book
export const updateBook = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(req.params);
    
    await Book.findByIdAndUpdate(id,req.body)
    
    res.redirect("/book")
    
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
  }
  
};