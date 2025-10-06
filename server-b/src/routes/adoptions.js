import express from "express";
import { createAdoption } from "../controllers/adoptionController.js";
import pool from "../db/connection.js";

const router = express.Router();

// 🟢 Adoptiopyynnön vastaanotto
router.post("/", createAdoption);

// 🟢 Hae kaikki eläimet tietokannasta
router.get("/adoptions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM animals");
    res.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

export default router;
