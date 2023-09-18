import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getAll, create } from "../controllers/property.controller.js";

const router = express.Router();

router.get("/", getAll)
router.post("/",verifyToken, create)

export default router;