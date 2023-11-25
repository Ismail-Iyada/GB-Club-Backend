import express from "express"
import { contactMe } from "../controllers/contactMe.controller.js";

const router = express.Router();

router.post("/contact-me", contactMe)

export default router;