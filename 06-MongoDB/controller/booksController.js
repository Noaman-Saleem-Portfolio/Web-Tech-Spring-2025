import Book from "../model/bookModel.js"

export const home = (req,res) => {
    res.render("home")
}

export const newBook = (req,res) => {
    res.render("new")
}

export const createBook = async (req,res) => {
try {
        // console.log(req.body);
    const book = new Book(req.body)
    await book.save()
    res.redirect("/")
} catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/")
}
}