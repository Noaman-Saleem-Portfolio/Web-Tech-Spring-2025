import express from "express";
import { home, products } from "../controllers/controllers.js";

const router = express.Router();

// home route
router.route("/").get(home);

// products route
router.route("/products").get(products);

export default router;
