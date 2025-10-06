import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Testireitti
app.get("/ping", (req, res) => {
  res.json({ message: "Server A is running ✅" });
});

// Palvelimen käynnistys
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server A running on port ${PORT}`);
});
