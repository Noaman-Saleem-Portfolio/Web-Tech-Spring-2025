import mongoose from "mongoose"

const connectDB =async () => {
    try {
        await mongoose.connect("mongodb+srv://noaman:12345@cluster0.0ks9dcd.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`Connected to MongoDB`);
        
    } catch (error) {
        console.log(`ON NO ERROR`);
        console.log(error);
    }
}

export default connectDB