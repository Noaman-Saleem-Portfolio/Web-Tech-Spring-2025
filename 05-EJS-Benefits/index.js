import express from "express";
import appRoutes from "./routes/routes.js";

const app = express();
const PORT = 8000;

// setting view engine
app.set("view engine", "ejs");

// Middleware
// Using Routes
app.use(appRoutes);

app.listen(PORT, () => {
  console.log(`Servering is running on port ${PORT}`);
});
