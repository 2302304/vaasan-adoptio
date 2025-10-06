import express from "express";
import { getAllAnimals, getAnimalById } from "../controllers/animalController.js";

const router = express.Router();

// Hae kaikki eläimet
router.get("/", getAllAnimals);

// Hae yksittäinen eläin ID:n perusteella
router.get("/:id", getAnimalById);

export default router;
