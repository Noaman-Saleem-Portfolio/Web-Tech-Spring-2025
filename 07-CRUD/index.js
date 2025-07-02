import express from "express";
import booksRoutes from "./routes/bookRoutes.js";
import connectDB from "./databse/database.js";
import methodOverride from 'method-override'

const PORT = 8080;
const app = express();

connectDB();

// set view engine
app.set("view engine", "ejs");

app.use(methodOverride("_method"))
app.use(express.static("public"));
app.use(express.urlencoded());
//  using routes
app.use(booksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
