import express from "express";
import { createAdoption } from "../controllers/adoptionController.js";

const router = express.Router();

// Adoptiohakemuksen vastaanotto
router.post("/", createAdoption);

export default router;
