import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    author:String,
    numOfPages:Number
})

const Book = mongoose.model("book",bookSchema)

export default Book